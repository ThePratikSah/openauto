const { connectToDatabase } = require("../lib/mongodb");

export async function insertIntoCollection(name, email) {
  let { db } = await connectToDatabase();
  return await db.collection('form').insertOne({ name, email });
}