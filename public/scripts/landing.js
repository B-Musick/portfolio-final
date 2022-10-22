
// Used to reset the rectangle widths back to original size after stop hovering (%)
let rectWidth = {
    'about': 10,
    'courses': 12,
    'tech': 14,
    'learning': 22,
    'projects': 24
};

// Used to reset labels back to original position (%)
let labelLocation = {
    'about-label': 11,
    'courses-label': 13,
    'tech-label': 15,
    'learning-label': 23,
    'projects-label': 25
}
let infoLable = document.querySelectorAll('.info-label');
let infoRect = document.querySelectorAll('.info-rect');

// Used for mouseout to know that a label clicked so dont do its thing
let labelClicked = false;
let labelThatClick = ""; // This will hold id of the label that was clicked


/***************************** EVENT LISTENERS ********************************/
infoLable.forEach(label => {
    // Loop through all the labels and if hover over it then turn yellow 
    // and make text bigger
    // Rectangle retracts beside it as well
    /************************* HOVER MOUSE ********************************/
    label.addEventListener('mouseover', (e) => {
        mouseHoveringLabel(label, infoLable, e);
    });

    /************************* UNHOVER MOUSE ******************************/
    label.addEventListener('mouseout', (e) => {
        unhoverMouse(e, labelThatClick, infoLable, labelClicked);
    });

    /************************* CLICK LABEL ********************************/
    label.addEventListener('click', (e) => {
        clickLabel(e, label, infoLable);
    });
});

/************ THE SCREEN IS CLICKED, RETURN TO NORMAL **********/
document.addEventListener('click', (e) => {
    
    let revertPage = true;
    infoLable.forEach(label => {
        if (e.target.classList[1] !== 'description-body-shown' ||label.id === e.target.id) {
            revertPage = false;

        }
    });
    if (revertPage) {
        
        labelClicked = false;
        labelThatClick = ""; // This will hold id of the label that was clicked
        infoLable.forEach(thisLabel => {
            let labelValues = getLableRectHeadDescArr(thisLabel);
            labelValues['label'].classList.remove('label-hidden'); // Move the clicked from header to list
            labelValues['label'].style.color = 'rgb(72, 72, 66)';// Make sure if was white is grey now
            // labelValues['label'].style.fontSize = '25px';
            labelValues['rect'].classList.remove('rect-hidden'); // Make not hidded anymore
            labelValues['rect'].classList.remove('rect-folded'); // Make not hidded anymore
            labelValues['label'].classList.remove('label-smaller');


            returnRectColor(labelValues);
            unretractLabelsRect(labelValues);
            unRetractBackground();
            transistionHeadDescOffScreen(labelValues);

        })

    }
});

/***************************** LABEL LOGIC ************************************/
let getLabelSubstring = (labelID) => {
    /* Takes the label of current button and gets its label name */
    return labelID.split("").reverse().join("").substring(6).split("").reverse().join("");
}

let getLableRectHeadDescArr = (thisLabel) => {
    // Return array with associated label values
    let substring = getLabelSubstring(thisLabel.id);
    let rect = document.getElementById(substring + "-rect"); // Get rectangle of associated label
    let header = document.getElementById(substring + "-header"); // Get the header to transition
    let descriptionBody = document.getElementById(substring + "-description-container"); // Get description associated with label
    return { 'label': thisLabel, 'rect': rect, 'head': header, 'desc': descriptionBody };

}

let labelNotClicked = (labelValues) => {
    // Hide the labels not clicked
    labelValues['label'].classList.remove('label-hidden'); // Move the clicked from header to list
    labelValues['label'].classList.add('label-folded'); // Fold the lable
    labelValues['label'].classList.add('label-smaller'); // Shrink the font size
    labelValues['label'].style.color = 'rgb(72, 72, 66)';// Make sure if was white is grey now
}

let returnLabelColor = (e, labelThatClick) => {
    if (e.target.id !== labelThatClick) {
        e.target.style.color = 'rgb(72, 72, 66)'; // Return the color to grey
    }
}

retractOtherLabels = (labelValues) => {
    // Fold the rectangle and label to the side if not one being hovered
    labelValues['rect'].classList.add('rect-folded'); // Retract rectangle
    labelValues['label'].classList.add('label-folded'); // Retract label
}

/*************************** RECT LOGIC ***************************************/
let retractRectNotClicked = (labelValues) => {
    // Retract the rectangle associated with label, and make sure not hidden 
    // Rectangle of label when one is clicked but its not one clicked
    labelValues['rect'].classList.remove('rect-hidden'); // Make not hidded anymore
    labelValues['rect'].classList.add('rect-folded'); // Fold the rectangle
}

