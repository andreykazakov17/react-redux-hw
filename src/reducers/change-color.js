import { GREEN, RED, BLUE } from "../constants";

const defaultValues = {
    color: undefined
}

export const colorReducer = (state = defaultValues, action) => {
    switch(action.type) {
        case GREEN: {
            return { color: "#00CC00" }
        }
        case RED: {
            return { color: "#FF0000" }
        }
        case BLUE: {
            return { color: "#1240AB" }
        }
        default: {
            return state;
        }
    }
}