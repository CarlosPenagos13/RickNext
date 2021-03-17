import { ERROR, LOADING, TRAER_CHARACTERS } from "../types/characters";

const INIT_STATE = {
  characters: [],
  loading: false,
  error: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TRAER_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: "",
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
