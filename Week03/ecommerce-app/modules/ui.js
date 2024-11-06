import { addProductToCart } from "./storage.js";

const cardsContainer = document.querySelector(".cards-container");

const renderProducts = (products) => {
  if (!products.length) return;

  cardsContainer.innerHTML = "";
  products.forEach((product) => {
    const productModel = {
      id: product.id,
      image: product.image,
      title: product.title.split(" ").slice(0, 3).join(" "),
      price: product.price,
    };

    const html = renderProduct(productModel);
    const node = document.createRange().createContextualFragment(html);

    node
      .querySelector("button")
      .addEventListener("click", () => addProductToCart(productModel));
    cardsContainer.appendChild(node);
  });
};

const renderProduct = (model) => {
  const template = `
      <!-- one card -->
      <section class="flex flex-col h-96">
        <!-- image of product -->
        <div class="shrink-0 w-full h-3/5 py-8">
          <img
            class="w-full h-full object-contain"
            src=${model.image}
            alt="image of product"
          />
        </div>
        <!-- button add to Cart -->
        <button class="add__to__cart h-10 w-full bg-black text-white"'>Add to Cart</button>
        <!-- information about product -->
        <div class="flex flex-1 gap-2 flex-col justify-around">
          <h2 class="font-bold">${model.title}</h2>
          <span>${model.price} &#36;</span>
        </div>
      </section>
   `;

  return template;
};

export { renderProducts };
