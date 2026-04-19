import { useState } from "react";
import "./AddStudentForm.css";

function AddStudentForm({onAdd}) {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [error, setError] = useState("");

    function handleSubmit() {
        const scoreCon = parseInt(score);
        if (!name.trim()) {
            setError("Please enter a student name.")
            return;
        }
        if(isNaN(scoreCon) || scoreCon < 0 || scoreCon > 100) {
            setError("Score must be a number between 0 and 100.")
            return;
        }
        onAdd(name.trim(), scoreCon)
        setName("");
        setScore("");
        setError("");
    }

    return (
        <div className="addForm">
            <div className="addFormHeader">
                <span className="addFormLabel">● REGISTER STUDENT</span>
                <span className="addFormLabel">ADD ENTRY</span>
            </div>
            <div className="addFormRow">
                <input
                    className="addFormInput"
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="addFormInput"
                    type="number"
                    placeholder="Score (0-100)"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button className="addFormBtn" onClick={handleSubmit}>+ ADD</button>
            </div>
            {error && <p className="add-form__error">{error}</p>}
        </div>
    );
}
export default AddStudentForm;