import { useState, useRef } from "react";
import Header from "./Components/Header";
import AddStudentForm from "./Components/AddStudentForm";
import StatsBar from "./Components/StatsBar";
import StudentTable from "./Components/StudentTable"
import "./App.css"

const initialStudents = [
  { id: 1, name: "Prince", score: 94 },
  { id: 2, name: "Aaryan", score: 46 },
  { id: 3, name: "Ishaan", score: 38 },
  { id: 4, name: "Krish", score: 43 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const nextID = useRef(initialStudents.length + 1);

  function addStudents(name, score) {
    setStudents((prev) => [
      ...prev,
      { id: nextID.current++, name, score },
    ]);
  }
  function updateScore(id, newScore) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: newScore } : s))
    );
  }
  return (
    <div className="app" >
      <Header />
      <AddStudentForm onAdd={addStudents} />
      <StatsBar students={students} />
      <StudentTable students={students} onUpdateScore={updateScore} />
    </div>
  );
}
export default App;