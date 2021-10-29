import home from "./../pages/home";
import toDoPage from "./../pages/toDoPage";
import notFound from "./../pages/pageNotFound"



const Router = (pathname) => {

    const routes = {
        "/": home(),
        "/todo": toDoPage()
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

export default Router