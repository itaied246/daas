import { generateFile } from ".";
import { generateTypes } from "../api/types";
import { IModel } from "../models/interfaces";

const filename = "types.py";
const path = "../generated/api";

export const generateTypesFile = async (models: [IModel]) => {
    try {
        await generateFile(path, filename, generateTypes(models));
    } catch (e) {
        console.error(`Failed generating types file ${path}/${filename} `, e);
    }
};
