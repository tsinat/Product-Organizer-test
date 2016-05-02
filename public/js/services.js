'use strict';

var app = angular.module('testTwo');

app.service('Product', function($q, $http) {

    var products = [{
        name:"abc",
        description: 'First description',
        price: 120,
        category: 'ditergent',
        image: 'http://i.imgur.com/IKOQUI0.jpg'
    },
    {
        name:"xyz",
        description: 'second description',
        price: 12,
        category: 'household',
        image: 'http://i.imgur.com/CyHNBdM.jpg'
    },{
        name:"abc",
        description: 'third description',
        price: 130,
        category: 'snack',
        image: 'http://i.imgur.com/k37hPI3.jpg'
    }]

    this.getAll = () => {
        return $q((resolve, reject) => {
            resolve(products)
    });
  };

  this.getByName = name => {
    // returning a promise
    return $q((resolve, reject) => {
      var product = products.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];

      if(product) {
          console.log(product);
        resolve(product);
      } else {
        reject(new Error('product not found'));
      }

    });



}
})
