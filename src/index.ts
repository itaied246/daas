import {generateModelsFile, generateTypesFile, generateQueryFile, readModels} from "./files";
import {IModel} from "./models/interfaces";
import {generateCreationFile} from "./files/generateCreationFile";
import {generateMutationFile} from "./files/generateMutationFile";

const main = async () => {
    const models: [IModel] = await readModels(".", "models.json");
    generateModelsFile(models);
    generateTypesFile(models);
    generateQueryFile(models);
    generateCreationFile(models);
    generateMutationFile(models);
};

main();
