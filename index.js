import fs from 'fs';


//jedes Mal, wenn deine index.js Datei ausgeführt wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
//Wenn er nicht existiert, soll er erstellt werden

let folderPath = './MyFunnyFolder';

const fnCheckIfMyFunnyFolderExists = () => {
    if (fs.existsSync(folderPath)) {
        console.log('Folder exists! We will append the content!');
        fs.rmdir(folderPath, { recursive: true }, err => {
            if (err) {
                throw err;
            }
            console.log(`${folderPath} is deleted!`);
        });

    } else {
        console.log('File doesn t exist! We will create it and write the content!')
        fs.mkdir(folderPath, (err) => {
            if (err) {
                console.log("error occurred in creating new directory", err);
                return;
            }
        })
    }
}

fnCheckIfMyFunnyFolderExists();

/*
Falls er existiert, soll er gelöscht werden
Jedes Mal, wenn die Datei ausgeführt wird soll auch geschaut werden, ob es die Datei isThis.txt in einem Ordner namens “What” existiert
Falls nicht, erstelle den Ordner und die Datei
*/

let filePath = './what/isThis.txt';

const fnCheckIfIsThisExistsInWhat = () => {
    if (fs.existsSync(filePath)) {
        console.log('Folder exists! We will append the content!');
        /*  fs.rmdir(filePath, { recursive: true }, err => {
              if (err) {
                  throw err;
              }
              console.log(`${filePath} is deleted!`);
          });
  */
    } else {
        console.log('File doesn t exist! We will create it and write the content!')
        fs.mkdir('./what', (err) => {
            fs.writeFile('./what/inThis.txt', 'File was created', err => {
                if (err) {
                    console.error(err);
                }
                // file written successfully
            });
            if (err) {
                console.log("error occurred in creating new directory", err);
                return;
            }
        })
    }
}

fnCheckIfIsThisExistsInWhat();