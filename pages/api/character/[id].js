import DB from "../../../database/db";

const allCharacters = async (request, response) => {
  const db = new DB();

  const id = request.query.id;

  const character = await db.getById(id);

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ data: character }));
};

export default allCharacters;
