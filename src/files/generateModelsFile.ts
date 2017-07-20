import {generateFile} from ".";
import generateModels from "../models/generateModels";
import {IModel} from "../models/interfaces";

const filename = "models.py";
const path = "../generated/models";

export const generateModelsFile = async (models: [IModel]) => {
    try {
        await generateFile(path, filename, generateModels(models));
    } catch (e) {
        console.error(`Failed generating models file ${path}/${filename} `, e);
    }
};
