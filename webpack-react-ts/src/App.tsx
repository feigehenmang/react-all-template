import React, { useEffect } from "react";
import Count from "./components/Count1";
import Count2 from "./components/Count2";
import { useForceUpdate } from "./hooks/forceUpdate";
import store from "./store";
import { CountEnum } from "./store/reducer/action.type";

export function App(props: { title: string }) {
    // const forceUpdate = useForceUpdate()
    // useEffect(() => {
    //     store.subscribe(() => {
    //         forceUpdate()
    //     })
    // }, [])
    return <div>{props.title}<Count2 /><Count count={store.getState()?.count?.count} add={() => store.dispatch({ type: CountEnum.ADD })}></Count></div>
}