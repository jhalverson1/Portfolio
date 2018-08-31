$(document).ready(function() {
  var api_key = config.TMDB_API;
  var baseimg = "https://image.tmdb.org/t/p/w185";
  var tmdb = theMovieDb;


  tmdb.movies.getNowPlaying({}, successCB, errorCB)

  // Function is called when movies successfully loaded
  function successCB(data) {

      // Object created from json
      var resultJSON = JSON.parse(data);

      generate_list(resultJSON.results)
      console.log("Success callback");
  };

  // Function is called when movies are not successfully loaded
  function errorCB(data) {
      console.log("Error callback: " + data);
  };

  function generate_list(movies) {

    for (i = 0; i < movies.length; i++) {
      console.log(movies[i].title);
    }
  }
});
