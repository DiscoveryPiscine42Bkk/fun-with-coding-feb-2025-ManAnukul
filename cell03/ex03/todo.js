document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("ft_list");
    const newBtn = document.getElementById("new_btn");

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#ft_list div").forEach(task => {
            tasks.push(task.textContent);
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
    }

    function loadTasks() {
        const cookies = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (cookies) {
            const tasks = JSON.parse(cookies.split('=')[1]);
            tasks.reverse().forEach(task => addTask(task));
        }
    }

    function addTask(taskText) {
        const task = document.createElement("div");
        task.textContent = taskText;
        task.addEventListener("click", () => {
            if (confirm("Do you want to remove this task?")) {
                task.remove();
                saveTasks();
            }
        });
        list.prepend(task);
        saveTasks();
    }

    newBtn.addEventListener("click", () => {
        const taskText = prompt("Enter a new task:");
        if (taskText) addTask(taskText);
    });

    loadTasks();
});