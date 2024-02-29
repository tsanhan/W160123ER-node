const fs = require('fs');
const { mkdir, readdir, writeFile, unlink, rmdir, access } = require('fs/promises');

const users = [
    { name: 'אבי', lastName: 'כהן' },
    { name: 'רות', lastName: 'לוי' },
    { name: 'דוד', lastName: 'בן דוד' },
  ];


const removeFilesAndFolder = async () => {
    try {
        const files = await readdir(`${__dirname}/users`);
        files.forEach(async file => unlink(`${__dirname}/users/${file}`));
        rmdir(`${__dirname}/users`);
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