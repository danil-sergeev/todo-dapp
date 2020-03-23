const Tasks = artifacts.require('Tasks');

contract("Tasks", accounts => {
    describe("migration test", async () => {
        it('shouldve added tasks to contract while migration', async function () {
            const tasks = await Tasks.deployed();
            const len = await tasks.getTasksCount();
            assert.equal(len.toString(), "30", `No tasks were inserted into a contract. Len: ${len.toString()}`);
        });
        it('should get limited tasks', async function () {
            const tasks = await Tasks.deployed();
            const tasks_ = await tasks.getTasks(5).call();
            assert.equal(tasks_.length, 5);
        });
    });
});
