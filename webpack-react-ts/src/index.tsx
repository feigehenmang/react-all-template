import ReactDOM from "react-dom"
import React from 'react'
import { App } from './App'
import { Provider } from "react-redux"
import store from "./store"
import { CountEnum } from "./store/reducer/action.type"
import Count from "./components/Count1"
const root: HTMLElement | null = document.querySelector('#app')
interface Props {
    className: string
}

const props: Props = {
    className: 'title'
}
ReactDOM.render(<Provider store={store}>
    <App title="test"></App>
</Provider>, root)