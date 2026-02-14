export default function TaskButtons() {
const task = document.querySelector(".task");
const taskContent = document.querySelector(".taskContent");
    return (
        <div class="taskButtons">
            <ion-icon name="create-outline" onClick={() => {
                if (taskContent.getAttribute("contentEditable") == "false") {
                    taskContent.setAttribute("contentEditable", "true");
                } 
            }}></ion-icon>
            <ion-icon class="deleteBtn" name="trash-outline" onClick={() => {
                document.querySelector('.task').remove()
            }}></ion-icon>
        </div>
    )
}

