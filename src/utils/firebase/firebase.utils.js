import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBzEWCVWjkqRO37qN2JDMpMXhozsNYR5wY",
  authDomain: "monisha-cloths-db.firebaseapp.com",
  projectId: "monisha-cloths-db",
  storageBucket: "monisha-cloths-db.appspot.com",
  messagingSenderId: "897383398198",
  appId: "1:897383398198:web:f15d53a4ea30bdd7d31197"
};
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect (auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);
  
 // if user data not exists
   // create / set the document with the data from userAuth in my collection
   if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
   }
 
   return userDocRef;
  
   //if user data exists
   //return userDocRef
};