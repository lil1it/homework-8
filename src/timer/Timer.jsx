import React, { useEffect, useRef, useState } from "react";
import Card from "../components/UI/Card/Card";

const Timer = () => {
  const [checkOut, setCheckOut] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCheckOut((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  useEffect(() => {
    if (checkOut >= 60) clearInterval(timerId.current);
  }, [checkOut]);

  return <Card>
    <p>timer - {checkOut}</p>
  </Card>;
};

export default Timer;
