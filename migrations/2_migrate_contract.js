const Tasks = artifacts.require("Tasks");

const randDesc = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const taskFactory = (idx) => ({
    caption: `Task ${idx + 1}`,
    description: randDesc()
});

module.exports = async function(deployer) {
    await deployer.deploy(Tasks);
    const tasks = await Tasks.deployed();
    for (let i = 0; i < 30; i++) {
        const task = taskFactory(i);
        await tasks.addTask(task.caption, task.description);
    }
};
