import { AnyAction } from "redux";
import { CountEnum } from "../reducer/action.type";

export function add(): AnyAction {
    return { type: CountEnum.ADD }
}
export function inc(): AnyAction {
    return { type: CountEnum.INC }
}
export function ano(value: number): AnyAction {
    return { type: CountEnum.ANO, value }
}