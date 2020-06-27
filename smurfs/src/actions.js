// Action creators
import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

const headers = {
  Accept: "application/json"
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_DATA });
  axios
    .get("http://localhost:3333/smurfs", { headers })
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
};


export const postSmurf = (someValue) =>(dispatch) => {
    axios.post(`http://localhost:3333/smurfs`, someValue)
    .then(res => {
        dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
}