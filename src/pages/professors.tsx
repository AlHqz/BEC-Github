import pbnLogo from "../assets/pbn_logo.png";
import ProfessorForm from "../components/ProfessorForm";

const Professor = () => {
  return (
    <div className="min-h-screen bg-black w-4/5 flex items-center flex-col text-white px-4 py-8">
       <div className="items-center mb-8 ">
        <img src={pbnLogo} alt="Plan B Network Logo" className="h-12 w-auto" />
      </div>
      <div className="w-full max-w-6xl">
        <ProfessorForm />
      </div>
    </div>
  );
};

export default Professor;