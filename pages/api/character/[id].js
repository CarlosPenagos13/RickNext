import DB from "../../../database/db";

const allCharacters = async (request, response) => {
  const db = new DB();

  const id = request.query.id;

  const entry = await db.getById(id);

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify(entry));
};

export default allCharacters;
