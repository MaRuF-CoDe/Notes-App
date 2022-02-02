const tasks = {
    tasks: [{
        text: "Shopping",
        completed: true
    },
    {
        text: 'cleaning',
        completed: false
    },
    {
        text: 'Bathing',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo());