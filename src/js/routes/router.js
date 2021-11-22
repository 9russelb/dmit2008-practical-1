import home from "./../pages/home";
import toDoPage from "./../pages/toDoPage";
import notFound from "./../pages/pageNotFound"
import deletePage from "../pages/delete";
import editPage from "../pages/edit";
import addPage from "../pages/add";


const Router = (pathname) => {

    const routes = {
        "/": home(),
        "/todo": toDoPage(),
        "/delete": deletePage(),
        "/edit": editPage(),
        "/add": addPage()
    }

    const isValidRoute = Object.keys(routes).find(key => key===pathname)

    //Loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML=''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if (isValidRoute === undefined) {
        app.appendChild(notFound())
    }
    else {
        app.appendChild(routes[window.location.pathname])
    }
    

}

export { Router }