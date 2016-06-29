app.factory('FontService', ['$http', function ($http) {
    return $http.get('app/data/fontList.json');
}]);

