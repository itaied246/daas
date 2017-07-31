import {generateFile} from ".";
import generateModels from "../models/generateModels";
import {IModel} from "../models/interfaces";
import {logger} from "../utils";

const filename = "models.py";
const path = ".";

export const generateModelsFile = async (models: IModel[]) => {
    try {
        await generateFile(path, filename, generateModels(models));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
};
