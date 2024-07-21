import React from "react";

import { Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Errro() {
  const navigate = useNavigate();
  const user = localStorage.getItem("userStatus");
  const userGroup = localStorage.getItem("userGroup");
  const logged = localStorage.getItem("logged");
  useEffect(() => {
    debugger;
    if (!logged) {
      if (user && !userGroup) navigate("/contact");
      else if (user && userGroup) navigate("/home");
      localStorage.setItem("logged", "true");
    }
  }, []);
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  );
}

export default Errro;
