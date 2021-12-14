let $ = document

let counter = $.querySelector('.counter')

let userName = $.querySelector('.username')

// let count = counter.innerHTML

//! check the input size

let inputMaxLength = userName.getAttribute('maxlength')

function keyUpHandler() {

    counter.innerHTML = inputMaxLength - userName.value.length

}

userName.addEventListener('keyup', keyUpHandler)