import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPVGBp36Q2lT8JaOhVZ1g3MTfdGvYNWbo",
    authDomain: "monisha-clothing-db.firebaseapp.com",
    projectId: "monisha-clothing-db",
    storageBucket: "monisha-clothing-db.appspot.com",
    messagingSenderId: "916260313630",
    appId: "1:916260313630:web:4ab0a181b820f012b5ec0f"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 