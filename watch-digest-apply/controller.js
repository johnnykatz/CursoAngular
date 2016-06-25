angular.module("mainModule", [])
       
        .controller("Controller", function ($scope) {
            $scope.nombre="uriel";
            setTimeout(function(){
               
                $scope.$apply(function(){
                     $scope.nombre="codigo facilito";
                });
            },2000);
        });
        
        /*
         * apply llama a $gigest quien consulta los watcher
         * uno por uno para ver si se actualizaron y asi actualizar la vista
         */