import { reactive } from "vue";
import axios from 'axios';


export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
    apiUrlPopular: 'https://api.themoviedb.org/3/movie/popular',
    apiUrlPopularSeries: 'https://api.themoviedb.org/3/tv/popular',
    apiUrlTop: 'https://api.themoviedb.org/3/movie/top_rated',
    apiUrlTopSeries: 'https://api.themoviedb.org/3/tv/top_rated',
    apiKey: '89233bf94f01a12fe4fc19b466c905b3',
    apiQuery: '',
    select: '',
    language: 'it-IT',
    title: {
        series: 'Series',
        movies: 'Movies',
        moviesPopular: 'Most Popular Movies',
        moviesTop: 'Most Rated Movies',
        seriesPopular: 'Most Popular Series',
        seriesTop: 'Top Rated Series'

    },
    movieList: [],
    seriesList: [],
    popularList: [],
    popularListSeries: [],
    topList: [],
    topListSeries: [],
    dateInfo: null,
    errorMessage: null,
    apiUrlImg: 'https://image.tmdb.org/t/p/',
    sizeImg: 'w342',
    bsizeImg: 'w500',
    placeHolder: 'https://via.placeholder.com/300.png',







    callApi() {
        if (this.apiQuery !== '') {
            const configMovie = {
                method: 'get',
                url: this.apiUrlMovies,
                params: {
                    api_key: this.apiKey,
                    query: this.apiQuery,
                    language: this.lenguage

                },
            };
            const configSeries = {
                method: 'get',
                url: this.apiUrlSeries,
                params: {
                    api_key: this.apiKey,
                    query: this.apiQuery,
                    language: this.lenguage
                },
            };

            axios(configMovie)
                .then((response) => {
                    this.movieList = response.data.results;
                    store.popularList.forEach((movie) => {

                        const configCast = {
                            method: 'get',
                            url: this.apiUrl,
                            params: {
                                api_key: this.apiKey,
                                query: '/movie/' + movie.id + '/credits',

                            },
                        }
                        axios(configCast)
                            .then((actors) => {
                                // movie.cast = actors.data.cast.slice(0, 4)
                                console.log(actors.data.cast)
                            })
                    })

                })
                .catch((error) => {
                    // console.error(error.message);
                    this.errorMessage = error.message;
                });
            axios(configSeries)
                .then((response) => {
                    // console.log(response.data.results);
                    this.seriesList = response.data.results;
                })
                .catch((error) => {
                    // console.error(error.message);
                    this.errorMessage = error.message;
                });


        }
    },


})
