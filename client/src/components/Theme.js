import React from "react";
import Switch from "@material-ui/core/Switch";
import "../styles/Theme.css";
<<<<<<< HEAD

=======
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });
<<<<<<< HEAD

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

=======
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
