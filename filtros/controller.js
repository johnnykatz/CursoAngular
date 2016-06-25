angular.module("mainModule", [])
        .filter("removeHtml", function () {
            return function (texto) {
                return String(texto).replace("@", "9");
            }
        })
        .controller("FiltersController", function ($scope) {
            $scope.mi_html = "hola que tal@";
        });