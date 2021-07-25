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
};

export default functions;
