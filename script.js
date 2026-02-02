let messageIndex = 0;

const messages = [
    "Ae jii o jii, listen to me! 💃",
    "Ae bapu ji, ye dekhiye kya keh rahi hai! 👴",
    "Duniya hila dunga, par 'No' mat bolo! 🌎",
    "Nonsense! Ek dum nonsense! ☝️",
    "Hey Maa, Mataji! Itni badi na? 🙏",
    "Babita ji kya sochegi? 😭",
    "Chup ho ja satvi fail! 🚫",
    "Cancel! Cancel! Cancel! 🌂",
    "Nahane jaa nahaane jaa... dimaag thanda kar! 🚿",
    "Goli beta, masti nahi! 🙅‍♂️",
    "Hamari sanskriti mein 'No' nahi kehte! 🇮🇳",
    "Party-sharty karni hai ki nahi? 🍺",
    "Arey beta, ye toh 'Ooltah Chashmah' ho gaya! 👓",
    "Think again, varna Tapu sena ko bulaunga! 👦",
    "Please maan jao, varna Jethalal ka 'Gada Electronics' band ho jayega! 📺"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Changes the text of the No button to the TMKOC lines
    noButton.textContent = messages[messageIndex];

    // Moves to the next message
    messageIndex = (messageIndex + 1) % messages.length;

    // Makes the Yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
