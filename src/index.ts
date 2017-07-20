import {generateModelsFile, generateTypesFile, readModels} from "./files";
import {IModel} from "./models/interfaces";

const main = async () => {
    const models: [IModel] = await readModels(".", "models.json");
    generateModelsFile(models);
    generateTypesFile(models);
};

main();
