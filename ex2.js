const fs = require('fs');
const path = require('path');
const { mkdir, readdir, writeFile, unlink, rmdir, access } = require('fs/promises');

const users = [
    { name: 'אבי', lastName: 'כהן' },
    { name: 'רות', lastName: 'לוי' },
    { name: 'דוד', lastName: 'בן דוד' },
  ];


const removeFilesAndFolder = async () => {
    try {
        const files = await readdir(`${__dirname}/users`);
        let isKeepFolder = false;
        files.forEach(async file => {
            const name = `${__dirname}/users/${file}`;
            const isNotTxt = path.extname(name) !== '.txt'
            isKeepFolder = isNotTxt || isKeepFolder;
            !isNotTxt && unlink(name);
        });
        !isKeepFolder && rmdir(`${__dirname}/users`);
        return Promise.resolve();
    } catch (err) {
        console.log(err.message);
        return Promise.reject(err);
    }
}

makeAndRemoveFilesAndFolder = async () => {
    try {
        await access(`${__dirname}/users`);
        await removeFilesAndFolder();
    } catch (err) {
        await mkdir(`${__dirname}/users`, { recursive: true });
        users.forEach(async ({name, lastName}, i) => {
            await writeFile(`${__dirname}/users/${name}-${lastName}.txt`, `${name}`);
        });
        setTimeout(removeFilesAndFolder, 5000);
    }
};

makeAndRemoveFilesAndFolder();