import {generateFile} from ".";
import {generateQuery} from "../api/query/generateQuery";
import {IModel} from "../models/interfaces";
import {logger} from "../utils";

const filename = "query.py";
const path = "api/query";

export const generateQueryFile = async (models: IModel[]) => {
    try {
        await generateFile(path, filename, generateQuery(models));
    } catch (e) {
        logger.error(`Failed generating file ${path}/${filename} `, e);
    }
};
