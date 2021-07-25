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
};

export default functions;
