import {IModel} from "../models/interfaces/index";
import {generateFile} from "./generateFile";
import {generateCreate} from "../api/mutation/create/generateCreate";
import {logger} from "../utils/logger";

const path = "api/mutation/create";

const generateCreationFile = async (model: IModel) => {
    const filename = `${model.name}.py`;
    try {
        await generateFile(path, filename, generateCreate(model));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
}

export const generateCreationFiles = async (models: IModel[]) =>
    await models.forEach(generateCreationFile);
