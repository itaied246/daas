import {IModel} from "../../src/models/interfaces/index";

export const tire: IModel = {
    name: "Tire",
    fields: [
        {
            field: {
                name: "f",
                type: "IntegerField()",
            },
        },
    ],
};

export const spec: IModel = {
    name: "Spec",
    fields: [
        {
            field: {
                name: "manufacturer",
                type: "TextField()",
            },
        },
    ],
};

export const car: IModel = {
    name: "Car",
    fields: [
        {
            field: {
                name: "seats",
                type: "IntegerField()",
            },
            input: {
                name: "seats",
                type: "Int(required=True)",
            },
        },
    ],
    description: "Car model description.",
};
