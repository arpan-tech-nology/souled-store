import { menProducts } from "./menProducts";
import { sneakerProducts } from "./sneaker";
import { womenProducts } from "./womenProducts";

export const allProducts = [
  ...menProducts,
...womenProducts,
...sneakerProducts
];