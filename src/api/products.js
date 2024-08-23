// api/products.js
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
    const filePath = join(process.cwd(), 'data', 'db.json');
    const jsonData = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    res.status(200).json(data);
}
