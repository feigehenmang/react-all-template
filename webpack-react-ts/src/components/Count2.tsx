import React from "react";
import { connect } from "react-redux";
import { add } from "../store/actions/count";

function Count(props: { count: number, add: () => void }) {
    const { add, count } = props
    return <div onClick={() => add()}>{count}</div>
}
export default connect((state) => ({ count: (state as any).count.count }), { add: add })(Count)