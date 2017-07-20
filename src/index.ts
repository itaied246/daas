import {generateModelsFile, generateTypesFile, readModels} from "./files";
import {IModel} from "./models/interfaces";

const main = async () => {
    const models: [IModel] = JSON.parse(await readModels(".", "models.json"));
    generateModelsFile(models);
    generateTypesFile(models);
};

main();
