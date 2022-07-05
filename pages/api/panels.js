import fs from "fs";

export default async function handler(req, res) {
  return res
    .status(200)
    .json(JSON.parse(fs.readFileSync(`${process.cwd()}/panels.json`)));
}
