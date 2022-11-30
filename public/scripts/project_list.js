
/*************************************************************************
 * Project Lister
 * - The following logic will go through and create the list of projects
 ************************************************************************/

// 1) Add keyword: so that the indices of the images can be kept track of when user presses next 
// or previous button in the slideshow.
let projectSlideIndices = { "rootedInNature": 0, "matrixCalculator": 0, "graphCreator": 0, "fitness": 0, "twenty48": 0, "ticTacToe": 0, "pomodoroClock": 0, "sudokuSolver": 0 };

// 2) Create the associated project object
// RootedInNature
let rootedInNatureImages = ["/images/website_images/rootedinnature/homepage.png", "/images/website_images/rootedinnature/dropdown.png", "/images/website_images/rootedinnature/user_login_collection.png", "/images/website_images/rootedinnature/before_filter.png","/images/website_images/rootedinnature/after_filter.png","/images/website_images/rootedinnature/owner_plant.png", "/images/website_images/rootedinnature/key.png", "/images/website_images/rootedinnature/key_tooltip.png"];

let rootedInNatureCaptions = [
    "Homepage, where there is the main header which contains all the page links and routes, as well as capabilities for users to register and login.", 
    "Dropdowns I implemented with Javascript, allowing a user to create and view plants for their collection, as well as different plant keys that are accessible. It can be seen that I have logged in and it shows my username 'Brendan' now in green where the login button was, and there is now a logout button where the 'register' button used to be.", 
    "Plant Collection page where users collected plants are be shown. When the user hovers over the image it shows some of the plants details, and the user can click the image to be redirected to a page showing more details on the plant. There are also buttons to add a new plant and to filter the plant selection.",
    "This image just shows the dropdown that appears when the user selects the 'filter' button, where they can filter the plants shown by family and genus.",
    "You can see after the filter details are submitted, it will filter out all the plants not matching and only show those matching, in this case 'Woodland Strawberry' since it is in the family Rosaceae and has the genus Fragaria (as shown in previous image).", 
    "This shows the page when user clicks on a plant. You can see when a user is logged in, they can edit or delete a plant which they personally submitted. Logged in users can also add comments to uploaded plants.",
    "Plant key which uses JSON file to load the data from, user clicks next answering the specific questions about the plant to eventually ID the plant.", 
    "This shows a tooltip which I implemented for various definitions so that the user can hover over to get a definition of the word right away."];

let rootedInNatureDescription = "Website I developed to host a variety of different functions, including being used as a plant collection database where users can store and view plants they collected and information about them. It also contains interactive plant keys where users navigate binomial keys interactively to identify certain plant species they find."
let rootedInNatureLink = "";
let rootedInNatureGithubLink = "https://github.com/B-Musick/sqr_rooted_in_nature";

let rootedInNatureProject = new Project("Square Rooted In Nature", "rootedInNature", rootedInNatureImages, rootedInNatureCaptions, rootedInNatureDescription, rootedInNatureLink, rootedInNatureGithubLink);

/**
 * Fitness Project 
 * */ 
let fitnessImages = ["/images/website_images/fitness_app/0_start_screen.png", "/images/website_images/fitness_app/1_start_screen_user_info.png", "/images/website_images/fitness_app/2_nav_screen.png", "/images/website_images/fitness_app/3_main_workout_page.png", "/images/website_images/fitness_app/4_main_workout_creation.png", "/images/website_images/fitness_app/5_new_cardio_workout.png", "/images/website_images/fitness_app/6_forgot_distance.png", "/images/website_images/fitness_app/7_after_submission.png", "/images/website_images/fitness_app/8_strength_workout.png", "/images/website_images/fitness_app/9_after_submissions.png", "/images/website_images/fitness_app/11_workout_history_after_add.png", "/images/website_images/fitness_app/14_website.png", "/images/website_images/fitness_app/12_project_layout.png","/images/website_images/fitness_app/13_test_files_layout.png"];

