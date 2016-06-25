angular.module("TodoList", ["LocalStorageModule"])
        .factory("TodoService", function (localStorageService) {
            var todoService = {};

            todoService.key = "angular-todolist";
            if (localStorageService.get(todoService.key)) {
                todoService.activities = localStorageService.get(todoService.key);

            } else {
                todoService.activities = [];
            }

            todoService.add = function (newAct) {
                todoService.activities.push(newAct);
                todoService.updateLocalStorage();
            };
            todoService.updateLocalStorage = function () {
                localStorageService.set(todoService.key, todoService.activities);
            };
            todoService.clean = function () {
                todoService.activities = [];
                todoService.updateLocalStorage();
                return todoService.getAll();
            };
            todoService.getAll = function () {
                return todoService.activities;
            };

            todoService.removeItem = function (item) {
                todoService.activities = todoService.activities.filter(function (activity) {
                    return activity !== item;
                });
                todoService.updateLocalStorage();
                return todoService.getAll();
            };

            return todoService;
        })
        .controller("TodoController", function ($scope, TodoService) {
            $scope.todo = TodoService.getAll();
            $scope.newActv = {};
            $scope.addAct = function () {
                TodoService.add($scope.newAct);
                $scope.newAct = {};
            };
            $scope.removeAct = function (item) {
                $scope.todo = TodoService.removeItem(item);
            };
            $scope.clean = function () {
                $scope.todo = TodoService.clean();
            };
        });