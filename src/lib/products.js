import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const normalizeProduct = (docSnapshot) => {
  const data = docSnapshot.data();
  return {
    id: docSnapshot.id,
    name: data.name ?? "",
    price: data.price ?? 0,
    description: data.description ?? "",
    usage: data.usage ?? "",
    flavor: data.flavor ?? "",
    weight: data.weight ?? "",
    status: data.status ?? "",
    imageUrl: data.imageUrl ?? data.image ?? "",
  };
};

export async function fetchProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((docSnapshot) => normalizeProduct(docSnapshot));
}

export async function fetchProductById(id) {
  const productDoc = await getDoc(doc(db, "products", id));
  if (!productDoc.exists()) {
    return null;
  }
  return normalizeProduct(productDoc);
}
