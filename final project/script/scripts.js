$(document).ready(function(){


    // url for the base API information

    var apiBaseURL = 'https://api.themoviedb.org/3/';
    var apiKey = '12bf58305cae7d81ae8dab20c6b46b08';
    //Url for base images

    var imageBaseURL = 'https://image.tmdb.org/t/p/';

    const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;

    // Get recent movies that are now playing 

    function getNowPlayingData(){
        $.getJSON(nowPlayingURL, function(nowPlayingData){
            //Will add .results because nowPLayingData is an array
            for(let i = 0; i<nowPlayingData.results.length; i++){
                // mid is the movie ID
                var mid = nowPlayingData.results[i].id;
                var thisMovieURL = apiBaseURL +'movie/'+ mid + '/videos?api_key=' + apiKey;

                $.getJSON(thisMovieURL, function(movieKey){
                    // this is to get the movie poster data
                    var poster = imageBaseURL+'w300'+nowPlayingData.results[i].poster_path;
                    // obtain movie title
                    var title = nowPlayingData.results[i].original_title;
                    // Get movie realease date
                    var releaseDate = nowPlayingData.results[i].realease_date;
                    // Get a description of the movie
                    var overview = nowPlayingData.results[i].overview;
                    // Get data rating
                    var voteAverage = nowPlayingData.results[i].voteAverage;
                    // This will get a youtube trailer if available
                    var youtubeKey = movieKey.results[0].key;
                    var youtubeLink = 'https://www.youtube.com/watch?v='+youtubeKey;
                    // This will make it possible for other movie data to show up without this code it will simply show one movies data
                    var nowPlayingHTML = '';
                    nowPlayingHTML += '<div class="col-sm-3 eachMovie">';
                            nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
                            nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
                                nowPlayingHTML += '<div class="modal-dialog" role="document">';
                                    nowPlayingHTML += '<div class="modal-content col-sm-12">';
                                        nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
                                            nowPlayingHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
                                        nowPlayingHTML += '</div><br>';//close trailerLink
                                        nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
                                            nowPlayingHTML += '<div class="movieName">'+title+'</div><br>';
                                            nowPlayingHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
                                            nowPlayingHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
                                            // nowPlayingHTML += '<div class="genre">Genre: '+genre+'</div><br>';
                                            nowPlayingHTML += '<div class="overview">' +overview+ '</div><br>';// Put overview in a separate div to make it easier to style
                                            nowPlayingHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">8:30 AM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">12:30 PM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">4:10 PM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
                                            nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
                                        nowPlayingHTML += '</div>'; //close movieDetails
                                    nowPlayingHTML += '</div>'; //close modal-content
                                nowPlayingHTML += '</div>'; //close modal-dialog
                            nowPlayingHTML += '</div>'; //close modal
                        nowPlayingHTML += '</div>'; //close off each div

                        $('#movie-grid').append(nowPlayingHTML);
                        //Without this line, there is nowhere for the posters and overviews to display so it doesn't show up 
                        $('#movieGenreLabel').html("Now Playing");
                        //h1 will change depending on what is clicked. Will display "Now Playing" in this case.
                    })
                }
            }) 
        }
                //  genreIDs and genre names: 
            // http://api.themoviedb.org/3/movie/:movieID?api_key=<<>>
                        //28 = action
                        //12 = adventure
                        //16 = animation
                        //35 = comedy
                        //80 = crime
                        //18 = drama
                        //10751 = family
                        //14 = fantasy
                        //36 = history
                        //27 = horror
                        //10402 = music
                        //10749 = romance
                        //878 = science fiction
                        //53 = thriller

    function getMoviesByGenre(genre_id){
        const getMoviesByGenreURL = apiBaseURL + 'genre/' + genre_id + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc';
        $.getJSON(getMoviesByGenreURL) , function(genreData){
            for(let i = 0; i<genreData.results.lenght; i++){
                var mid = genreData.results[i].id;
                var thisMovieURL = apiBaseURL+'movie/' +mid+ '/videos?api_key=' + apiKey;
                
                $.getJSON(thisMovieURL), function(movieKey){
                    var poster = imageBaseURL+'w300'+genreData.results[i].poster_path;
                    var title = genreData.results[i].original_title;
                    var releaseDate = genreData.results[i].release_date;
                    var overview = genreData.results[i].overview;
                    var voteAverage = genreData.results[i].vote_average;
                    var youtubeKey = movieKey.results[0].key;
                    var youtubeLink = 'http://www.youtube.com/watch?v='+youtubeKey;
                    var genreHTML ='';
                    genreHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
                            genreHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
                            genreHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
                                genreHTML += '<div class="modal-dialog" role="document">';
                                    genreHTML += '<div class="modal-content col-sm-12 col-lg-12">';
                                        genreHTML += '<div class="col-sm-6 moviePosterInModal">';
                                            genreHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
                                        genreHTML += '</div><br>';//close trailerLink
                                        genreHTML += '<div class="col-sm-6 movieDetails">';
                                            genreHTML += '<div class="movieName">'+title+'</div><br>';
                                            genreHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
                                            genreHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
                                            genreHTML += '<div class="overview">' +overview+ '</div><br>';
                                            genreHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">8:30 AM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">12:30 PM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">4:10 PM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
                                            genreHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
                                        genreHTML += '</div>'; //close movieDetails
                                    genreHTML += '</div>'; //close modal-content
                                genreHTML += '</div>'; //close modal-dialog
                            genreHTML += '</div>'; //close modal
                        genreHTML += '</div>'; //close off each div
                        // this line gives data to the poster 
                        $('#movie-grid').append(genreHTML);
                }
                
            }
        }
    }            

    getNowPlayingData();
    
    // Reset HTML strings to get new data 
    var nowPlayingHTML = '';
    var genreHTML = '';

    $('.navbar-brand').click(function(){
        getNowPlayingData();
        $('#movie-grid').html(nowPlayingHTML);
        $('#movieGenreLabel').html("Now Playing");
    })

    $('.nowPlaying').click(function(){
        getNowPlayingData();
        $('#movie-grid').html(nowPlayingHTML);
        $('#movieGenreLabel').html("Now Playing");
    })

    $('#action').click(function(){
        getMoviesByGenre(28);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Action");
    })

    $('#adventure').click(function(){
        getMoviesByGenre(12);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Adventure");
    })

    $('#animation').click(function(){
        getMoviesByGenre(16);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Animation");
    })

    $('#comedy').click(function(){
        getMoviesByGenre(35);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Comedy");
    })

    $('#crime').click(function(){
        getMoviesByGenre(80);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Crime");
    })

    $('#drama').click(function(){
        getMoviesByGenre(18);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Drama");
    })

    $('#family').click(function(){
        getMoviesByGenre(10751);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Family");
    })

    $('fantasy').click(function(){
        getMoviesByGenre(14);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Fantasy");
    })

    $('#history').click(function(){
        getMoviesByGenre(36);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("History");
    })

    $('#horror').click(function(){
        getMoviesByGenre(27);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Horror");
    })

    $('#music').click(function(){
        getMoviesByGenre(10402);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Music");
    })

    $('#romance').click(function(){
        getMoviesByGenre(10749);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Romance");
    })

    $('#scifi').click(function(){
        getMoviesByGenre(878);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Science Fiction");
    })

    $('#thriller').click(function(){
        getMoviesByGenre(53);
        $('#movie-grid').hmtl(genreHTML);
        $('#movieGenreLabel').html("Thriller");
    })

    function searchMovies(){
        const searchMovieURL = apiBaseURL + 'search/movie?api_key=' + apiKey + '&language=en-US&page1&include_adult=false&query=' + searchTerm;
        $.getJSON(searchMovieURL, function(movieSearchResults){
            for (let i = 0; i<movieSearchResults.results.length; i++){
                var mid = movieSearchResults.results[i].id;
                var thisMovieUrl = apiBaseURL+'movie/'+mid+'/videos?api_key=' + apiKey;		

                $.getJSON(thisMovieUrl, function(movieKey){
					// console.log(movieKey)
					var poster = imageBaseUrl+'w300'+movieSearchResults.results[i].poster_path;
					var title = movieSearchResults.results[i].original_title;
					var releaseDate = movieSearchResults.results[i].release_date;
					var overview = movieSearchResults.results[i].overview;
					var voteAverage = movieSearchResults.results[i].vote_average;				
					var youtubeKey = movieKey.results[0].key;
					var youtubeLink = 'https://www.youtube.com/watch?v='+youtubeKey;
					var searchResultsHTML = '';
                    searchResultsHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
						searchResultsHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
						searchResultsHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
							searchResultsHTML += '<div class="modal-dialog" role="document">';
								searchResultsHTML += '<div class="modal-content col-sm-12 col-lg-12">';
									searchResultsHTML += '<div class="col-sm-6 moviePosterInModal">';
										searchResultsHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
									searchResultsHTML += '</div><br>';//close trailerLink
									searchResultsHTML += '<div class="col-sm-6 movieDetails">';
										searchResultsHTML += '<div class="movieName">'+title+'</div><br>';
										searchResultsHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
										searchResultsHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
										searchResultsHTML += '<div class="overview">' +overview+ '</div><br>';
										searchResultsHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">8:30 AM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">12:30 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">4:10 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
									searchResultsHTML += '</div>'; //close movieDetails
							searchResultsHTML += '</div>'; //close modal-dialog
						searchResultsHTML += '</div>'; //close modal
					searchResultsHTML += '</div>'; //close off each div
					// console.log(searchResultsHTML)
					$('#movie-grid').append(searchResultsHTML);
					//Label will be whatever user input was
					$('#movieGenreLabel').html(searchTerm);	
            
                })
            }
    })            
}        
});

