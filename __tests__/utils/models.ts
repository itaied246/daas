import {IModel} from "../../src/models/interfaces/index";

export const tire: IModel = {
    name: "Tire",
    fields: [
        {
            name: "f",
            type: "IntegerField()",
        },
    ],
    inputs: [],
};

export const spec: IModel = {
    name: "Spec",
    fields: [
        {
            name: "manufacturer",
            type: "TextField()",
        },
    ],
    inputs: [],
};

export const car: IModel = {
    name: "Car",
    fields: [
        {
            name: "seats",
            type: "IntegerField()",
        },
    ],
    inputs: [
        {
            name: "seats",
            type: "Int(required=True)",
        },
    ],
    description: "Car model description.",
};
