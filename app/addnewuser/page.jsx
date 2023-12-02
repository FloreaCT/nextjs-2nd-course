"use client";

import { useState } from "react";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addNewUserHandler = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter your name"
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
      />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Enter your age"
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
      />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email"
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
      />

      <button
        onClick={addNewUserHandler}
        className="bg-blue-300 rounded border p-4"
      >
        Add New User
      </button>
    </div>
  );
};

export default AddNewUser;
