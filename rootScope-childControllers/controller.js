angular.module("MyFirstApp",[])
        .run(function($rootScope){
            $rootScope.nombre="codigoFacilito";
})
        .controller("FirstController", function($scope){
            $scope.nombre="uriel";
})
        .controller("ChildController",function($scope){
            
})