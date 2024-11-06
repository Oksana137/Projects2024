import Student from "./components/Student.jsx";
import studentsData from "./data/students.js";

function App() {
  return (
    <div className="p-8 bg-slate-400">
      <div className="grid grid-cols-4 gap-8">
        {studentsData.map((studentData) => (
          <Student key={studentData.id} studentData={studentData} />
        ))}
      </div>
    </div>
  );
}

export default App;
