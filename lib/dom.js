function appendStyles(el, props) {
    let {classes} = props;
    delete props.classes;

    if (classes) {
        el.className = classes.join(' ');
    }

    if (el.tagName ==='IMG') {
        el.setAttribute('src', './img/default-avatar.png')
    }

    return el;




}


function createElement(elementName, props, children){
    let el = document.createElement(elementName);
    (children || []).forEach(elementChild => {
        el.append(elementChild);
    });
    return appendStyles(el, props || {});
}