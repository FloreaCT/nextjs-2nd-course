"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handelClick = (page) => {
    router.push(page);
  };

  return (
    <section>
      <h1> Use Router</h1>
      <Link
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
        href="/projects"
      >
        Go to Projects Page
      </Link>
      <button
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={() => handelClick("about")}
      >
        Go to About Page
      </button>
      <button
        className="border m-4 px-2 py-4 rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={() => handelClick("login")}
      >
        Go to Login Page
      </button>
    </section>
  );
};
export default Home;
