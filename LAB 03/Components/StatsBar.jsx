import "./StatsBar.css"

function StatsBar({ students }) {
    const total = students.length;
    const passed = students.filter((s) => s.score >= 40).length;
    const avg =
        total > 0
            ? Math.round(students.reduce((acc, s) => acc + s.score, 0) / total)
            : 0;
    return (
        <div className="statsBar">
            <div className="statsBarCard">
                <p className="statsBarLabel">TOTAL</p>
                <p className="statsBarValue">{total}</p>
            </div>
            <div className="statsBarCard">
                <p className="statsBarLabel">PASSED</p>
                <p className="statsBarValue">{passed}</p>
            </div>
            <div className="statsBarCard">
                <p className="statsBarLabel">AVG Score</p>
                <p className="statsBarValue">{avg}</p>
            </div>
        </div>
    );
}

export default StatsBar;