angular.module("CustomDirective", [])
        .controller("AppCtrl", function ($scope, $http) {
            $http.get("https://api.github.com/users/johnnykatz/repos")
                    .success(function (data) {
                        $scope.repos = data;
                    })
                    .error(function (err) {
                        conmsole.log(err)
                    })
        });