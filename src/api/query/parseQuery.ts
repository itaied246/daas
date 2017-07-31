import {IModel} from "../../models/interfaces/index";
import {parseQueryType} from "./parseQueryType";

const parseQueryTypes = (models: IModel[]) =>
    models.map(parseQueryType).join("\n\n");

export const parseQuery = (models: IModel[]) =>
    `class Query(AbstractType):
${parseQueryTypes(models)}`;
