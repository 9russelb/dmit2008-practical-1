import logo from "./../components/logo/logo";
import heading from "./../components/header/header";
import tagline from "./../components/tagline/tagline"
import link from "./../components/link/link";

const home = function() {
    const header = document.createElement('header')
    header.classList.add('ui-header')

    const icon = logo()
    const homeTitle = heading('Atom Tasks', 'ui-title')
    const homeTagline = tagline('Break your everyday life down into smaller tasks', 'home-tagline')
    const homeLink = link('Atomize your day', '/todo', 'home-link')
    header.append(icon)
    header.append(homeTitle)
    header.append(homeTagline)
    header.append(homeLink)

    return header
}

export default home