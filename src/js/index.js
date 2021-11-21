import home from "./pages/home";
import { createStore } from "./redux/store";
import { Router } from "./routes/router";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key";

 const app = document.querySelector('#app')

 const onAppInit = async function(e){
    let todoItems = await dataFetcher('./data/todo.json')

    if (todoItems[0].id === undefined) {
        todoItems = [...keyGenerator(todoItems)]
    }

    createStore(todoItems)
    Router(window.location.pathname)
 }

 window.addEventListener('load', onAppInit)