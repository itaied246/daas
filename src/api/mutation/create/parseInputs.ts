import {IField} from "../../../models/interfaces/index";

export const parseInputs = (body: IField[]) =>
    body
        .map((field) => `        ${field.input.name} = graphene.${field.input.type}`)
        .join("\n");
