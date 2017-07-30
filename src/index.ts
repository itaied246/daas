import {generateModelsFile, generateTypesFile, generateQueryFile, readModels} from "./files";
import {IModel} from "./models/interfaces";
import {generateCreationFiles} from "./files/generateCreationFiles";

const main = async () => {
    const models: [IModel] = await readModels(".", "models.json");
    generateModelsFile(models);
    generateTypesFile(models);
    generateQueryFile(models);
    generateCreationFiles(models);
};

main();
