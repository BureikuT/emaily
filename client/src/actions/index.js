import axios from "axios";
import { FETCH_USER, LOGOUT_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get("/api/logout");
  dispatch({type: LOGOUT_USER, payload: res.data})
};