let fitnessCaptions = ["Main screen the user first encounters to login to their account or register for one. The fitness app keeps track of each users individual workouts, calorie intake, etc.", "We created a user janesmith123 to complete all our testing with.","The main navigation screen where the user can either go to create a new workout (the portion of the application which I programmed), or can go to their weight details.", "When click on the green workout button, you come to this page where the user can either create a new workout or view their history.", "Initial page shown when user wants to create new workout. They can add either cardio excersize or strength excersize to the current workout.", "Adding a new cardio excersize to the workout.", "Can see I added error handling measures in case user doesnt input some piece of data, it is handled in the logic layer and relays this information to the UI.", "After user submits the excersize it will be listed within the current workout page.", "Adding a strength workout involves the same process as a cardio workout and has error handling as well to let the user know when imporperly filled in an input.","You can see we now have a workout which contains both a cardio and a strength workout, from which an excersize can either be edited or deleted if you wish. Once complete you press the 'finish' button.","The workout is then stored with the user and can be viewed in their workout history. I was only able to complete the listing out of the workouts before we had to submit our final version of the applicaiton at end of the term.","I was responsible with creating the layout of our applications website to show off the features of our application, you can see we made a video showcasing the app, have a section for velocity metrics for how quickly we completed portions of the app, our vision statement.","This is a general look at the structure of our applications files, where we used an 'n-tier Architecture' having a business layer, database layer, presentation (UI) layer and have domain-specific objects since this project was object oriented (OOP) based and we developed these classes outlining our main objects stored in the database. The objects associated with my portion of the app were Exercise, Workout, ExerciseWorkout, Cardio and Strength","This project was developed using Test Driven Development, and tests were created as we completed features. We divided the tests into a folder for the business (logic) layer tests, and acceptance tests which run through multiple sections of the application and all layers."];

let fitnessDescription = "Android application developed for University Course Software Engineering, along with a team of 4 other group members. The app is to track the workouts, meals and calories of a user in order to improve their fitness. There is also an associated brand website that I setup along with one other group memebr to showcase our app and the development process"
let fitnessLink = "https://b-musick.github.io/fitness-tracker-app-website/";
let fitnessGithubLink = "";

let fitnessProject = new Project("Fitness Application", "fitness", fitnessImages, fitnessCaptions, fitnessDescription, fitnessLink, fitnessGithubLink);

// MatrixCalculator
let matrixCalculatorImages = ["/images/website_images/matrix_calculator/start_page.png", "/images/website_images/matrix_calculator/matrix_size.png", "/images/website_images/matrix_calculator/matrix_vals.png", "/images/website_images/matrix_calculator/submitted.png", "/images/website_images/matrix_calculator/row_operations.png", "/images/website_images/matrix_calculator/cofactor.png"];
let matrixCalculatorCaptions = ["When page first loads, the user needs to put in the amount of matrices they will be working with.", "The next screen will then ask for the dimensions of the matrices.", "Finally, the values of the matrices will be input.", "Once submitted, you are redirected to a screen showing your matrices, a text box to submit certain calculations and on the bottom of the screen is descriptions of commands to input in the text box to perform various types of matrix calculations.", "Typing AR will bring the user to a screen where they can perform various Gaussian and Gauss-Jordan row operations on the matrices, and the elementary matrices can be shown or not.", "If the user types in AC, then a cofactor calculator comes up to perform minor, cofactor and determinate calculations."];
let matrixCalculatorDescription = "Matrix Calculator I developed to manipulate matrices and perform various calculations on them. This is useful to make sure any calculations done by hand are accurate, helping learn the different methods of calculations on matrices. Developed using the React framework."
let matrixCalculatorLink = "https://b-musick.github.io/matrix-calculator-rebuild-react/";
let matrixCalculatorGithubLink = "https://github.com/B-Musick/matrix-calculator-rebuild-react";

let matrixCalculatorProject = new Project("Matrix Calculator", "matrixCalculator", matrixCalculatorImages, matrixCalculatorCaptions, matrixCalculatorDescription, matrixCalculatorLink, matrixCalculatorGithubLink);

// GraphCreator
let graphCreatorImages = ["/images/website_images/graph_creator/scatterplot.png", "/images/website_images/graph_creator/homepage.png", "/images/website_images/graph_creator/histogram_selector.png", "/images/website_images/graph_creator/histogram.png", "/images/website_images/graph_creator/bar_graph.png", "/images/website_images/graph_creator/box_plot.png", "/images/website_images/graph_creator/normal.png"];
let graphCreatorCaptions = ["Scatterplot created using a specifically formatted .csv file, it can be seen I implemented tooltips where when hovering over the points the coordinates of that point will be shown to the user.", "Starting at the homepage, the user is asked to choose from a dropdown list of graph types, then upload an associated file of the appropriate type. When the dropdown is selected, more information on the file format will be shown (see next image).", "Once the dropdown value is selected (in this case Histogram), some extra text inputs might be shown and more info on the way to format your file will be described.", "Histogram example output after uploading an appropriately formatted .csv file, shows a tooltip output from user hovering over one of the bars.", "Bar graph output, also showing tooltip output.", "Box plot, where tooltips will be shown for the quartiles, median, min and maximum.", "Normal distribution graph."];
let graphCreatorDescription = "I developed this graph maker using Object Oriented programming to define the different plot types. I used basic CSS, JavaScript and HTML, along with D3.js framework to output the SVG graphs from the .csv input files."
let graphCreatorLink = "https://b-musick.github.io/graph-maker/";
let graphCreatorGithubLink = "https://github.com/B-Musick/graph-maker";

