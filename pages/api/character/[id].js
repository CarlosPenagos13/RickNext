import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";

const allCharacters = async (
  request = NextApiRequest,
  response = NextApiResponse
) => {
  const db = new DB();

  const id = request.query.id;

  const character = await db.getById(id);

  response.status(200).json(character);
};

export default allCharacters;
