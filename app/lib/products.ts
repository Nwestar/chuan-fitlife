import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Product = {
  id: string;
  name: string;
  flavor: string;
  weight: string;
  price: number;
  status: string;
  description: string;
  usage: string;
  imageUrl: string;
};

const normalizeProduct = (id: string, data: Record<string, unknown>): Product => ({
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

export async function fetchProducts(): Promise<Product[]> {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map((docSnapshot) =>
      normalizeProduct(docSnapshot.id, docSnapshot.data())
    );
  } catch (error) {
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
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
