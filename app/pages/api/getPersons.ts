// Note: get the contacts here is a "dummy" call
import { NextApiResponse } from "next";
import * as fs from 'fs';
import path from "path";

export async function getPersons(res: NextApiResponse){
    const filePath = path.join(process.cwd(), 'file here');
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        return res.json(data);
      } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return res.json({ error: 'Failed to load data' });
      }
}