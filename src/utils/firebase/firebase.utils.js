import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
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

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName:'Moni'} ) => {
  if(!userAuth) return;
  
   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);
  
   if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
   }
 
   return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)

}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)

}