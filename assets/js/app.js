// create an array of strings and save it to a variable called`topics`.
var movies = [
    "Edward Scissorhands", "Beetlejuice", "The Nightmare Before Christmas", "The Corpse Bride", "Frankenweenie", "Mars Attacks!", "Sweeney Todd", "Sleepy Hollow", "Big Fish", "Pee-Wee's Big Adventure"
];
// console.log(movies);

// Generic function for capturing the movie name from the data-attribute
function alertMovieName() {}

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

        userMovie.addClass("btn");

        // Adding another class so we can pause the gifs later
        userMovie.addClass("movieGif");

        // Added a data-attribute
        userMovie.attr("data-name", movies[i]);

        // Added a data-attribute
        userMovie.attr("data-state", "still", movies[i]);

        // Provided the initial button text
        userMovie.text(movies[i]);

        // Added the button to the HTML
        $("#btn-view").append(userMovie);
    }
    // console.log(userMovie);

}

// think about on "click"
// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();
    var userMovie = $("#movie-input").val().trim();
    // console.log(userMovie);
    // This line grabs the input from the textbox
    // The movie from the textbox is then added to our array
    movies.push(userMovie);
    // console.log(movies);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    appendMovie();
});
// Calling the renderButtons function to display the intial buttons
renderButtons();
appendMovie();

//AJAX CALL

function appendMovie() {
    $("button").on("click", function () {
        var movie = $(this).attr("data-name");
        // console.log(movie);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=fuR6CscpNgfqH8BemuXHuAzAucb6xoo5&limit=5";
        // console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                // console.log(response);

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var movieDiv = $("<div>");

                    var p = $("<p>");

                    p.text("Rating: " + results[i].rating);
                    // console.log(p);

                    var movieImage = $("<img>");

                    // Adding another class so we can pause the gifs 
                    movieImage.addClass("gif");

                    movieImage.attr("src", results[i].images.fixed_height_still.url);

                    movieImage.attr('data-still', results[i].images.fixed_height_still.url)

                    movieImage.attr('data-animate', results[i].images.fixed_height.url)

                    movieImage.attr('data-state', 'still');

                    movieDiv.append(p);
                    movieDiv.append(movieImage);
                    $("#gifs-appear-here").prepend(movieImage);
                    // console.log(movieImage);
                }

                $(".gif").on("click", function () {
                    console.log("image-clicked");

                    var state = $(this).attr("data-state");
                    console.log(this);
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is. Then, set the image's data-state to animate
                    if (state === "still") {
                        $(this).attr("src", $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                        // Else set src to the data-still value
                    } else {
                        $(this).attr('src', $(this).data('still'));
                        $(this).attr("data-state", "still");
                    }
                });
                $("#movie-input").val("");
                return false;

            })
    });

}