hoveredLabelRect = (labelValues) => {
    // This will change the color of the label and rectangle being hovered over
    // Change the color of the rectangle to yellow of the one hovering
    labelValues['rect'].style.backgroundColor = 'yellow';
    // Change the color of the word label if hover
    labelValues['label'].style.color = 'yellow';
}

let returnRectColor = (labelValues) => {
    // Return rectangle to grey
    labelValues['rect'].style.backgroundColor = 'rgb(72, 72, 66)';
}

let hideRectangle = (labelValues) => {
    // Hide the rectangle of the label clicked
    labelValues['rect'].classList.add('rect-hidden');
}
let returnLabelToOriginalSize = (labelValues) => {
    labelValues['label'].classList.remove('label-smaller'); // Remove shrink to the font size
}

/*************************** DESCRIPTION LOGIC ********************************/
let transitionHeadDescOnScreen = (labelValues) => {
    labelValues['desc'].classList.add('description-body-shown'); // Transition the new description
    labelValues['head'].classList.add('label-header'); // Transitions header from left
    labelValues['label'].classList.add('label-hidden'); // Move the clicked word to the header
};

let unretractLabelsRect = (labelValues) => {
    // If label is retracted, unretract it
    labelValues['rect'].classList.remove('rect-folded');
    labelValues['label'].classList.remove('label-folded');
    // Return label to grey
    labelValues['rect'].style.backgroundColor = 'rgb(72, 72, 66)';
}

let transistionHeadDescOffScreen = (labelValues) => {
    // Transition the header label and description off screen 
    labelValues['head'].classList.remove('label-header'); // Transitions header back out of screen
    labelValues['desc'].classList.remove('description-body-shown'); // Transition the old description out
}

/********************** BACKGROUND LOGIC **************************************/

let retractBackground = () => {
    /*** NAME HEADER/ FULL STACK HEADER ***/
    let nameLabel = document.getElementById('name-label'); // Retract name label to left
    let positionLabel = document.getElementById('position-label'); // Retract position label to right
    nameLabel.classList.add('name-label-hidden');
    positionLabel.classList.add('position-label-hidden');


    /*** BACKGROUND ***/
    let topHalf = document.getElementById('top-half-landing');

    // When click the label, all others retract
    topHalf.classList.add('top-half-landing-folded');
}

let unRetractBackground = () => {
    /*** NAME HEADER/ FULL STACK HEADER ***/
    let nameLabel = document.getElementById('name-label'); // Retract name label to left
    let positionLabel = document.getElementById('position-label'); // Retract position label to right
    nameLabel.classList.remove('name-label-hidden'); // Return name to center
    positionLabel.classList.remove('position-label-hidden'); // Full stack center

    /*** BACKGROUND ***/
    let topHalf = document.getElementById('top-half-landing');

    // When click the label, all others retract
    topHalf.classList.remove('top-half-landing-folded');
}

/*************************** MOUSE LOGIC **************************************/

mouseHoveringLabel = (label, infoLable, e) => {
    /************************* HOVER MOUSE **********************************
     * The label and associated rectangle being hovered should be yellow
     * The other rectangles should retract and lables as well (to right)
    */
    // Get the word used to attach to the rectangle
    if (label.id === e.target.id) {
        infoLable.forEach(thisLabel => {
            let labelValues = getLableRectHeadDescArr(thisLabel);

            if ((thisLabel.id !== e.target.id)) {
                // Retract labels not hovered
                retractOtherLabels(labelValues);
            } else {
                // Color label yellow
                hoveredLabelRect(labelValues);
            }
        })
    }
}

let unhoverMouse = (e, labelThatClick, infoLable, labelClicked) => {
    /************************* UNHOVER MOUSE **********************************
    * This will return the color of label to grey when mouse stops hovering label
    * Rectangle goes back to normal
    */
    returnLabelColor(e, labelThatClick);
    infoLable.forEach(thisLabel => {
        let labelValues = getLableRectHeadDescArr(thisLabel);
        returnRectColor(labelValues);

        if (!labelClicked) {
            unretractLabelsRect(labelValues);
        }
    });
};

