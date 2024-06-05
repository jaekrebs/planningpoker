// Define Fibonacci numbers as estimation cards
const fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];

// Function to join session
function joinSession() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your name.');
        return;
    }

    // Display estimation cards
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    fibonacciNumbers.forEach(number => {
        const cardButton = document.createElement('button');
        cardButton.textContent = number;
        cardButton.onclick = () => selectCard(number);
        cardsDiv.appendChild(cardButton);
    });
}

// Function to select estimation card
let selectedCard = null;
function selectCard(card) {
    selectedCard = card;
    alert(`You selected ${card}.`);
}

// Function to submit vote
function submitVote() {
    if (selectedCard === null) {
        alert('Please select an estimation card.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `Your vote (${selectedCard}) has been submitted.`;
}
