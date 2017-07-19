import { IModel } from "../models/interfaces"
import { generateFile } from '.';
import { generateTypes } from "../api/types";

const filename = "types.py";
const path = "./api";

export const generateTypesFile = async (models: [IModel]) => {
    try {
        await generateFile(path, filename, generateTypes(models))
    } catch (e) {
        console.error(`Failed generating types file ${path}/${filename} `, e)
    }
}