import {imports} from "./imports";
import {IModel} from "../../models/interfaces/index";
import {parseMutation} from "./parseMutation";

export const generateMutation = (models: IModel[]) =>
    `${imports}


${parseMutation(models)}`;
