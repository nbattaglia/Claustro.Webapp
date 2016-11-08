app.controller('ProductController', ['productsService','$location','$routeParams',function(productsService,$location,$routeParams) {
var vm = this;
vm.products=[];

vm.action = 'Save';
if ($routeParams.id) { //es un edit
    vm.action = 'Edit';
    productsService.one($routeParams.id).then(function (resp) {
    	vm.product = resp.data;
		})};


productsService.all().then(function(resp){
	vm.products = resp.data;
});

vm.save=function(){
	productsService.put(vm.product).then(function(resp){
			$location.path('/products/all');
	});
}


vm.delete=function(id){
	productsService.delete(id).then(function(resp){
		for(i=0;i<	vm.products.length;i++){
				if(	vm.products[i].id == id){
						  	vm.products.splice(i, 1);
					}
				}
	});
}

return vm;

}]);
