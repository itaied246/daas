import {generateFile} from ".";
import {IModel} from "../models/interfaces";
import {logger} from "../utils";
import {generateMutation} from "../api/mutation/generateMutation";

const filename = "mutation.py";
const path = "api";

export const generateMutationFile = async (models: IModel[]) => {
    try {
        await generateFile(path, filename, generateMutation(models));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
};
