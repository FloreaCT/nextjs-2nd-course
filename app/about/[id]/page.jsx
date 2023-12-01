import { redirect } from "next/navigation";

const aboutId = ({ params }) => {
  if (params.id === "4") {
    redirect("/login");
  }
  return <div>This about id is {params.id}</div>;
};

export default aboutId;
