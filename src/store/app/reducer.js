import initialState from "../initialState";
import { INITIALIZED } from "./actions";

export default function appReducer(
  state = initialState.app,
  { type, payload }
) {
  switch (type) {
    case INITIALIZED: {
      return { ...state, isInitialized: payload.isInitialized };
    }
    default:
      return state;
  }
}
