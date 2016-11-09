
var app  = angular.module('claustroSample',['ngRoute','angular-jwt','ngStorage']);
app.constant("apiUrl", "http://uai-claustro-webapi.mybluemix.net//api/");

app.factory('authHttpResponseInterceptor', ['$q', '$location', '$rootScope', function ($q, $location, $rootScope) {
       return {
           // On request success
           request: function (config) {
               //console.log(config); // Contains the data about the request before it is sent.
               // Return the config or wrap it in a promise if blank.
               return config || $q.when(config);
           },

           // On request failure
           requestError: function (rejection) {

               return $q.reject(rejection);
           },
           response: function (response) {




               return response || $q.when(response);
           },
           responseError: function (rejection) {

               //if (rejection.status == 500)
                   //window.location.href("#/500");

               //if (rejection.status == 401)
                   //window.location.href("#/401");

               return $q.reject(rejection);
           }
       }
   }])


app.run(['$rootScope', '$http',  'jwtHelper', function ($rootScope, $http,jwtHelper)
{



    }])
