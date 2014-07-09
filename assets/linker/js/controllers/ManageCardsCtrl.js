'use strict';
(function() {


    angular.module('esi.ManageCardsCtrl', [])
            .controller("ManageCardsCtrl", ManageCardsCtrl);

    ManageCardsCtrl.$inject = ['$scope', '$http', '$state'];
    function ManageCardsCtrl($scope, $http, $state) {
        var URL = "/" + $state.current.resource;
        $http.get(URL).then(function(response) {
            $scope.cards = response.data;
        });
        
        $scope.addCard = function() {
            $http.post(URL, $scope.card).then(function(response) {
                $scope.cards.unshift(response.data);
            });
        };
        
    }
    

})();
