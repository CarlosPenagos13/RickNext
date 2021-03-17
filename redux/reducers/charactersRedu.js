import { ERROR, LOADING, TRAER_POR_PERSONAJE } from "../Types/characters";

const INIT_STATE = {
  characters: [],
  loading: false,
  error: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TRAER_POR_PERSONAJE:
      return {
        ...state,
        personaje: action.payload,
        loading: false,
        error: "",
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
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
