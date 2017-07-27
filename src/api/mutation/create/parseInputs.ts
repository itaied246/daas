import {IField} from "../../../models/interfaces/index";

export const parseInputs = (inputs: IField[]) =>
    inputs
        .map((input) => `        ${input.name} = graphene.${input.type}`)
        .join("\n");
