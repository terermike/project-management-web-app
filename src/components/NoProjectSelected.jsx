import noProject from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 mt-24 text-center ">
      <img
        src={noProject}
        alt="Empty List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected.
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or Get Started with a New One.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
