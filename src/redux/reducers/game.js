import {CHECK_ANSWER, NEXT_QUESTION} from "../actions/actions";

const initialState = {
    cities: ["Yerevan", "Moscow", "Paris", "London", "New York"],
    currentQuestionIndex: 0,
    gameOver: false,
    win: false,
    answers: []
};

const WIN_CORRECT_ANSWERS = 3;

export const game = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_ANSWER: {
            const { answer, correctAnswer } = action.payload;
            const correct = Math.abs(correctAnswer - answer) <= 5;
            const id = state.answers.length;
            return {
                ...state,
                answers: [
                    ...state.answers,
                    {
                        ...action.payload,
                        id,
                        correct
                    }
                ]
            }
        }
        case NEXT_QUESTION: {
            const gameOver = state.currentQuestionIndex === state.cities.length - 1;
            const correctAnswers = state.answers.filter(({ correct }) => correct);
            const win = gameOver && correctAnswers.length >= WIN_CORRECT_ANSWERS;

            const currentQuestionIndex = gameOver ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            return {
                ...state,
                currentQuestionIndex,
                gameOver,
                win
            };
        }
        default: {
            return state;
        }
    }
};
