import React, { useEffect } from "react";
import { DatePicker, Button } from "antd";
import styles from "../../App.module.css";
import SvgComponent from "../../components/svgIcon";
import { useNavigate } from "react-router-dom";
import { getEnvTag } from "../../utils/env";
import http from "../../api/request";
import store from "../../store";
export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(getEnvTag());
    http
      .get(
        "https://api.github.com/repos/vuejs/vue/commits?per_page=10&sha=master",
        { a: "b" }
      )
      .then((result) => {
        console.log(result);
      });
  }, []);
  const handleClick = () => {
    store.dispatch({
      type: "INC",
    });
  };
  return (
    <>
      <div className={styles.test}>Test</div>
      <SvgComponent iconClass="logo" fontSize="30px" />
      <div>
        <span>{`${store.getState().count}`}</span>
      </div>
      <DatePicker />
      <Button onClick={() => navigate("/About")}>To</Button>
      <Button onClick={() => handleClick()}>Add</Button>
    </>
  );
}
