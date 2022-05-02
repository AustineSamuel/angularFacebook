const app=angular.module("app",[]);
app.controller("appCtr",function($scope){



  $scope.applyJquery=()=>{


  //jquery events
$("#userClickable #confirm").click(function(){
  
$(this).html("...")
setTimeout(() => {
$(this).hide(0).siblings("button").hide(0);
$(this).siblings("span").show(0);

$(this).html("add friend")
}, 1000);
})
//end jquery events

$("#userClickable #confirm").siblings("span").click(function(){
  $(this).html("....");
setTimeout(() => {
  $(this).hide(0);
  $(this).siblings("button").show(0);
  
  $(this).html("cancel request");
  }, 1000);
})
  }
  $scope.applyJquery();
});