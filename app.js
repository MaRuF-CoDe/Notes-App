const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

//Customize yargs version

yargs.version("1.1.1");

//create add command

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    },
});

//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title, argv.body);
    },
});
//create list command
yargs.command({
    command: "list",
    describe: "list a note",

    handler() {
        notes.listNotes();
    },
});
//create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    },
});
yargs.parse();