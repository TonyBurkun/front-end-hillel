function appendStyles(el, props) {
    let {classes} = props;
    delete props.classes;

    if (classes) {
        el.className = classes.join(' ');
    }

    console.dir(el);
    if (el.tagName ==='IMG') {
        console.log(el);
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