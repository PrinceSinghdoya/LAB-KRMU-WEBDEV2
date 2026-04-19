import StudentRow from "./StudentRow"
import "./StudentTable.css"

function StudentTable({students, onUpdateScore }){
    return(
        <div className="student-table">
            <div className="studentTable_header">
                <span className="studentTable_Label">STUDENT RECORDS</span>
                <span className="studentTable_Label">{students.length} entries</span>
            </div>
            <table className="studentTable_Table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>SCORE</th>
                        <th>STATUS</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(
                        <StudentRow 
                        key={student.id}
                        student={student}
                        onUpdateScore={onUpdateScore}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default StudentTable;