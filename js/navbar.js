let linkWhatssap = "https://wa.me/5519982496521";

function callWhatssap() {
    window.open(linkWhatssap, '_blank');
}

const myInterval = setInterval(() =>  { 
    let pathname = window.location.pathname
    let navbar = 'active';
    let retractable = 'retractable';
    if(window.innerWidth > 950) {
        switch(true) {
            case pathname.includes('/index.html'): active('.index', navbar);
            break;

            case pathname.includes('/plans.html'): active('.plans', navbar);
            break;

            case pathname.includes('/about.html'): active('.about', navbar);
            break;

            case pathname.includes('/supplements-store.html'): active('.supplements-store', navbar);
            break;

            case pathname.includes('/digital-showcase.html'): active('.digital-showcase', navbar);
            break;

            case pathname.includes('/contacts.html'): active('.contacts', navbar);
            break;

            default: clearInterval(myInterval);
        }
    }
    else {
        switch(true) {
            case pathname.includes('/index.html'): active('.index-r', retractable);
            break;

            case pathname.includes('/plans.html'): active('.plans-r', retractable);
            break;

            case pathname.includes('/about.html'): active('.about-r', retractable);
            break;

            case pathname.includes('/supplements-store.html'): active('.supplements-store-r', retractable);
            break;

            case pathname.includes('/digital-showcase.html'): active('.digital-showcase-r', retractable);
            break;

            case pathname.includes('/contacts.html'): active('.contacts-r', retractable);
            break;

            default: clearInterval(myInterval);
        }
    }
}, 100);

function active(page, className) {
    if(className === 'navbar') {
        if(document.querySelectorAll(page)[0] != undefined) {
            document.querySelectorAll(page)[0].classList.add(className);
            clearInterval(myInterval);
        }
    } else {
        if(document.querySelectorAll(page)[0] != undefined) {
            document.querySelectorAll(page)[0].classList.add(className);
            clearInterval(myInterval);
        }   
    }
}