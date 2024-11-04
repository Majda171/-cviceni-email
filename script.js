const jmeno = "Pavel Nový";
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
fillBody('Toto je tělo e-mailu, které obsahuje důležité informace.', 'Pavel Nový');
