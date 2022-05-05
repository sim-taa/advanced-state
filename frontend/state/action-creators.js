// ❗ You don't need to add extra action creators to achieve MVP
import * as type from './action-types'
import axios from 'axios';

export function moveClockwise(value) {
  return { type: type.MOVE_CLOCKWISE, payload: value };
}

export function moveCounterClockwise(value) { 
   return { type: type.MOVE_COUNTERCLOCKWISE, payload: value };
}

export function selectAnswer(answerId) {
  return { type: type.SET_SELECTED_ANSWER, payload: answerId };
 }

export function setMessage(message) {
  return { type: type.SET_INFO_MESSAGE, payload: message };
 }

export function setQuiz(question) {
  return { type: type.SET_QUIZ_INTO_STATE, payload: question };
 }

export function inputChange(input) {
  return { type: type.INPUT_CHANGE, payload: input }
 }

export function resetForm() {
  return { type: type.RESET_FORM };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch((err) =>  {
        console.error(err);
      });
  };
};
export function postAnswer({ quiz_id, answer_id}) {
  return function (dispatch) {
    axios
    .post(`http://localhost:9000/api/quiz/answer`, { quiz_id, answer_id })
    .then((res) => {
      dispatch(selectAnswer(null));
      dispatch(setQuiz(null));
      dispatch(fetchQuiz());
      dispatch(setMessage(res.data.message));
    })
    .catch((err) => {
        console.error(err);
    });
  }}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
export function postQuiz({ question_text, true_answer_text, false_answer_text }) {
  return function (dispatch) {
      axios
          .post(`http://localhost:9000/api/quiz/new`, {
              question_text,
              true_answer_text,
              false_answer_text,
          })
          .then((res) => {
              console.log(res.data);
              dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`));
              dispatch(resetForm());
          })
          .catch((err) => console.error(err));
  };
}