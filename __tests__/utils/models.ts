import {IModel} from "../../src/models/interfaces/index";

export const tire: IModel = {
    fields: [
        {
            name: "f",
            type: "IntegerField()",
        },
    ],
    name: "Tire",
};

export const spec: IModel = {
    fields: [
        {
            name: "manufacturer",
            type: "TextField()",
        },
    ],
    name: "Spec",
};
