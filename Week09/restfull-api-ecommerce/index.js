import http from "http";
import { returnErrorWithMessage, regex } from "./utils.js";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./crudOperations.js";

const resource = "/products";

const requestHandler = async (req, res) => {
  const { method, url } = req;
  if (url === resource) {
    if (method === "GET") return await getProducts(req, res);
    if (method === "POST") return await createProduct(req, res);
    else return returnErrorWithMessage(res, 405, "Method Not Allowed");
  } else if (regex(resource).test(url)) {
    if (method === "GET") return await getProductById(req, res);
    if (method === "PUT") return await updateProduct(req, res);
    if (method === "DELETE") return await deleteProduct(req, res);
    else return returnErrorWithMessage(res, 405, "Method Not Allowed");
  } else {
    return returnErrorWithMessage(res, 404, "Resource Not Found");
  }
};

const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