let graphCreatorProject = new Project("Graph Creator", "graphCreator", graphCreatorImages, graphCreatorCaptions, graphCreatorDescription, graphCreatorLink, graphCreatorGithubLink);

// 2048
let twenty48Images = ["/images/website_images/twenty48/home.png"];
let twenty48Captions = ["Homepage"];
let twenty48Description = "My own recreation of a game invented by Gabriella Cirulli. Used D3 for the visual canvas and geometry.Used object oriented programming in JS for logic."
let twenty48Link = "/projects/2048";
let twenty48GithubLink = "https://github.com/B-Musick/2048-game";

let twenty48Project = new Project("2048", "twenty48", twenty48Images, twenty48Captions, twenty48Description, twenty48Link, twenty48GithubLink);

// Sudoku Solver
let sudokuSolverImages = ["https://i.imgur.com/Sbo7acN.png"];
let sudokuSolverCaptions = ["Output after problem is solved."];
let sudokuSolverDescription = "Sudoku solver programmed using basic HTML, CSS and Javascript. The user just has to give the dimensions of the sudoku table, and input the values which were given initially and the solution will be output."
let sudokuSolverLink = "/projects/sudoku";
let sudokuSolverGithubLink = "https://github.com/B-Musick/sudoku-recursive-solver";

let sudokuSolverProject = new Project("Sudoku Solver", "sudokuSolver", sudokuSolverImages, sudokuSolverCaptions, sudokuSolverDescription, sudokuSolverLink, sudokuSolverGithubLink);

// Tic Tac Toe React
let ticTacToeImages = ["https://i.imgur.com/PqH8OZv.png"];
let ticTacToeCaptions = ["After a player wins the game."];
let ticTacToeDescription = "Classic Tic Tac Toe built using React. Can play against a basic low level AI or play with a friend / enemy. This was one of my projects developed for the freeCodeCamp React curriculum."
let ticTacToeLink = "https://safe-journey-31520.herokuapp.com/";
let ticTacToeGithubLink = "https://github.com/B-Musick/tic_tac_toe_react";

let ticTacToeProject = new Project("Tic Tac Toe (React Project)", "ticTacToe", ticTacToeImages, ticTacToeCaptions, ticTacToeDescription, ticTacToeLink, ticTacToeGithubLink);


// Pomodoro Clock
let pomodoroClockImages = ["https://i.imgur.com/RCqZpbb.png"];
let pomodoroClockCaptions = ["Homepage"];
let pomodoroClockDescription = "Pomodoro clock to keep goals on time. Built using React. This was one of my projects developed for the freeCodeCamp React curriculum."
let pomodoroClockLink = "https://fast-spire-51085.herokuapp.com/";
let pomodoroClockGithubLink = "https://github.com/B-Musick/pomodoro-clock-react";

let pomodoroClockProject = new Project("Pomodoro Clock (React Project)", "pomodoroClock", pomodoroClockImages, pomodoroClockCaptions, pomodoroClockDescription, pomodoroClockLink, pomodoroClockGithubLink);

// 3) Add the project to the projects object so it can can be looped through
let projects = [rootedInNatureProject, fitnessProject, matrixCalculatorProject, graphCreatorProject,  twenty48Project, sudokuSolverProject, ticTacToeProject, pomodoroClockProject]; // List of projects

let row2 = document.getElementById("row-2");
let projectPageIndex = document.getElementById("project-index");

function addTitle(projectContainer, project) {
    // Create the title
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = project.title;
    projectContainer.appendChild(projectTitle);
}

function addSlideshowImages(imageContainer, project) {
    // Add the images for the slideshow by looping through image names and creating
    // each individual image
    project.images.forEach(img => {
        // Use figure to hold the image
        let imageHolder = document.createElement("figure");
        // imageHolder.classList.add("slideshow-image");

        // This class will make sure to choose the individual image for specific project
        imageHolder.classList.add(project.keyword + "-slideshow-image");
        // imageHolder.classList.add("slideshow-image");


        // Create the actual image element
        let image = document.createElement("img");
        image.classList.add("project-image");
        image.src = img;
        imageHolder.appendChild(image); // Add image to container

        // Append the image to imagecontainer
        imageContainer.appendChild(imageHolder);
    });
};

