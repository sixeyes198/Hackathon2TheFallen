import { db } from "../config/db.js";
// accessing postgresql

// All data
export const allFallens = () => {
  return db("soldiers").select("first_name", "last_name", "age", "content");
};

//Data by id
export const searchForFallen = (id) => {
  return db("soldiers")
    .select("id", "first_name", "last_name", "age", "content")
    .where({ id: id });
};

//Updatind data by id
export const editFallen = (first_name, last_name, age, content) => {
  return db("soldiers")
    .where({ id: id })
    .update({ first_name, last_name, age, content }, [
      "first_name",
      "last_name",
      "age",
      "content",
    ]);
};

//inserting data

export const enterFallen = (first_name, last_name, age, content) => {
  return db("soldiers").insert({ first_name, last_name, age, content }, [
    "first_name",
    "last_name",
    "age",
    "content",
  ]);
};
