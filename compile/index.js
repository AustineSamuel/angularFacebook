const app=angular.module("app",[]);
app.controller("appCtr",function($scope,global){
  $scope.save=()=>{
localStorage.setItem("fbDataBase",JSON.stringify(global));
  }
});