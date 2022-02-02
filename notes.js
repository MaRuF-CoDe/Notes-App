const { default: chalk } = require("chalk");
const fs = require("fs");
//const { title } = require("process");

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    //  })
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.inverse.blue('New note added'));
    } else {
        console.log(chalk.inverse.red('Note title is already taken'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    // const notesToKeep = notes.filter((note) => {
    //     return note.title !== title;
    // });
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.inverse.blue('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.inverse.red('Note didn\'t found'));
    }

};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.blue('Your notes :'));
    notes.forEach((note) => {
        console.log(note.title);
    });

}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse.blue(note.title));
        console.log(chalk.blue(note.body));

    } else {
        console.log(chalk.inverse.red('No such note found!!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};
