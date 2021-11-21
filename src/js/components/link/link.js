import {Router} from "../../routes/router";
import makeElement from "../../utils/makeElement";

const onRequestPage = function(e) {
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function (title=`link title`, path=`/`, className=`ui-link`) {
    const template = `<a href="${path}" data-path="${path}" class="${className}">${title}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)

    return element
}

export default link