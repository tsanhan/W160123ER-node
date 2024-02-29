const FileSystem = require('fs');
const {mkdir, readdir, writeFile} = require('fs/promises');

//#region create a dir

// FileSystem.mkdir("./test", {
//     recursive: true
// }, (err, path) => {
//     if (err) console.log(err.message);
//     console.log("fs made a directory!: ", path);
// });
// write into a file in the test dir.
// the file name is testing.ext.
// the content will be:
// line 1: the project directory + the testing directory + the testing file name.
// line 2: writing some text....

//#endregion

//#region check if the dir exists
// FileSystem.access("./test", (err) => {
//     if (err) {
//         console.log(err.message);
//         throw err;
//     }
//#endregion

//#region delete the dir
//     FileSystem.rmdir("./test", { recursive: true }, (err) => {
//         if (err) console.log(err.message);
//         console.log("fs removed a directory!");
//     });
// });

//#endregion

//#region write to a file
// FileSystem.writeFile(
//     `${__dirname}/test/testing.txt`,
//     `${__dirname}/test/testing.txt\nwriting some text...`,
//     (err) => {
//         if (err) return console.log(err.message);
//         console.log("fs wrote to a file!");
//     });

//#endregion

//#region Delete a file
// FileSystem.unlink(`${__dirname}/test/testing.txt`, (err) => {
//     if (err) console.log(err.message);
//     console.log("fs removed a file!");
// });
//#endregion

//#region Delete a dir
// FileSystem.rmdir("./test", { recursive: true }, (err) => {
//     if (err) console.log(err.message);
//     console.log("fs removed a directory!");
// });
//#endregion

(async () => {
    await mkdir("./test", { recursive: true });
    // in side the test dir create  3 file called testing-[num].txt
    // the content of each file will be: file number [num]
    // do this using a for loop


    // list all the files in the test dir as an array (you should use readdir method)

    // because all this method is async you should use try/catch for exaction handling

})();
