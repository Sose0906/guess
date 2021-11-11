import {CHECK_ANSWER, NEXT_QUESTION} from "./actions";

export const checkAnswer = payload => ({ type: CHECK_ANSWER, payload });
export const nextQuestion = payload => ({ type: NEXT_QUESTION, payload });
