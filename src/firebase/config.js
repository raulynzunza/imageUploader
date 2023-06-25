import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAPQZoh7I5UValVZAvGuIR1xDfLQU3Otk8",
  authDomain: "upload-images-ef8c4.firebaseapp.com",
  projectId: "upload-images-ef8c4",
  storageBucket: "upload-images-ef8c4.appspot.com",
  messagingSenderId: "310576584897",
  appId: "1:310576584897:web:d08a47fb60e8a0a4ef5c40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, "files/" + v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
