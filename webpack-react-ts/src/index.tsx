import ReactDOM from "react-dom"
import { App } from './App'
const root: HTMLElement | null = document.querySelector('#app')
interface Props {
    className: string
}

const props: Props = {
    className: 'title'
}
ReactDOM.render(<App title="test"></App>, root)