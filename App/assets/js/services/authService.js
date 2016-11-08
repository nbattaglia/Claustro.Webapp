
app.factory('AuthService',['$http', 'apiUrl', 'jwtHelper','$location','$sessionStorage',function($http,apiUrl,jwtHelper,$location,$sessionStorage) {

var token;
var userId;
var tokenDecoded;


var getToken = function(){
  return token;
}
var login = function(mail,password) {
   res = $http.post(apiUrl+'auth/', { Mail: mail, Password: password })

  .then(function(res) {

      if (res.data.authenticated) {
          token = res.data.token;
          tokenDecoded = jwtHelper.decodeToken(token)
          userId = res.data.id;

          $sessionStorage.token = token
          $sessionStorage.tokenDecoded = jwtHelper.decodeToken(token)



        $location.path('/');
      }
      else {
        logout();
      }

  })

   .catch(function (resp, status) {
     logout();
      //i (resp.status == 401)


  });

}

var logout=function(){
  token=undefined;
  userId=undefined;
  tokenDecoded=undefined;
$sessionStorage.$reset();
  $location.path('/login');
}

var isAuthenticated = function ()
{

  return (!!token && jwtHelper.isTokenExpired(token) || (userId !== undefined));


}

      return {
          login:login,
          isAuthenticated: isAuthenticated,
          getToken: getToken,
          logout:logout
      };
}]);
