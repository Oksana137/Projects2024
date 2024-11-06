import { fetchProducts } from "./modules/network.js";
import { renderProducts } from "./modules/ui.js";

const products = await fetchProducts();
renderProducts(products);
