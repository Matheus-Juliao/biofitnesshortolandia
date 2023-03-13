const myInterval = setInterval(() =>  { 
    if(window.innerWidth > 950) {
        switch(window.location.pathname) {
            case '/index.html': active('.index');
            break;

            case'/plans.html': active('.plans');
            break;

            case'/about.html': active('.about');
            break;

            case'/supplements-store.html': active('.supplements-store');
            break;

            case'/digital-showcase.html': active('.digital-showcase');
            break;

            case'/contacts.html': active('.contacts');
            break;
        }
    }
    else {
        clearInterval(myInterval);
    }
}, 100);

function active(page) {
    if(document.querySelectorAll(page)[0] != undefined) {
        document.querySelectorAll(page)[0].classList.add('active');
        clearInterval(myInterval);
    }
}