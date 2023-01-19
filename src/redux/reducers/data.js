import { ADD_DATA } from "../constants"

const defaultState = {
    dataLists: []
}

const data = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, dataLists: [action.payload] }
        case "LIKE":
            return {...state, dataLists: state.dataLists.map(data => (data.id === action.payload ? { ...data, like: !data.like } : data))}
        default:
            return state
    }
}

export default data