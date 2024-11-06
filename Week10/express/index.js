import express from "express";
import pg from "pg";

const { Client } = pg;

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query("SELECT * FROM products;");
    await client.end();
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json(`Error fetching products: ${error}`);
  }
});

app.post("/products", async (req, res) => {
  try {
    const body = req.body;
    if (!body) return res.end("Body is required!");
    const client = new Client({
      connectionString: process.env.PG_URI,
    });
    await client.connect();
    const results = await client.query(
      "INSERT INTO products (name, image, description, category, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [
        body.name,
        body.image,
        body.description,
        body.category,
        body.price,
        body.stock,
      ]
    );
    await client.end();
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(500).json(`Error create product: ${error}`);
  }
});

// app.post("/posts", (req, res) => res.json({ message: "POST a new post" }));
// app.get("/posts/:id", (req, res) => res.json({ message: "GET a post by id" }));
// app.put("/posts/:id", (req, res) => res.json({ message: "PUT a post by id" }));
// app.delete("/posts/:id", (req, res) =>
//   res.json({ message: "DELETE a post by id" })
// );

app.listen(port, () => console.log(`Server is running on port ${port}`));
