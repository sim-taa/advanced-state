//const initSmurfState = [];
import { combineReducers } from "redux"

const smurfReducer = (state = initSmurfState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    smurfReducer
})