clickLabel = (e, label, infoLable) => {

    /************************* CLICK LABEL **********************************
    * Dark grey part of background shrinks to top left
    * Lable clicked goes to top left (associated retangle completly retracts)
    * Other labels font size shrinks
    */
    labelClicked = true; // Let program know that a label was clicked
    labelThatClick = e.target.id; // Let program know what label was clicked
    retractBackground();

    // Change the color of the word label clicked
    label.style.color = 'white';

    infoLable.forEach(thisLabel => {
        // Retract all the rectangles
        // Get the substring to select associated rectangle 
        let labelValues = getLableRectHeadDescArr(thisLabel);

        if ((thisLabel.id !== e.target.id)) {
            // Hide the labels not clicked
            labelNotClicked(labelValues);
            retractRectNotClicked(labelValues);
            transistionHeadDescOffScreen(labelValues);
        } else {
            transitionHeadDescOnScreen(labelValues);
            returnLabelToOriginalSize(labelValues);
            hideRectangle(labelValues);
        }
    });
};

/************************** COURSE PAGE LOGIC **********************************/

/**** UNIVERSITY OF MANITOBA COURSE TABLE *******/
let courseList = [
    { 'name': "COMP 1010 - Introductory Computer Science 1", 'desc': "Intro course using Processing a Java based program" },
    { 'name': "COMP 1020 - Introductory Computer Science 2", 'desc': "Java language is used to learn various programming methods such as Object Oriented Programming and recursion and using basic algorithms such as linear and binary search." },
    { 'name': "COMP 2140 - Data Structures and Algorithms", 'desc': "Using java, this course focused on implementing many different data structures and algorithms." },
    { 'name': "COMP 2150 - Object Orientation", 'desc': "Course focusing on Object Oriented Programming and how to structure programs using parent and child classes, using Java, Javascript and C++ languages." },
    { 'name': "COMP 2160 - Programming Practices", 'desc': "Using C, I developed a knowledge of how programs are compiled, implemented programs with header files and ran them with makefiles, leart dynamic programming and how memory is allocated on the fly (such as using malloc)." },
    { 'name': "COMP 2080 - Analysis Of Algorithms", 'desc': "" },
    { 'name': "COMP 2280 - Introduction to Computer Systems", 'desc': "" },
    { 'name': "COMP 3370 - Computer Organization", 'desc': "Studied the various main aspects of a computer including the CPU, Memory, Parallel Computation" },
    { 'name': "COMP 3380 - Database: Concepts and Usage", 'desc': "" },
    { 'name': "COMP 4380 - Database Implementation", 'desc': "" },
    { 'name': "COMP 3030 - Automata Theory and Formal Languages", 'desc': "Studied various proofs determining if a computational problem can be solved." },
    { 'name': "MATH 1240", 'desc': "" },
    { 'name': "COMP 3490 - Computer Graphics 1", 'desc': "Used OpenGL along with Processing to learn about the process through which graphics are created, how matrices are used in this process, using the modelling heirarchy to create motion graphics." },
    { 'name': "COMP 4490 - Computer Graphics 2", 'desc': "" },
    { 'name': "COMP 3190 - Intro to Artificial Intelligence", 'desc': "" },
    { 'name': "COMP 3430 - Operating Systems", 'desc': "" },
    { 'name': "COMP 4620 - Professional Practice in Computer Science", 'desc': "" },
    { 'name': "COMP 3350 - Software Engineering 1", 'desc': "" }

]
let uofmCourseTable = document.getElementById("university-course-table");

// Loop through course list and add new row with course name and description
courseList.forEach((course, idx) => {

    let row = document.createElement("tr"); // New row 

    // Create new name column and add the associated name
    let courseName = document.createElement("td");
    courseName.classList.add("course-name");
    courseName.textContent = course["name"];

    // Create new description column and add the associated desc
    let courseDesc = document.createElement("td");
    courseDesc.classList.add("course-desc")
    courseDesc.textContent = course["desc"];

    // Append the name and desc to the row
    row.appendChild(courseName);
    row.appendChild(courseDesc);

    uofmCourseTable.appendChild(row); // Append the row to the table
});


/***************************************************************************
 * Project Image Slideshow Logic
 * Source - https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp 
 *      Section 3 - Javascript logic
 ***************************************************************************/
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // Get a list of all the slideshow images
    let slides = document.getElementsByClassName("slideshow-image");


    // let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n >= slides.length-1) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length-2 }
    
    for (let imgCount = 0; imgCount < slides.length; imgCount++) {
        if (imgCount != slideIndex) {
            slides[imgCount].style.display = "none";

        }
    }

    slides[slideIndex].style.display = "block";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}