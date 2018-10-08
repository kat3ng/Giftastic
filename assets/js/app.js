// create an array of strings and save it to a variable called`topics`.
var movies = [
    "Edward Scissorhands", "Beetlejuice", "The Nightmare Before Christmas", "The Corpse Bride", "Frankenweenie", "Mars Attacks!", "Sweeney Todd", "Sleep Hollow", "Big Fish", "Pee-Wee's Big Adventure"
];
console.log(movies);

// Generic function for capturing the movie name from the data-attribute
function alertMovieName() {
}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies to avoid repeat buttons
    $("#btn-view").empty();

    // Loop through the array of movies
    for (var i = 0; i < movies.length; i++) {

        // Dynamicaly generate buttons for each movie in the array

        var userMovie = $("<button>");

        // Adding a class
        userMovie.addClass("movie");

        // Added a data-attribute
        userMovie.attr("data-name", movies[i]);

        // Provided the initial button text
        userMovie.text(movies[i]);

        // Added the button to the HTML
        $("#btn-view").append(userMovie);
    }
}


// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var userMovie = $("#movie-input").val().trim();

    // The movie from the textbox is then added to our array
    movies.push(userMovie);
    console.log(movies);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Function for displaying the movie info
$(document).on("click", ".movie", alertMovieName);

// Calling the renderButtons function to display the intial buttons
renderButtons();

//AJAX CALL

$("button").on("click", function () {
    var movie = $(this).attr("data-movie");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=fuR6CscpNgfqH8BemuXHuAzAucb6xoo5&limit=5";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var movieDiv = $("<div>");
            var p = $("<p>").text(results[i]);

            var movieImage = $("<img>");
            movieImage.attr("src", results[i].data.images.fixed_height.url);

            movieDiv.append(p);
            movieDiv.append(movieImage);
            $("#gifs-appear-here").prepend(movieDiv)
        }


    });
});

//EVENT LISTENER FOR BUTTON CLICKS ON THE TOPICS - FOR LATER

// // Event handler for user clicking the select-movie button
// $("#movie-input").on("click", function (event) {
//     // Preventing the button from trying to submit the form
//     event.preventDefault();
//     // Storing the artist name
//     var scaryMovie = $("#movie-input").val().trim();
