import React from "react";
import { DatePicker, Button } from "antd";
import styles from "../../App.module.css";
import SvgComponent from "../../components/svgIcon";
import { useNavigate } from "react-router-dom";
export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.test}>Test</div>
            <SvgComponent iconClass="logo" fontSize="30px" />
            <DatePicker />
            <Button onClick={() => navigate("/About")}>To</Button>
        </>
    );
}
