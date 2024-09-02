import React, { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

const App = () => {
  const [products, setProducts] = useState(() => {
    const data = localStorage.getItem("products");
    return data
      ? JSON.parse(data)
      : [
          { id: 1, name: "Велосипед", price: 1000, count: 1 },
          { id: 2, name: "Самокат", price: 700, count: 1 },
          { id: 3, name: "Ролики", price: 1300, count: 2 },
          { id: 4, name: "Сноуборд", price: 19000, count: 4 },
        ];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    const name = prompt("Введите название товара:");
    const price = prompt("Введите цену товара:");
    const count = prompt("Введите количество товара:");

    if (name && price && count) {
      const newProduct = {
        id: products.lenght + 1,
        name,
        price: parseFloat(price),
        count: parseInt(count, 10),
      };
      setProducts([...products, newProduct]);
    }
  };

  const handleIncrement = (id) => {
    const updateProducts = products.map((product) =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(updateProducts);
  };

  const handleDecrement = (id) => {
    const updateProducts = products
      .map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
      .filter((product) => product.count > 0);
    setProducts(updateProducts);
  };

  const handleDelete = (id) => {
    const updateProducts = products.filter((product) => product.id !== id);
    setProducts(updateProducts);
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <button onClick={handleAddProduct}>Добавить товар</button>
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default App;
