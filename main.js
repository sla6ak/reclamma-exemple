
console.log( 'hello' )

// ********************************************

const refs = {
    reclama: document.querySelector( '.js-reklama' ),
    sabmit: document.querySelector( '.sabmit' ),
    clouse: document.querySelector('.clouse')
}

if (refs.reclama.classList !== "none") {
    setTimeout( () => {
    refs.reclama.classList.add('none')
}, 3000)
}

refs.sabmit.addEventListener( 'click', onSubmitClick )
refs.clouse.addEventListener('click', onClouseClick)

function onSubmitClick (e) {
    console.log( refs.reclama.classList == "none")
    refs.reclama.classList.remove( 'none' )
    if (refs.reclama.classList !== "none") {
    setTimeout( () => {
    refs.reclama.classList.add('none')
}, 3000)
}
}

function onClouseClick ( e ) {
    refs.reclama.classList.add( 'none' )
    console.log(refs.clouse)
}


