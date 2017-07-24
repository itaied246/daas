import {generateFile} from ".";
import {generateTypes} from "../api/types";
import {IModel} from "../models/interfaces";
import {logger} from "../utils";

const filename = "types.py";
const path = "api";

export const generateTypesFile = async (models: [IModel]) => {
    try {
        await generateFile(path, filename, generateTypes(models));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
};
