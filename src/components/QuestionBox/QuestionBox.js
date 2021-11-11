import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {convertKelvinToCelsius} from "../../helpers";
import {checkAnswer, nextQuestion} from "../../redux/actions";

import './QuestionBox.css';

const QuestionBox = () => {
    const [celsius, setCelsius] = useState("");
    const currentCity = useSelector(state => state.cities[state.currentQuestionIndex]);
    const gameOver = useSelector(state => state.gameOver);
    const dispatch = useDispatch();
    const onChangeCelsius = useCallback((event) => setCelsius(event.target.value), [])

    const onCheck = useCallback(async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=9cff733aee57cb05b63dd4f731c46bc4`;
        const response = await fetch(url);
        const result = await response.json();
        const correctAnswer = convertKelvinToCelsius(result.main.temp);
        const correctAnswerRounded = Math.round(correctAnswer);
        dispatch(checkAnswer({ answer: +celsius, correctAnswer: correctAnswerRounded }));
        dispatch(nextQuestion());
    }, [currentCity, celsius, dispatch]);

    return (
        <div className="questionBox">
            <h4>{currentCity}</h4>
            <input value={celsius} onChange={onChangeCelsius} type="number" disabled={gameOver}/>
            <button onClick={onCheck} disabled={gameOver}>Check</button>
        </div>
    );
}


export {QuestionBox};
