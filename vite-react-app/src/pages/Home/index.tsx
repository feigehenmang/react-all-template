import React, { useEffect } from "react";
import { DatePicker, Button } from "antd";
import styles from "../../App.module.css";
import SvgComponent from "../../components/svgIcon";
import { useNavigate } from "react-router-dom";
import { getEnvTag } from "../../utils/env";
import http from "../../api/request";
export default function About() {
  console.log(getEnvTag());
  const navigate = useNavigate();
  useEffect(() => {
    http
      .get(
        "https://api.github.com/repos/vuejs/vue/commits?per_page=10&sha=master",
        { a: "b" }
      )
      .then((result) => {
        console.log(result);
      });
  }, []);
  return (
    <>
      <div className={styles.test}>Test</div>
      <SvgComponent iconClass="logo" fontSize="30px" />
      <DatePicker />
      <Button onClick={() => navigate("/About")}>To</Button>
    </>
  );
}
