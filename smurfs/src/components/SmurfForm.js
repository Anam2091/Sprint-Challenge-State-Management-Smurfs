import React, { useState } from 'react';
import { connect } from "react-redux";
import {postSmurf} from '../actions'
const SmurfForm  = ({postSmurf}) => {

    const [state, setState] = useState({
        name: "",
        age: "",
        height: ""
      });

  const handleChanges = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitItem = (e) => {
    e.preventDefault();
    console.log(state);
    postSmurf(state)
  };

    return (
      <div>
        <form onSubmit={submitItem}>
          <label>
              Name
            <input
              type="text"
              name="name"
              onChange={handleChanges}
              value={state.name}
            />
          </label>
          <label>
              Age
            <input
              type="text"
              name="age"
              onChange={handleChanges}
              value={state.age}
            />
          </label>
          <label>
              Height
            <input
              type="text"
              name="height"
              onChange={handleChanges}
              value={state.height}
            />
          </label>
          <button>Add Smurf</button>
        </form>
      </div>
    );
}

export default connect(
    null,
    { postSmurf }
  )(SmurfForm);