function addArrow(direction, htmlVal, project, imageContainer, listener) {
    // Add the slideshow arrows to the container
    let prevArrow = document.createElement("a");
    prevArrow.classList.add(direction);

    // Set event listener to get the previous image
    prevArrow.addEventListener('click', listener);

    let prevArrowContainer = document.createElement("div");
    prevArrowContainer.classList.add("slideshow-arrow");
    prevArrowContainer.classList.add(project.keyword + "-slideshow-arrow");

    prevArrowContainer.innerHTML = htmlVal;

    prevArrow.appendChild(prevArrowContainer);
    imageContainer.appendChild(prevArrow);
}

function addCaption(project, imageContainer) {
    // Add the caption
    let captionContainer = document.createElement("figcaption");
    captionContainer.classList.add(project.keyword + "-caption-container");
    captionContainer.classList.add("caption-container");

    let captionDescription = document.createElement("p");
    captionDescription.classList.add("caption");
    captionDescription.classList.add(project.keyword + "-caption");
    captionContainer.appendChild(captionDescription);

    imageContainer.appendChild(captionContainer);
}

function addProjectDescription(project, projectContainer) {
    // Add the project description
    let projectDescriptionContainer = document.createElement("div");
    let projectDescription = document.createElement("div");
    projectDescription.innerHTML = project.projectDescription;
    projectDescription.classList.add("project-description");
    projectDescription.classList.add(project.keyword + "-project-description");

    projectDescriptionContainer.classList.add("project-text");
    projectContainer.appendChild(projectDescription);
}

function addProjectLinks(project, projectContainer) {
    /**
     * Project Links
     */
    let projectLinks = document.createElement("div");
    projectLinks.classList.add("project-links");

    // Add website to project
    let website = document.createElement("a");
    website.href = project.websiteLink;
    let anchorButton = document.createElement("div");
    anchorButton.classList.add("anchor-title");
    anchorButton.innerHTML = "view";

    website.appendChild(anchorButton);
    projectLinks.appendChild(website);

    // Github link
    let githubLink = document.createElement("a");
    githubLink.classList.add("project-git-link");
    githubLink.href = project.githubLink;

    // Icon for github
    let icon = document.createElement("i");
    icon.classList.add("devicon-github-original");
    icon.classList.add("colored");
    githubLink.appendChild(icon);

    projectLinks.appendChild(githubLink);

    projectContainer.appendChild(projectLinks);
}
// Loop through all projects and add associated data
projects.forEach(project => {
    // Create the project container
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    // Set the id to the keyword to easily access
    projectContainer.setAttribute('id',project.keyword);

    addTitle(projectContainer, project);

    // Create the slideshow
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("project-image-container");

    // Add the images to slideshow
    addSlideshowImages(imageContainer, project);

    // Add the slideshow arrow functions
    addArrow("prev", "&#10094;", project, imageContainer, function () {
        projectSlideIndices[project.keyword]--;
        showSlides(project.keyword, projectSlideIndices[project.keyword], project);
    });

    addArrow("next", "&#10095;", project, imageContainer, function () {
        projectSlideIndices[project.keyword]++;
        showSlides(project.keyword, projectSlideIndices[project.keyword], project);
    });

    addCaption(project, imageContainer);

    projectContainer.appendChild(imageContainer);

    // Add the project description
    addProjectDescription(project, projectContainer);

    addProjectLinks(project, projectContainer);


    projectPageIndex.appendChild(projectContainer);
});

Object.keys(projectSlideIndices).forEach((keyword, idx) => {
    showSlides(keyword, projectSlideIndices[keyword], projects[idx]);
})

/***************************************************************************
 * Project Image Slideshow Logic
 * Source - https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp 
 *      Section 3 - Javascript logic
 ***************************************************************************/
function showSlides(keyword, n, project) {
    // // Get a list of all the slideshow images
    let slides = document.getElementsByClassName(keyword + "-slideshow-image");

    // let  = document.getElementsByID("demo");
    let captionText = document.querySelector("." + keyword + "-caption");
    if (n >= slides.length) { projectSlideIndices[keyword] = 0; }
    if (n < 0) { projectSlideIndices[keyword] = slides.length - 1; }

    for (let imgCount = 0; imgCount < slides.length; imgCount++) {
        if (imgCount != projectSlideIndices[keyword]) {
            slides[imgCount].style.display = "none";
            console.log(imgCount);
            console.log(slides[imgCount]);
        }
    }
    slides[projectSlideIndices[keyword]].style.display = "block";
    captionText.innerHTML = project.imageCaptions[projectSlideIndices[keyword]];
}