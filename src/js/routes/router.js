import home from "./../pages/home";
import toDoPage from "./../pages/toDoPage";
import pageNotFound from "./../pages/pageNotFound";

const Router = (pathname) => {

    const routes = {
        "/": home(),
        "/todo": toDoPage(),
        "404": pageNotFound()
    }

    //Loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML=''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])

}

export default Router
export {routes}