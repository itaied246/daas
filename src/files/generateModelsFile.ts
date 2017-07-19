import { IModel } from "../models/interfaces"
import { generateFile } from '.';
import generateModels from "../models/generateModels";

const filename = "models.py";
const path = "./models";

export const generateModelsFile = async (models: [IModel]) => {
    try {
        await generateFile(path, filename, generateModels(models))
    } catch (e) {
        console.error(`Failed generating models file ${path}/${filename} `, e)
    }
}