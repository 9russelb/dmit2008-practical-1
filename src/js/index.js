 import home from "./pages/home";
import { createStore } from "./redux/store";
 import Router from "./routes/router";
import { dataFetcher } from "./utils/dataFetcher";

 const app = document.querySelector('#app')

 const onAppInit = async function(e){
     let todoItems = await dataFetcher('./data/todo.json')

     createStore(todoItems)

     Router(window.location.pathname)
 }

 window.addEventListener('load', onAppInit)