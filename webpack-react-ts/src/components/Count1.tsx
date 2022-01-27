import React from "react";

export default function Count(props: { count: number, add: () => void }) {
    return <div onClick={() => {
        props.add()
    }}>{props?.count}</div>
}