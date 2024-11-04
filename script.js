/*const jmeno = "Pavel Nový";
const fillSubject = (subject) => {
    const subjectElement = document.querySelector('.email__subject'); 
    subjectElement.textContent = subject; 
}


const fillBody = (body, name) => {
    const bodyElement = document.querySelector('.email__body'); 
    bodyElement.textContent = body; 
    goodbye(name); 
}


const goodbye = (jmeno) => {
    const closingParagraph = document.querySelector('.email__closing'); 
    closingParagraph.textContent = `S pozdravem, ${jmeno}`; }


fillSubject('Důležité oznámení'); 
fillBody('Toto je tělo e-mailu, které obsahuje důležité informace.', 'Pavel Nový');*/

const convertToCZK = (amount, currencyCode) => {
    const exchangeRates = {
        'EUR': 24.47,
        'GBP': 28.09,
        'USD': 24.81,
        'BTC': 478637
    };

    
    if (!(currencyCode in exchangeRates)) {
        return null; 
    }

    
    const czkAmount = amount * exchangeRates[currencyCode];
    return Math.round(czkAmount); 
};


document.body.innerHTML += convertToCZK(25, 'EUR'); 
document.body.innerHTML += `<br>${convertToCZK(50, 'GBP')}`; 
document.body.innerHTML += `<br>${convertToCZK(100, 'USD')}`; 
document.body.innerHTML += `<br>${convertToCZK(0.01, 'BTC')}`; 
document.body.innerHTML += `<br>${convertToCZK(100, 'BGH')}`; 
