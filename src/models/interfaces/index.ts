export interface IModel {
    name: string;
    fields: [IField]
}

export interface IField {
    name: string;
    type: string;
}
