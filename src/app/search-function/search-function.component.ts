<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
=======
import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
>>>>>>> Stashed changes
import { HttpClientModule } from  '@angular/common/http';
import { AxiosInstance } from "axios";
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from "jquery";
import axios from "axios";


@Component({
  selector: 'app-search-function',
  templateUrl: './search-function.component.html',
  template: '<a (click)="movieSelected()" class="btn btn-primary">Movie Details</a>',
  styleUrls: ['./search-function.component.css']
})


export class SearchFunctionComponent implements OnInit {


<<<<<<< Updated upstream
  constructor(@Inject(DOCUMENT) document) {
=======

  movieSelected(id) {
    sessionStorage.setItem('movieID', id);

    //window.location = 'movie.component.html';    //used to to display individual movie page
    //router.navigate
    console.log(id);
    this.router.navigate(['/movie']);

    return false;
    }



  constructor(@Inject(DOCUMENT) document, private router: Router, private elRef: ElementRef) {
>>>>>>> Stashed changes
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const API_KEY = '?api_key=ea13feb29808cba44ae41a961107c167'
  const URL = 'https://api.themoviedb.org/3/movie/'


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  $(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
      e.preventDefault();
    })
  });

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  function getMovies(searchText){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=ea13feb29808cba44ae41a961107c167&query='+searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.results;
      let output = '';

      $.each(movies, (index, movie) => {
        let moviePoster = '';
        if (movie.poster_path ==null){moviePoster = "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png";}
        else {moviePoster = IMG_URL+movie.poster_path;}
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${moviePoster}">
              <h5>${movie.title}</h5>
<<<<<<< Updated upstream
              <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
=======
              <a (click)="movieSelected('${movie.id}')" class="btn btn-primary">Movie Details</a>
>>>>>>> Stashed changes
            </div>
          </div>
        `;
      });


      document.getElementById('movies').innerHTML= output;

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    })
    .catch((err) => {
      console.log(err);
    });
  }




  function movieSelected(id){
    sessionStorage.setItem('movieID', id);

    //window.location = 'movie.component.html';    //used to to display individual movie page
    //router.navigate
<<<<<<< Updated upstream
=======
    console.log("Clicked");
    router.navigate(['/movie']);
>>>>>>> Stashed changes

    return false;
  }

  function getMovie(){
    let movieID = sessionStorage.getItem('movieID');

    axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=ea13feb29808cba44ae41a961107c167')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      var genreList = '';
      $.each(movie.genres, function(n, obj){
        genreList+=obj['name'] + ', ';
      });

      let moviePoster = '';
      if (movie.poster_path == null){moviePoster = "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png";}
      else {moviePoster = IMG_URL+movie.poster_path;}

      let movieBudget = '';
      if(movie.budget==null || movie.budget == 0) {movieBudget = 'Not Available';}
      else {movieBudget = '$' + movie.budget;}
      let output =`
        <div class="row">
          <div class ="col-md-4">
            <img src="${moviePoster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${genreList}</li>
              <li class="list-group-item"><strong>Language:</strong> ${movie.original_language}</li>
              <li class="list-group-item"><strong>Release Date:</strong> ${movie.release_date}</li>
              <li class="list-group-item"><strong>Tagline:</strong> ${movie.tagline}</li>
              <li class="list-group-item"><strong>Budget:</strong> ${movieBudget}</li>
              <li class="list-group-item"><strong>Vote Average:</strong> ${movie.vote_average}</li>
              <li class="list-group-item"><strong>Creator Page:</strong> ${movie.homepage}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Description</h3>
            ${movie.overview}
            <hr>
            <a href="${movie.homepage}" target="_blank" class="btn btn-primary">View Creator Page</a>
<<<<<<< Updated upstream
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
=======
            <a href="movie-page.component.html" class="btn btn-default">Go Back To Search</a>
>>>>>>> Stashed changes
          </div>
        </div>
      `;

      document.getElementById('movie').innerHTML= output;
    })
    .catch((err) => {
      console.log(err);
    });
  } }

  ngOnInit(): void {

  }

}
