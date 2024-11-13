const URL = "https://dummyjson.com/recipes/tags"


fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {

   










})
.catch(function (error) {
    return console.log(error);
    ;
})