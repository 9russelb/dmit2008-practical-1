import logo from "./../components/logo/logo";
import heading from "./../components/header/header";
import tagline from "./../components/tagline/tagline";
import { dataFetcher } from "../utils/dataFetcher";

const todoGet = async function() {
    todoData = await dataFetcher('../data/todo.json')
}

const toDoPage = function() {
    const header = document.createElement('header')
    header.classList.add('ui-page-header')

    const icon = logo()
    const homeTitle = heading('Atom Tasks', 'ui-title')
    const homeTagline = tagline('Break your everyday life down into smaller tasks')
    header.append(icon)
    header.append(homeTitle)
    header.append(homeTagline)

    //todo items
    todoGet()
    

    return header
}

export default toDoPage