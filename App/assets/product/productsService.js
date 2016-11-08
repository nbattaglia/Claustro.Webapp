app.factory('productsService',function($http,apiUrl) {

    var all = function () {
        return $http.get(apiUrl+'products/');

    }
    var one = function (id) {
        return $http.get(apiUrl+'products/'+id);

    }

    var put = function(product){
        return $http.put(apiUrl+'products/',product);
    }

    var del = function(id){
        return $http.delete(apiUrl+'products/'+id);
    }


    return {
	all: all,
  put:put,
  one:one,
  delete:del


    };
});
