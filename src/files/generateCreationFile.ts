import {IModel} from "../models/interfaces/index";
import {generateFile} from "./generateFile";
import {generateCreate} from "../api/mutation/create/generateCreate";
import {logger} from "../utils/logger";

const path = "api/mutations";
const filename = `create.py`;

export const generateCreationFile = async (models: IModel[]) => {
    try {
        await generateFile(path, filename, generateCreate(models));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
};
