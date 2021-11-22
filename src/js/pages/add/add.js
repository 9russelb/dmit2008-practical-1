import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/button"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducers"
import logo from "./../../components/logo/logo";

const cancelButton = button("cancel")
const addButton = button("add")

const addPage = function(props) {

    console.log(props)

    const page = document.createElement('div');
    page.classList.add('add-page')

    //  Cancel event handler
    function onCancelAdd(e) {
        Router("/todo")
    }

    //  Delete event handler
    function onAddTask(e) {
        // const index = getStore().findIndex((todoTask) => {
        //     return (todoTask.id === props.id)
        // })

        // const action = {
        //     type: "edit",
        //     payload: {index},
        //     cb:() => Router('/todo')
        // }

        // reducer(action)
        return "edit task"
    }

    //  Render page
    let headerTemplate = `
        <header>
            <h1>Edit task</h1>
            <div>
                <form method="post">
                    <label for="category">Category: </label>
                    <select name="category" id="category">
                        <option value="Health / Self-Care">Health / Self-Care</option>
                        <option value="School">School</option>
                        <option value="Social">Social</option>
                        <option value="Home">Home</option>
                        <option value="Event">Event</option>
                    </select><br>

                    <label for="title">Title: </label>
                    <input type="text" id="title" name="title"><br>

                    <label for="isComplete">Task complete: </label>
                    <input type="checkbox" id="isComplete">
                </form>
            </div>
        </header>
    `
    const icon = logo();

    const pageHeader = makeElement(headerTemplate)
    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddTask)
    pageHeader.querySelector('div').append(addButton, cancelButton)
    page.append(icon)
    page.append(pageHeader)

    return page
}

export default addPage