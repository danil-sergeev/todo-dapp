pragma solidity >=0.4.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract Tasks {
    struct Task {
        string caption;
        string description;
        address owner;
        uint8 status;
        uint number;
    }
    Task[] public tasks;

    function getTask(uint i) public view returns (Task memory task) {
        task = tasks[i];
        return task;
    }

    function getTasks(uint limit) public view returns (Task[] memory) {
        Task[] memory tasks_ = new Task[](limit);
        for (uint i = 0; i < limit && i  < getTasksCount(); i++) {
            tasks_[i] = Task({
                caption: tasks[i].caption,
                description: tasks[i].description,
                owner: tasks[i].owner,
                status: tasks[i].status,
                number: tasks[i].number
            });
        }
        return tasks_;
    }

    function addTask(string memory caption, string memory description) public returns (uint newTask) {
        tasks.push(
            Task({
                caption: caption,
                description: description,
                owner: msg.sender,
                status: 0,
                number: tasks.length
            })
        );
        newTask = tasks.length - 1;
        return newTask;
    }

    function getTasksCount() public view returns(uint) {
        return tasks.length;
    }

    function completeTask (uint i) public {
        tasks[i].status = 1;
    }
}
