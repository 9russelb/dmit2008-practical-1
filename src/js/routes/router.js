import home from "./../pages/home";
import toDoPage from "./../pages/toDoPage";
import notFound from "./../pages/pageNotFound"
import deletePage from "../pages/delete";


const routes = {
    "/": home,
    "/todo": toDoPage,
    "/delete": deletePage,
    "/*": notFound
}

const Router = function (pathname, params=null) {

    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    const app = document.querySelector('#app')
    app.innerHTML=''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if (isValidRoute === undefined || isValidRoute==='') {
        app.appendChild(notFound())
    }
    else {
        app.appendChild(routes[isValidRoute](params))
    }

}

export {Router}