const reader = require('./models/Reader');
const ExplorerService = require('./models/ExplorerService');
const FizzBuzzService = require('./models/FizzBuzzService');


const explorersFile = reader.readJsonFile('explorers.json');

const explorers = explorersFile.map(explorer=> FizzBuzzService.appliValidationInExplorer(explorer));


console.table(ExplorerService.filterByMission(explorers, "node"));
console.table(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.table(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));