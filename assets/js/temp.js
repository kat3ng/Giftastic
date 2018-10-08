// create an array of strings and save it to a variable called`topics`.
var movies = [
    "Edward Scissorhands", "Beetlejuice", "The Nightmare Before Christmas", "The Corpse Bride", "Frankenweenie", "Mars Attacks!", "Sweeney Todd", "Sleep Hollow", "Big Fish", "Pee-Wee's Big Adventure"
];


// Generic function for capturing the movie name from the data-attribute
function alertMovieName() {
}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies to avoid repeat buttons
    $("#buttons-view").empty();

    // Loop through the array of movies
    for (var i = 0; i < movies.length; i++) {

        // Dynamicaly generate buttons for each movie in the array

        var a = $("<button>");

        // Adding a class
        a.addClass("movie");

        // Added a data-attribute
        a.attr("data-name", movies[i]);

        // Provided the initial button text
        a.text(movies[i]);

        // Added the button to the HTML
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    // The movie from the textbox is then added to our array
    movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Function for displaying the movie info
$(document).on("click", ".movie", alertMovieName);

// Calling the renderButtons function to display the intial buttons
renderButtons();