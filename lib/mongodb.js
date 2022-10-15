import { MongoClient } from "mongodb";

const MONGODB = process.env.MONGODB;
const DB = process.env.DB;

// check the MongoDB URI
if (!MONGODB) {
  throw new Error("Define the MONGODB environmental variable");
}

// check the MongoDB DB
if (!DB) {
  throw new Error("Define the DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGODB, opts);
  await client.connect();
  let db = client.db(DB);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
