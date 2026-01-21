import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const normalizeProduct = (id, data) => ({
  id,
  name: String(data.name ?? ""),
  flavor: String(data.flavor ?? ""),
  weight: String(data.weight ?? ""),
  price: Number(data.price ?? 0),
  status: String(data.status ?? ""),
  description: String(data.description ?? ""),
  usage: String(data.usage ?? ""),
  imageUrl: String(data.imageUrl ?? ""),
});

export async function fetchProducts() {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map((docSnapshot) =>
      normalizeProduct(docSnapshot.id, docSnapshot.data())
    );
  } catch (error) {
    return [];
  }
}

export async function fetchProductById(id) {
  try {
    const productDoc = await getDoc(doc(db, "products", id));
    if (!productDoc.exists()) {
      return null;
    }
    return normalizeProduct(productDoc.id, productDoc.data());
  } catch (error) {
    return null;
  }
}
