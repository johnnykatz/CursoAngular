angular.module("TodoList", ["LocalStorageModule"])
        .service("TodoService", function (localStorageService) {
            this.key = "angular-todolist";
            if (localStorageService.get(this.key)) {
                this.activities = localStorageService.get(this.key);

            } else {
                this.activities = [];
            }

            this.add = function (newAct) {
                this.activities.push(newAct);
                this.updateLocalStorage();
            };
            this.updateLocalStorage = function () {
                localStorageService.set(this.key, this.activities);
            };
            this.clean = function () {
                this.activities = [];
                this.updateLocalStorage();
                return this.getAll();
            };
            this.getAll = function () {
                return this.activities;
            };

            this.removeItem = function (item) {
                this.activities = this.activities.filter(function (activity) {
                    return activity !== item;
                });
                this.updateLocalStorage();
                return this.getAll();
            };
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