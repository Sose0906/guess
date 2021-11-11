import {useSelector} from "react-redux";

import "./Results.css";

const Results = () => {
    const answers = useSelector(state => state.answers);
    const gameOver = useSelector(state => state.gameOver);
    const win = useSelector(state => state.win);

    return (
        <div className="results">
            <div className="answers">
                {answers.map(answer => {
                    const boxClassName = `result-box ${answer.correct ? "correct" : "wrong"}`;
                    return (
                        <div className={boxClassName}>
                            <p>{answer.answer}</p>
                            <p>Was {answer.correctAnswer}</p>
                        </div>
                    )
                })}
            </div>
            {gameOver
                ? <h1>YOU {win ? "WIN" : "LOST"}</h1>
                : null
            }
        </div>
    )
};

export { Results };