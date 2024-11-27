import { db } from "../db.mjs";

export const getSecretarios = (_, res) => {
    const q = "SELECT * FROM secretarios";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    })
}