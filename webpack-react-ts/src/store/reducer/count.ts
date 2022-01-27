import { AnyAction } from 'redux';
import { CountEnum } from './action.type';
const defaultState = {
    count: 0
}
export function countReducer(state = defaultState, action: AnyAction) {
    console.log(action, state)
    switch (action.type) {
        case CountEnum.ADD:
            return { ...state, count: state.count + 1 }
        case CountEnum.INC:
            return { ...state, count: state.count - 1 }
        case CountEnum.ANO:
            return { ...state, count: state.count + action.value }
        default:
            return state
    }
}