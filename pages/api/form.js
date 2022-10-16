import { insertIntoCollection } from "../../helpers/dbOperations";
import { checkValidEmail } from "../../helpers/validEmailCheck";

export default async function handler(req, res) {
  // checking for POST request
  if (req.method === "POST") {
    // we'll get both name and email from the body
    const { name, email } = req.body;

    // checking if they are non-null values
    if (!name) {
      return res.status(400).json({
        error: true,
        message: "Name is required",
      });
    }
    // checking if the name is of string type
    if (typeof name !== "string") {
      return res.status(400).json({
        error: true,
        message: "Enter a valid name",
      });
    }

    /**
     *  here we'll get a valid name
     *  we'll now check for valid email address
     */
    if (!checkValidEmail(email)) {
      return res.status(400).json({
        error: true,
        message: "Enter a valid email",
      });
    }

    // here we have name and email, we can now proceed with the db entry
    try {
      await insertIntoCollection(name, email);
      return res.status(201).json({
        error: false,
        message: "Form submitted",
      });
    } catch (error) {
      return res.status(500).json({
        error: false,
        message: "Something went wrong on our side",
      });
    }
  }
}
