"use client";

const ProjectAll = ({ params }) => {
  console.log({ params });
  return (
    <div>
      <h1>Projects {params.all}</h1>
      <br />
      All Routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default ProjectAll;
