import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const functions = {
  async fbPopup() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebaseApp.auth().signInWithPopup(provider);
  },
  async addUser(user) {
    await db.collection('users').doc(user.id).set({
      name: user.name,
      avatar: user.avatar,
    }, { merge: true });
  },
  async getContactList(userId) {
    const list = [];

    const results = await db.collection('users').get();

    results.forEach((result) => {
      const data = result.data();

      if (result.id !== userId) {
        list.push({
          id: result.id,
          name: data.name,
          avatar: data.avatar,
        });
      }
    });

    return list;
  },
  async addNewChat(user, userChat) {
    const newChat = await db.collection('chats').add({
      messages: [],
      users: [user.id, userChat.id],
    });

    db.collection('users').doc(user.id).update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chat_id: newChat.id,
        title: userChat.name,
        image: userChat.avatar,
        with: userChat.id,
      }),
    });

    db.collection('users').doc(userChat.id).update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        chat_id: newChat.id,
        title: user.name,
        image: user.avatar,
        with: user.id,
      }),
    });
  },
  onChatList(userId, setChatList) {
    return db.collection('users').doc(userId).onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();

        if (data.chats) {
          setChatList(data.chats);
        }
      }
    });
  },
  onChatContent(chatId, setList, setUsers) {
    return db.collection('chats').doc(chatId).onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();

        if (data.messages) {
          setList(data.messages);
          setUsers(data.users);
        }
      }
    });
  },
  async sendMessage(chatData, userId, type, body, users) {
    db.collection('chats').doc(chatData.chat_id).update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        type,
        author: userId,
        body,
        date: new Date(),
      }),
    });

    const formatMessageDate = async (i) => {
      const user = await db.collection('users').doc(users[i]).get();
      const userData = user.data();

      if (userData.chats) {
        const chats = [...userData.chats];

        // eslint-disable-next-line no-restricted-syntax
        for (const e in chats) {
          if (chats[e].chat_id === chatData.chat_id) {
            chats[e].last_message = body;
            chats[e].last_message_date = new Date();
          }
        }

        await db.collection('users').doc(users[i]).update({
          chats,
        });
      }
    };

    const promises = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const user in users) {
      if (user) {
        formatMessageDate(user);
      }
    }

    await Promise.all(promises);
  },
};

export default functions;
