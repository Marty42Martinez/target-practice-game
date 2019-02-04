/*
~FN create input space: Number of rounds (add Name Later)
~create tests for submission errors 
~FN use input to initiate Game
~FN startGame : for loop that calls "event" functions
~~FN createTarget : creates a span?button element in a RANDOM LOCATION 
that has click events
~~Will eventually add randomness for size elements, and different shapes
~~FN killTarget : called in click event, will call updateScore()
~~FN updateScore : calls score tracker and increases Hits/Misses
~~FN createSpace : make clickable background that calls updateScore()
~FN Reset button which is called/created after for loop in startGame()
*/

const inputForm = document.getElementById('user-form');


function createInputSpace(parentNode) {
    const inputRounds = document.createElement('input');
    const inputText = document.createElement('label');
    const submitButton = document.createElement('button');
    inputText.textContent = 'How many Rounds? ';
    inputRounds.type = 'text';
    inputRounds.placeholder = 'Number of Rounds';
    submitButton.textContent = 'Submit';
    submitButton.value = 'submit';
    submitButton.classList.add('button');

    
    parentNode.appendChild(inputText);
    parentNode.appendChild(inputRounds);
    parentNode.appendChild(submitButton);
    parentNode.addEventListener('submit', function(event) {
        event.preventDefault();
        startGame(inputRounds.value);

    });
}

function startGame(numberRounds) {
    const gameSpace = document.getElementById('game-space');
    
    for(let i = 0; i < numberRounds; i++) {
        const xPos = parseInt(300*Math.random());
        const yPos = parseInt(300*Math.random());
        createTarget(xPos,yPos,gameSpace,i);
    }
}
function createTarget(xPos,yPos,parent,index) {
    const target = document.createElement('button');
    const sizeChange = 40*(Math.random() + 0.5);
    target.classList.add('target-button');
    target.id = 'target'+ index;
    target.style.left = xPos + 'px';
    target.style.top = yPos + 'px';
    target.style.height = sizeChange + 'px';
    target.style.width = sizeChange + 'px';
    
    target.addEventListener('click', function() {
        killTarget(target.id);
    });
    parent.appendChild(target);
}


function killTarget(target) {
    const hitCounter = document.getElementById('hits');
    removeElement(target);
    hitCounter.textContent++;
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

createInputSpace(inputForm);
