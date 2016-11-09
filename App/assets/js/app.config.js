app.config(function($routeProvider, $locationProvider,$sessionStorageProvider,jwtInterceptorProvider, $httpProvider,jwtOptionsProvider) {
  $sessionStorageProvider.setKeyPrefix('uai-');

      jwtOptionsProvider.config({ whiteListedDomains: ['localhost','uai-claustro-webapp.mybluemix.net']});

          jwtInterceptorProvider.tokenGetter = function () {
              return $sessionStorageProvider.get('token');
          };

          $httpProvider.interceptors.push('jwtInterceptor');

          //para hacer algun tratamiento especial sobre request/response
          $httpProvider.interceptors.push('authHttpResponseInterceptor');





  $routeProvider
   .when('/', {
    templateUrl: 'assets/home/home.html',
    controller: 'HomeController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/login', {
   templateUrl: 'assets/login/login.html',
   controller: 'LoginController as vm',
   resolve: {

   }
 })
 .when('/perfil', {
  templateUrl: 'assets/perfil/perfil.html',
  controller: 'PerfilController as vm',

 })
 .when('/products/new', {
  templateUrl: 'assets/product/save.html',
  controller: 'ProductController as vm',

 })
 .when('/products/all', {
  templateUrl: 'assets/product/all.html',
  controller: 'ProductController as vm',

 })
 .when('/products/edit/:id', {
  templateUrl: 'assets/product/save.html',
  controller: 'ProductController as vm',

 })
 .when('/404', {
  templateUrl: 'assets/views/partials/404.html',


 })
  .otherwise({ redirectTo: '/404' });

});
