import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ShoppingCart, Search, UserRound } from "lucide-react";
import "./styles.css";

const demoProducts = [
  {
    id: "p-001",
    name: "Everyday Backpack",
    price: 79,
    category: "Bags",
    stock: 24,
  },
  {
    id: "p-002",
    name: "Wireless Desk Lamp",
    price: 42,
    category: "Home",
    stock: 12,
  },
  {
    id: "p-003",
    name: "Cotton Travel Jacket",
    price: 118,
    category: "Apparel",
    stock: 8,
  },
];

function App() {
  const [products, setProducts] = useState(demoProducts);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:4000/api/products");

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        setProducts(data.length ? data : demoProducts);
      } catch {
        setProducts(demoProducts);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">MVP Storefront</p>
          <h1>Commerce starter</h1>
        </div>
        <nav className="actions" aria-label="Store actions">
          <button aria-label="Search products">
            <Search size={18} />
          </button>
          <button aria-label="Account">
            <UserRound size={18} />
          </button>
          <button aria-label="Shopping cart">
            <ShoppingCart size={18} />
          </button>
        </nav>
      </header>

      <section className="toolbar" aria-label="Product filters">
        <button className="active">All</button>
        <button>Bags</button>
        <button>Home</button>
        <button>Apparel</button>
      </section>

      <section className="product-grid" aria-label="Featured products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-media">
              <span>{product.category}</span>
            </div>
            <div className="product-info">
              <div>
                <h2>{product.name}</h2>
                <p>{product.stock} in stock</p>
              </div>
              <strong>${product.price}</strong>
            </div>
            <button className="add-button">Add to cart</button>
          </article>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
