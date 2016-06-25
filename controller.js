var app = angular.module("MyFirstApp", []);
app.controller("FirstController",["$scope",function(s){
    s.nombre="Johnny";
    s.nuevoComentario={};
    s.comentarios=[{
        comentario:"comentario",
        username:"elias"
    },
    {
        comentario:"hola que tal",
        username:"elloco"
    }];
s.agregarComentario=function(){
  s.comentarios.push(s.nuevoComentario);
  s.nuevoComentario={};
};

}]);
