myApp.controller('MyController', function($scope, $mdSidenav) {
   $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
   };
});
