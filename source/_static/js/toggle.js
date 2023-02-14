const buttonMap = new Map();

function toggleClicked(e, showText = "Show Solution", hideText = "Hide Solution") {
    if (!buttonMap.has(e)) {
        buttonMap.set(e, true);
    }

    let state = buttonMap.get(e);
    buttonMap.set(e, !state);

    switch (state) {
        case false: {
            setChildrenVisibility(e, 'none');
            e.innerHTML = showText;
            break;
        }

        case true: {
            setChildrenVisibility(e, 'flex');
            e.innerHTML = hideText;
            break;
        }
    }
}

function setChildrenVisibility(element, visibility) {
    element.parentNode.getElementsByClassName('answer')[0].style.display = visibility;
}