import logo from "./../components/logo/logo";
import heading from "./../components/header/header";
import tagline from "./../components/tagline/tagline";
import { dataFetcher } from "../utils/dataFetcher";
import { getStore } from "../redux/store"
import todoTask from "../components/cards/todoCard";



const toDoPage = function() {
    const todoList = getStore();

    const header = document.createElement('header')
    header.classList.add('ui-header')

    const icon = logo()
    const todoTitle = heading('Atom Tasks', 'ui-title')
    const todoTagline = tagline('Break your everyday life down into smaller tasks', 'todo-tagline')
    header.append(icon)
    header.append(todoTitle)
    header.append(todoTagline)

    //todo items
    const todoSection = document.createElement('ul')
    todoSection.classList.add('todo-section')

    const todoItems = todoList.map(todo => todoTask(todo))
    todoItems.forEach(element => todoSection.append(element))

    header.append(todoSection)
    
    

    return header
}

export default toDoPage