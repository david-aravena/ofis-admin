import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import app from '../../config'

const db = getFirestore(app);

export const getUserPublications = async () => {
  const publications = [];
  const querySnapshot = await getDocs(collection(db, "publications"));
  querySnapshot.forEach((doc) => {
    publications.push(doc.data());
  });
  return publications
}

export const saveDocument = async (publication) => {
  try {
    const docRef = await addDoc(collection(db, "publications"), publication);
    return docRef
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

