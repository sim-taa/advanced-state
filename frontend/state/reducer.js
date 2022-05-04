// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as type from './action-types'

const initialWheelState = { counter:0 }
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case type.MOVE_CLOCKWISE:
      if(state.counter <= 4) {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }else{
        return {
          ...state,
          counter: 0,
        };
      }
    case type.MOVE_COUNTERCLOCKWISE:
      if(state.counter >0) {
        return {
          ...state,
          counter: state.counter - 1,
        }
      }else{
        return {
          ...state,
          counter:5
        };
      }
    default:
      return state;
  }}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case type.INPUT_CHANGE:
        return {
            ...state,
            ...action.payload,
        };
    case type.RESET_FORM:
        return { ...initialFormState };
    default:
  return state
  }
}
export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
