import { GREEN, RED, BLUE } from "../constants";

const defaultValues = {
    color: undefined
}

export const colorReducer = (state = defaultValues, action) => {
    switch(action.type) {
        case GREEN: {
            return { color: state.color = "#00CC00" }
        }
        case RED: {
            return { color: state.color = "#FF0000" }
        }
        case BLUE: {
            return { color: state.color = "#1240AB" }
        }
        default: {
            return state;
        }
    }
}