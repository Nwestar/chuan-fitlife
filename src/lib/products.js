import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  }));
}

export async function fetchProductById(id) {
  const productDoc = await getDoc(doc(db, "products", id));
  if (!productDoc.exists()) {
    return null;
  }
  return { id: productDoc.id, ...productDoc.data() };
}
