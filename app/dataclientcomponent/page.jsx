"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DataClientComponent = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setProduct(json);
      console.log(json);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {product.map((item) => (
        <li key={item.id} className="border m-4 px-2 py-4 rounded">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Image src={item.image} alt={item.title} width={100} height={100} />
        </li>
      ))}
    </ul>
  );
};

export default DataClientComponent;
