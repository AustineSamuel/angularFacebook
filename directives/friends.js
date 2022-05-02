app.directive("friendsrequests",function(){
  return {
    controller:function($scope,global){
      
$scope.freindsRequests=global.friends.request;
setTimeout(()=>{
$scope.applyJquery();
},100);

$scope.decline=(e)=>{
  const index=e.target.getAttribute("index");
  $scope.freindsRequests.splice(index,1);
  global.freindsRequests.splice(index,1);
  save();
}

    },
    compile:function($scope){
      console.log("compile");

    },
    template:`



    <div id="w3-padding" class="friendsNav">
    
    <div class="flexBetween w3-padding">
      <b class=" bold w3-xlarge">Freinds</b>
    <button class="fa fa-search bold"></button>
    </div>
    <div id="suggestion" class="w3-padding">
    <button id="tag">Suggestion</button>
    <button id="tag">Your friends</button>
    
    </div>
    
    </div>
    
    
    <hr>
    
    <div id="friendsRequests">
    <div class="flexBetween w3-padding"><b>Friends Requests</b><button class="w3-text-blue">See all</button></div>
    <br>
    
    <div id="list" class="w3-padding" >
    
    <div id="newRequest" class="flexStart" ng-repeat="request in freindsRequests track by $index">
      <img width="100"  height="100" class="w3-circle w3-border" src="{{request.image}}">
      <div>
        <div class="flexBetween " style="padding-left:16px;"><b>{{request.name}}</b><span class="w3-text-blue">{{request.date}}</span></div>
    
    <div class="flexStart"> <img ng-repeat="imgsrc in request.firstMutualFriendsImages" width="20"height="20" class="w3-circle" src="{{imgsrc}}">
    <span style="padding-left:5px;"> {{request.mutualFriendsList}} mutual friends</span></div>
    
    <div id="userClickable" class="flexRound">
      <span class="w3-padding" style="display: none"> You are now friends</span>
      <button id="confirm" class="w3-btn">Confirm</button><button index="{{$index}}" ng-click="decline($event)" id="decline" class="w3-btn">decline</button>
    
    </div>
    
      </div>
      
    </div><!--end new requests-->
    
    <hr>
    </div>
    <div class="w3-padding">
    <button id="seeAll" class="w3-block">See all</button>
    </div>
    
    </div>
    
    
    
    <!--end friends request list-->
    `
  }
});




//<!--show all friends to add-->
app.directive("friendslist",function(){
  return {
    controller:function($scope,global){
$scope.friendsList=global.friends.list;

    },
    template:`
    
<div class="friendsList w3-padding">

<b class="bold w3-padding">Poeple You May Know</b>

<br><hr><br>
<div ng-repeat="friend in friendsList">
<div class="flexStart">
  <img width="100" height="100" src="{{friend.image}}" class="w3-circle">

  <div>

    <div style="padding-left:16px;"><b>{{friend.name}}</b></div>

<div class="flexStart"><img ng-repeat="imgsrc in friend.firstMutualFriendsImages" width="20"height="20" class="w3-circle" src="{{imgsrc}}"><span style="padding-left:5px;"> {{friend.mutualFriendsList}} mutual friends</span></div>

<div id="userClickable" class="flexStart">
  <span style="display:none;">
  <button class="flexStart w3-block w3-round w3-light-grey" style="min-width:max-content;">cancel request</button>
  </span>

  <button id="confirm" class="w3-btn w3-xsmall">add friend</button><button id="decline" class="w3-btn  w3-xsmall">remove</button>

</div>



  </div>

</div><hr></div>

</div>
    `
  }
})