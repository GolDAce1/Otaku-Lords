angular.module('ClanMembers', [])
    .controller('Controller', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('detailsPage', function () {
        return {
            restrict: 'E',
            templateUrl: '../OtakuLordss.html'
        };
    });