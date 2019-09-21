
let allButtons = document.querySelector('.landing-foldable'); // Select all buttons
let headshot = document.querySelector('.mission-statement-headshot');

// BUTTON CONTAINERS
let aboutButton = document.querySelector('#landing-about');
let missionButton = document.getElementById('landing-mission'); // Mission button
let technologiesButton = document.getElementById('landing-technologies'); // Tech button
let learningButton = document.getElementById('landing-learning'); // Learning button

let buttonArray = [aboutButton,missionButton,technologiesButton,learningButton];

// BUTTON TEXT
let aboutText = document.getElementById("landing-about-text");
let missionText = document.getElementById("landing-mission-text");
let technologiesText = document.getElementById("landing-technologies-text");
let learningText = document.getElementById("landing-learning-text");

let textArray = [aboutText,missionText,technologiesText,learningText];

// DESCRIPTION CONTAINER
let about = document.getElementById("about-description-container");

let lastTextShown; // Use to take away the text from the last button

buttonArray.forEach(button=>{
    /* Go through each button and when clicked, transistion that button to the top,
        then remove that transistion from all others */
    button.addEventListener('click',(e)=>{
    

        
        buttonArray.forEach(button=>{
            
            if(button.id!==e.target.id){
                // Make sure these buttons arent on top
                button.classList.remove('landing-button-transition');
                button.classList.add('foldable-retreat');
                // Get the tab name and set this as description container to use
                // id is named 'landing-tabName'
                let split = button.id.split('-');
                let containerName = split[1];

                // Get the container holding the text of the button not pressed
                let container = document.getElementById(containerName + '-description-container');

                // Make it so the text doesnt show for the other containers not pressed
                container.classList.add('description-container');
                container.classList.remove('description-inside-screen'); 
                 
                
            }else{
                button.classList.add('landing-button-transition');
                button.classList.remove('foldable-retreat')
                // Get the tab name and set this as description container to use
                // id is named 'landing-tabName'
                let split = button.id.split('-');
                let containerName = split[1];

                let container = document.getElementById(containerName+'-description-container');
                
                
                container.classList.remove('description-container'); 
                container.classList.add('description-inside-screen');
                
            }
            
        })
    })
})


document.addEventListener('click',e=>{
    /* If click on the page, then this will retreat the current button that was
    pressed to */ 
    
    // Check that where pressed wasnt a button
    let notAButton = buttonArray.every(button=>button.id!==e.target.id);
    
    if(notAButton){
        // If pressed the page, then return to ground zero
        buttonArray.forEach(button => button.classList.remove('landing-button-transition'))
        buttonArray.forEach(button=>{button.classList.remove('foldable-retreat')});
    }
})

