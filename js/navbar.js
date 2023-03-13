const myInterval = setInterval(() =>  { 
    if(window.innerWidth > 950) {
        let pathname = window.location.pathname
        switch(true) {
            case pathname.includes('/index.html'): active('.index');
            break;

            case pathname.includes('/plans.html'): active('.plans');
            break;

            case pathname.includes('/about.html'): active('.about');
            break;

            case pathname.includes('/supplements-store.html'): active('.supplements-store');
            break;

            case pathname.includes('/digital-showcase.html'): active('.digital-showcase');
            break;

            case pathname.includes('/contacts.html'): active('.contacts');
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