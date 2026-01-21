export function formatPrice(price: number) {
  return `NT$ ${price.toLocaleString("zh-TW")}`;
}
