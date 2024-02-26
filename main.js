const OperatingSystem = require('os');
const totalMemoryInGB = OperatingSystem.totalmem() / 1024 / 1024 / 1024;
const freeMemoryInGB = OperatingSystem.freemem() / 1024 / 1024 / 1024;
const memoryInfo = {total: `${Math.round(totalMemoryInGB)} GB`, free: `${Math.round(freeMemoryInGB)} GB`};

console.table(memoryInfo);