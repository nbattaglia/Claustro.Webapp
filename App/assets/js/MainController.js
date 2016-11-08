app.controller('MainController', ['$scope','AuthService','$location',function($scope,AuthService,$location) {

  $scope.$on('$routeChangeStart', function (event, next, current) {


         if (AuthService.isAuthenticated()) {
             //$log.info("usuario logueado %O", AuthService);
         } else {
             //$log.info("usuario no logueado");
             //$log.info("next.params.templateFile: %s", next.params.templateFile);
             // no logged user, redirect to /login
             if (next.params.templateFile === "login") {
                 //do nothing
             } else {
                 $location.path("/login");
             }
         }


     });

$scope.isAuthenticated = function(){
  return AuthService.isAuthenticated();
}

$scope.logout=function(){
  AuthService.logout();
}

$scope.a=function(){
  console.log("as");
}


}]);
