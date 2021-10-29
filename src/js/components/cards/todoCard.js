import makeElement from "../../utils/makeElement";

const todoTask = function ({id, category, title, isComplete}) {
    const template = `
    <div class="todo-task">
        <li class="todo-task" data-key="${id}">
            <p>${title}</p>
            <p>${category}</p>
            <p>${isComplete}</p>
        </li>
        <div class="todo-buttons">
            <a href="#" data-path="#" class="edit-button">Edit</a>
            <a href="#" data-path="#" class="delete-button">Delete</a>
        </div>
    </div>
    `

    return makeElement(template)
}

export default todoTask