import ThroughWindow from "@/public/devon-wilson-unsplash.jpg";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = { subsets: ["latin"], weight: "500" };

const Users = () => {
  return (
    <div className="text-center flex flex-col m-4 p-4 bg-blue-300">
      <ul className={roboto.className}>
        <li>This is a test</li>
        <li>For the fonts</li>
        <li>And it is working?</li>
      </ul>
      This text is not Roboto font!
      <Image
        src={ThroughWindow}
        alt="Through Window"
        width={500}
        height={500}
      />
      <Image
        src="https://images.unsplash.com/photo-1701339023431-49f2d3eb9c13?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Christmas bulbs"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Users;

export const generateMetadata = () => {
  return {
    title: "Users",
    description: "This is the users description",
  };
};
