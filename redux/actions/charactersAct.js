import axios from "axios";
import { TRAER_POR_PERSONAJE } from "../types/characters";
import { TRAER_CHARACTERS } from "../types/personaje";

export const traerPersonaje = (key) => async (dispatch, getState) => {
  const { characters } = getState().charactersRedu;
  const { personaje } = getState().personajeRedu;
  const id = characters[key].id;

  const respuesta = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const personaje_actualizado = [...personaje, respuesta.data];

  const personaje_select = personaje_actualizado.length - 1;
  const characters_actualizados = [...characters];
  characters_actualizados[key] = {
    ...characters[key],
    personaje_select,
  };

  dispatch({
    type: TRAER_CHARACTERS,
    payload: characters_actualizados,
  });

  dispatch({
    type: TRAER_POR_PERSONAJE,
    payload: personaje_actualizado,
  });
};

export const traerPersonajeHistory = (key) => async (dispatch, getState) => {
  const { characters } = getState().charactersRedu;
  const id = characters[key].id;

  const respuesta = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const personaje_actualizado = respuesta.data;

  dispatch({
    type: TRAER_CHARACTERS,
    payload: personaje_actualizado,
  });
};
