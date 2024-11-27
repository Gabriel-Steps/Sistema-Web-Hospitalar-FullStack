import { db } from "../db.mjs";

export const getMedicos = (_, res) => {
    const q = "SELECT * FROM medicos";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    })
}