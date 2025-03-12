import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIhhgE4tAzHE7Fp1xEyL2jTWIGBgeQo0M",
  authDomain: "awesome-sorter.firebaseapp.com",
  projectId: "awesome-sorter",
  storageBucket: "awesome-sorter.firebasestorage.app",
  messagingSenderId: "124397735435",
  appId: "1:124397735435:web:3b0f788ba2c8b8daf0410e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export async function signInWithGithub() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      return credential.accessToken;
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error(error);
      }
      throw new Error('Failed to sign in with GitHub.');
    });
}

export async function signOutFromGithub() {
  return signOut(auth).catch((error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    throw new Error('Failed to sign out from GitHub.');
  });
}
