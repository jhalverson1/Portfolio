$(document).ready(function(){

    var api_key = config.TMDB_API;
    var baseimg = "https://image.tmdb.org/t/p/w185";
    var tmdb = theMovieDb;
    var resultJSON = {};

    // Allows user to hit enter in text box to submit search
   document.getElementById('movie_search_text').onkeypress=function(e){
      if(e.keyCode==13){
        document.getElementById('movie_search_btn').click();
      }
    }

  // When the user searches for a movie
	 $("#movie_search_btn").click(function(){
        var film = $('#movie_search_text').val();
        tmdb.search.getMovie({"query":film}, search_successCB, search_errorCB)
    });

    // Generates a list of movies based on what is being searched for
    function generate_list(resultJSON) {

        // Clear div, then load div with new search results
        $('#movie_list_div').empty();
        $('#movie_list_div').append("<div class='list-group' id='newResultsList'></div>");

        for (i = 0; i < resultJSON.results.length; i++) {
            var current_id = resultJSON.results[i].id;
            // Check and see if movie has a poster poster available
            var full_image_url;
            if (resultJSON.results[i].poster_path) {
              full_image_url = baseimg + resultJSON.results[i].poster_path;
            } else {
              full_image_url = "images/poster_unavailable.jpg";
            }

            // Create unordered list items
            $("#newResultsList").append(
                        "<a href='movie_info.html' class='list-group-item list-group-item-action search_result_item' id ='" + current_id + "' onClick='segue_click(this.id)'> \
                        <div class='container-fluid'> \
                          <div class='row'> \
                          \
                            <!-- Movie Poster --> \
                            <div class='col-sm-1 home_li_pic'> \
                              <img class='poster_thumbnail' src='" + full_image_url + "' alt='movie poster'> \
                            </div> \
                            \
                            <!-- title and release year --> \
                            <div class='col-sm-5'> \
                              <h3 class='title_header'>" + resultJSON.results[i].title + "</h3> \
                              <p class='year_text'>" + resultJSON.results[i].release_date.substring(0, 4) + "</p> \
                            </div> \
                            \
                            <!-- Unused Section --> \
                            <div class='col-sm-6'> \
                            </div> \
                          </div> \
                        </div>"
                      );
        }
    };

    // Function is called when the search is successful
    function search_successCB(data) {

        // Object created from json
        resultJSON = JSON.parse(data);

        generate_list(resultJSON)

        console.log("Success callback");
    };

    // Function is called when the search is not successful
    function search_errorCB(data) {
        console.log("Error callback: " + data);
    };


});

function segue_click(clicked_id) {

    // save clicked movie id to local storage for later use
    localStorage.movie_id=clicked_id;

};
