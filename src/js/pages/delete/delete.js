import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/button"
import Router from "../../routes/router"
import { getStore } from "../../redux/store"
import reducer from "../../redux/reducers"
import logo from "./../../components/logo/logo";

const cancelButton = button("cancel")
const deleteButton = button("delete")

const deletePage = function(props) {
    const page = document.createElement('div');
    page.classList.add('delete-page')

    //  Cancel event handler
    function onCancelDelete(e) {
        Router("/todo")
    }

    //  Delete event handler
    function onDeleteTask(e) {
        const index = getStore().findIndex((todoTask) => {
            return (todoTask.id === props.id)
        })

        const action = {
            type: "delete",
            payload: {index},
            cb:() => Router('/todo')
        }

        reducer(action)
    }

    //  Render page
    let headerTemplate = `
        <header>
            <h1>Are you sure you want to delete this task?</h1>
            <div></div>
        </header>
    `
    const icon = logo();

    const pageHeader = makeElement(headerTemplate)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteTask)
    pageHeader.querySelector('div').append(deleteButton, cancelButton)
    page.append(icon)
    page.append(pageHeader)

    return page
}

export default deletePage