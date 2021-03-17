import axios from "axios";
import { ERROR, LOADING, TRAER_CHARACTERS } from "../Types/characters";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch({
      type: TRAER_CHARACTERS,
      payload: respuesta.data.results,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Algo salió mal, reconecte el servidor",
    });
  }
};
