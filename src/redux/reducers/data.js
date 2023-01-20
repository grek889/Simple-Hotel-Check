import { ADD_DATA } from "../constants"

const defaultState = {
    dataLists: []
}

const data = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, dataLists: [action.payload] }
        default:
            return state
    }
}

export default data