import fs from 'fs'
let model;
export function loadJson() {
    model = JSON.parse(fs.readFileSync('recommendationModel.json', { encoding: 'utf8' }));
}
export default function getModel() {
    return model;
}