app.controller('LoginController', ['$scope','AuthService',function($scope,AuthService) {

   var vm = this;

  vm.login=function()
  {
      AuthService.login(vm.mail,vm.password);
  }


  return vm;
}]);
