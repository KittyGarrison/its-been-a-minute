// Note: get the contacts here is a "dummy" call
import * as fs from 'fs';
import { NextResponse } from "next/server";
import path from 'path';

export default async function getPersons(){
    const filePath = path.join(process.cwd(), 'data', 'Persons.json');
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        console.log(data);
        return NextResponse.json(data);
      } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return NextResponse.json({ error: 'Failed to load data' });
      }
}

getPersons();
