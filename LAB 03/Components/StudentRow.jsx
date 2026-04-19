import { useState } from "react";
import "./StudentRow.css"

function StudentRow({student, onUpdateScore}){
    const [editScore, setEditScore] = useState(String(student.score));
    const isPass =student.score>=40;

    function handleSave(){
        const editScoreCon = parseInt(editScore);

        if (!isNaN(editScoreCon) && editScoreCon>= 0 && editScoreCon <= 100){
            onUpdateScore(student.id, editScoreCon);
        }
    }

    return(
        <tr className="StudentRow">
            <td>{student.name}</td>
            <td>
                <span className={isPass ? "StudentRow_score-pass" : "StudentRow_score-fail"}>
          {student.score}
          </span>
            </td>
            <td>
                <span className={`studentRow_badge ${isPass ? "studentRow_badge-pass" : "studentRow_badge-fail"}`}>
                    {isPass ? "PASS" : "FAIL"}
                </span>
            </td>
            <td>
                <div className="studentRow_update">
                    <input 
                    className="studentRow_input"
                    type="number"
                    min={0}
                    max={100}
                    value={editScore}
                    onChange={(e)=> setEditScore(e.target.value)}
                    />
                    <button className="studentRow_btn" onClick={handleSave}>
                        SAVE
                    </button>
                </div>
            </td>
        </tr>
    );
}
export default StudentRow;