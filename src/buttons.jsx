export default function TaskButtons() {

    return (
        <div class="taskButtons">
        <ion-icon name="create-outline" onClick={() => {
            if (document.querySelector(".taskContent").getAttribute("contentEditable") == "false") {
              document.querySelector(".taskContent").setAttribute("contentEditable", "true");
            } 
        }}></ion-icon>
        <ion-icon class="deleteBtn" name="trash-outline" onClick={() => {
            document.querySelector('.task').remove()
        }}></ion-icon>
    </div>
    )
}

