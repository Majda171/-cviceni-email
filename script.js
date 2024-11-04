
const goodbye = (jmeno) => {
    const closingParagraph = document.querySelector('.email__closing');
    closingParagraph.textContent = `S pozdravem, ${jmeno}`;
}

goodbye('Pavel Ovesný');