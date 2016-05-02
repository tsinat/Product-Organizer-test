'use strict';

var app = angular.module('testTwo');

app.controller('detailCtrl', function($scope, name, Product) {

    $scope.product = name;
    console.log($scope.product.image);

    Product.getAll()
      .then(products => {
          $scope.products = products;
      });

    $scope.removeProduct = product => {
       console.log(product);
       var index = $scope.products.indexOf(product);
       $scope.products.splice(index, 1);
       $scope.product = {};
   }

    var editingIndex;
    $scope.editDetail = product => {
        editingIndex =$scope.products.indexOf(product)
        $scope.editProduct = angular.copy(product);
        console.log($scope.editProduct);

    };
    $scope.saveDetail = () => {
       $scope.products[editingIndex] = $scope.editProduct;
       $scope.editProduct = {};
   };

});
app.controller('productCtrl', function($scope, $state, Product) {
    Product.getAll()
      .then(products => {
          $scope.products = products;
      });

    $scope.addProduct = () => {
        $scope.products.push($scope.newProduct);
        console.log($scope.newProduct);
    }

    $scope.sortBy = product =>{
      console.log(product);
      if($scope.sortOrder == product){
          $scope.sortOrder = '-' + product;
      }
      else{
          $scope.sortOrder = product;
      }
  }


});

app.controller('homeCtrl', function() {
    console.log('homeCtrl');
});
app.controller('statCtrl', function($scope, Product) {
    console.log('statCtrl');
    Product.getAll()
      .then(products => {
          $scope.products = products;
          $scope.totalValue= 0;
          for(var i=0; i<$scope.products.length; i++){
              $scope.totalValue += Number($scope.products[i].price);
          }
      });

});
