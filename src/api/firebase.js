// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import {v4 as uuid} from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export async function login() {
    return signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    console.log(user);
    return user;
  })
  .catch(console.error);
}

export async function logout() {
    return signOut(auth)
    .then(null)
    .catch(console.error);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
      // console.log(user);
      const updatedUser = user ? await adminUser(user) : null;
      callback(updatedUser);
    });
}

async function adminUser(user) {

return get(ref(db, 'admins'))
.then((snapshot) => {
  if (snapshot.exists()) {
    const admins = snapshot.val();
    // console.log(admins);
    const isAdmin = admins.includes(user.uid);
    return {...user, isAdmin};

  } else {
    return user;
  }
})
.catch((error) => {
  console.error(error);
});
}


export async function addNewProduct(product, image) {
  const id = uuid();
  set(ref(db, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options : product.options.split(','),
  })
}