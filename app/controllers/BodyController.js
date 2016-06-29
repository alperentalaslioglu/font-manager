app.controller('BodyController', ['$scope', '$rootScope', 'FontService', function ($scope, $rootScope, FontService) {
    // Fetch fonts
    FontService.success(function (data) {
        $scope.fonts = data.items;
        $rootScope.$broadcast('fonts', $scope.fonts);
    });
}]);