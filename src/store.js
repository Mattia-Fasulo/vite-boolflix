import { reactive } from "vue";
import axios from 'axios';


export const store = reactive({
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',

    apiKey: '89233bf94f01a12fe4fc19b466c905b3',
    apiQuery: '',
    language: 'it-IT',
    movieList: [],
    seriesList: [],
    errorMessage: null,
    apiUrlImg: 'https://image.tmdb.org/t/p/',
    sizeImg: 'w342',

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
                    console.log(response.data.results);
                    this.movieList = response.data.results;
                })
                .catch((error) => {
                    console.error(error.message);
                    this.errorMessage = error.message;
                });
            axios(configSeries)
                .then((response) => {
                    console.log(response.data.results);
                    this.seriesList = response.data.results;
                })
                .catch((error) => {
                    console.error(error.message);
                    this.errorMessage = error.message;
                });


        }
    }
})
