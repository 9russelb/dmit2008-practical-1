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
            <button id="edit" data-key="${id}">Edit</button>
            <button id="delete" data-key="${id}">Delete</button>
        </div>
    </div>
    `

    return makeElement(template)
}

export default todoTask