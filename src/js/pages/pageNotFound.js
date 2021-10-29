import heading from "./../components/header/header";
import link from "./../components/link/link";

const notFound = function() {
    const header = document.createElement('header')
    header.classList.add('notfound-page-header')

    const notFoundTitle = heading('404: Page not found', 'notfound-title')
    const notFoundLink = link('Take me back!', '/todo', 'notfound-link')

    header.append(notFoundTitle)
    header.append(notFoundLink)

    return header
}

export default notFound