angular.module("TodoList", ["LocalStorageModule"])
        .controller("TodoController", function ($scope, localStorageService) {

            if (localStorageService.get("angularstorage")) {
                $scope.todo = localStorageService.get("angularstorage");
            } else {
                $scope.todo = [];
            }


            /*
             * {
             * descripcion:"desc",
             * fecha:dd/mm/yyyy
             * }
             */
            $scope.$watchCollection("todo",function(){
                 localStorageService.set("angularstorage",$scope.todo);
            });
            
            $scope.addAct = function () {
                $scope.todo.push($scope.newAct);
                $scope.newAct = {};
//                localStorageService.set("angularstorage",$scope.todo);
            };
             $scope.clear = function () {
                $scope.todo={};
//                localStorageService.set("angularstorage",$scope.todo);
            };
           

        });