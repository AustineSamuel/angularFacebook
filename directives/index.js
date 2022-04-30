app.directive("mynav",function(){
  return {
    
  controller:function($scope,global){

$scope.data=global;
$scope.navHeight=$("#mynav").height();


  },
  template:`
  <div id="mynav" >

<div id= "buyData"style="background:rgb(163, 0, 163);padding:5px !important;border-radius:0px !important;" class="flexBetween w3-padding">
<section>Text Only (20MB/day)</section>
<button class="w3-text-white">
 <i class="fa fa-glob"></i> buy data
</button>
</div>
<br>
<div class="flexBetween ">
  <div id="fbName" class="w3-padding bold "><span style="font-size:22px !important;">facebook</span></div>

  <div id="buttons" class="flexStart">
    <button class="fa fa-search"></button>
  <button class="fa fa-reorder"> </button>
  </div> </div>



<br>

<div id="iconList" class="flexBetween" ng-init="nav=data.navigationBars">

<div class="flexBetween" onclick="href('index.html')">
<button class="{{nav.home.icon}}"><span ng-if="nav.home.num>0">{{nav.home.num}}</span></button>
</div>



<div class="flexBetween" onclick="href('friends.html')">
<button class="{{nav.friends.icon}}"><span ng-if="nav.friends.num>0">{{nav.friends.num}}</span></button>
</div>



<div class="flexBetween">
<button class="{{nav.chats.icon}}"><span ng-if="nav.chats.num>0">{{nav.chats.num}}</span></button>
</div>


<div class="flexBetween">
<button class="{{nav.tv.icon}}"><span ng-if="nav.tv.num>0">{{nav.tv.num}}</span></button>
</div>



<div class="flexBetween">
<button class="{{nav.notifications.icon}}"><span ng-if="nav.notifications.num>0">{{nav.notifications.num}}</span></button>
</div>



<div class="flexBetween">
<button class="{{nav.market.icon}}"><span ng-if="nav.market.num>0">{{nav.market.num}}</span></button>
</div>


</div><!--icon list-->

  </div>
  <div ng-style="{minHeight:navHeight}"></div>
  `
  }
})




//stories component
app.directive("showstories",function(){
  return{
    controller:function($scope,global){
$scope.stories=global.stories;
$scope.viewStory=(e)=>{
  const el=e.target.parentElement===undefined ? e.target:e.target.parentElement;
let index=el.getAttribute("index");
if(index===null)return message("please click again"); 
 
$scope.activeStory=$scope.stories[index];
$("#viewStoryCtn").fadeIn(100);
$('#loader #load').animate({width:'100%'},6000);
$("#showStar").hide(0);
const timeout=setInterval(()=>{

  if(index<$scope.stories.length -1){
    
$('#loader #load').animate({width:'0%'},10);
index++
$('#loader #load').animate({width:'100%'},6000);
$scope.activeStory=$scope.stories[index];
$scope.$apply();
console.log(index);
  }
  else{
    clearInterval(timeout);
    console.log($scope.stories.length,index);
  }

},6000)

$scope.closeStory=()=>{
clearInterval(timeout);
console.log(this);
}
$scope.reply=()=>{
  takeInput('reply to '+e.target.getAttribute("name"),function(e){
console.log(e)
  })
}
//$scope.
const next=()=>{
  $('#loader #load').animate({width:'0%'},10);
    $('#stars').html('');
}
//end 



$("#buttons button").click(function(){
  const that=$(this);
  
  $("#showStar").html(that.html()).fadeIn();
  setTimeout(()=>{

    $("#showStar").hide(0);
  },1000);

  setTimeout(()=>{
    $('#stars').prepend(`<span>${that.html()}</span>`)
  },10);
  
  });
}//ednd function

$scope.postSomething=()=>{
  $('#newPost').show(20).children("textarea").html("");
}



function viewStory(el){
  el.animate({"width":"100%"},600);
}
getQr("#storyInput").addEventListener("change",function(e){
  const src=e.target;
 imageReader($('#storyInput'),$(""),function(src){
   $scope.stories[0].firstImage=src;
  $("#ctn"+ $scope.stories[0].sum).attr("style","background-image:url("+src+")");
 })//end imageReader evets
 });//end first evets

    },//end controller
    compile:function(){
   
    },
    template:`
    

<div class="w3-padding w3-block" id="storyCtn">

<div id="add" ng-click="postSomething()" class="flexBetween">
  <img src="images/user.png">
<div class="flexCenter w3-container "><span>What's goin on?</span></div>

<button class="fa fa-image"></button>
</div><hr>


<div class="flexBetween">
<button>Feelings :(</button>
<button>Location <i class="fa fa-map-marker w3-text-red"></i></button>
</div>


<div class="w3-block" style="height:5px;background:var(--greyL2)"></div>


<div id="storyList" class="flexStart scrollX ">

  <div class="ctn" id="addStory">
<div id="imgArea"></div>
<div id="textArea" class="w3-center">


<input type="file" id="storyInput" hidden>
  <button class="flexCenter"><label for="storyInput">+</label></button>



</div>
  </div>

  
  <div ng-repeat="story in stories track by $index" ng-click="viewStory($event)" index="{{$index}}" class="ctn" id="ctn{{story.sum}}"style="background-image:url:{{story.firstImage}}" >
    <div id="imgArea">

      <div class="flexEnd">
      <button id="total" class="flexCenter">{{story.sum}}</button>
      </div>

    </div>
    <div id="textArea" >
      <span>{{story.text}}</span>
    </div>
      </div>


</div>


</div>


<div class="flexCenter " style="background:var(--grey);border-radius:0px !important;padding:3px !important;">
<button class="w3-text-white bold w3-btn" style="background:var(--blueL1);border-radius:40px;" ng-click="postSomething()">New Post</button>
</div>

<!--end story component-->



  

<div id="viewStoryCtn" class="fixed" style="display:none;">

  <div id="content" style="background-image:url('{{activeStory.firstImage}}')">
<div id="showStar" class="flexCenter">
:(
</div>
  <!--loader-->
  <div id="loader">
    <div id="loaderEnv">
      <div id="load"></div>
      </div>
  </div><!--end loader-->
  
  <div class="flexBetween" id="veiwerNav" >
  <div class="w3-padding">
<img src="{{activeStory.firstImage}}"><span style="padding-left:5px;">{{activeStory.text}}</span>
  </div>


  <div class="w3-padding">
    <button class="w3-text-white" onclick="$('#viewStoryCtn').hide(10);$('#loader #load').animate({width:'0%'},60);
    $('#stars').html('');
    " ng-click="closeStory()">x </button>
    <button class="fa fa-ellipsis-v w3-text-white"></button>
  </div>

</div>
<!--end nav for veiwer-->
<div id="replyStory" class="flexStart scrollX">

<div>
  <div id="stars" class="flexStart"><span>kk</span>
    <span>c</span>
  <span>d</span>
  </div>

  <aside ng-click="reply(e)" name="{{activeStory.text}}" class="flexCenter w3-padding"><span>
reply to {{activeStory.text}}</span>
  </aside>
  <button class="fa fa-mail-send"></button>
</div>
<div id="buttons">
<button>b</button>
<button>c</button>
</div>


</div>
    </div>
  </div>
  






    `
  }
})

//post html js

app.directive("showposts",function(){
  return {
    controller:function($scope,global){
      $scope.posts=global.posts;
$scope.user=global.user;
      $scope.likePost=(e)=>{
        const index=e.target.getAttribute("index");
       $scope.posts[index].myReaction='fa fa-thumbs-up';
       
       $scope.posts[index].iLiked=true;
       
  $("#reactionsList").hide(0);
  document.querySelectorAll("#reactionsList").forEach((e)=>{
e.style.display="none";
  });
       return $scope.posts[index].likes+=1;
      }


      $scope.lovePost=(e)=>{
        const index=e.target.getAttribute("index")
        $scope.posts[index].myReaction='fa fa-heart';
        
       $scope.posts[index].iLiked=true;

       $("#reactionsList").hide(0);
       document.querySelectorAll("#reactionsList").forEach((e)=>{
     e.style.display="none";
       });
       return $scope.posts[index].likes+=1;
      }


      $scope.dislikePost=(e)=>{
        const index=e.target.getAttribute("index");
        
       $scope.posts[index].myReaction='fa fa-frown-o';
       
       $scope.posts[index].iLiked=true;
      
  $("#reactionsList").hide(0);
  document.querySelectorAll("#reactionsList").forEach((e)=>{
e.style.display="none";
  });
       return $scope.posts[index].likes+=1;
      }


      //like click
setTimeout(() => {
  $("#reactionsList").hide(0);
  document.querySelectorAll("#reactionsList").forEach((e)=>{
e.style.display="none";
  });

}, 1000);
      $scope.like=(e)=>{
        const index=e.target.getAttribute("index");
        const post=$scope.posts[index];
        if(post.iLiked){ $scope.posts[index].iLiked=false

        $scope.posts[index].likes-=1;

        return  $scope.posts[index].myReaction="fa fa-thumbs-o-up"
        }

        $("*[class*='postId"+index+"']").show(10);
        
      }
//like click end
      
      $scope.postComment=(e)=>{
        const index=e.target.getAttribute("index");
        const post=$scope.posts[index];
     
        takeInput("write comment..",function(e){//post here
          if(e.trim()==="")return message('cannot post empty string');

post.commentsList.unshift(
  {
    name:$scope.user.name,
    content:e,
  img:'images/user.png',
  time:"Just now"
  });
  
$scope.$apply();

        })
      }

      $scope.share=(e)=>{
        const index=e.target.getAttribute("index");
      }
    },
    template:`
    
<div class="w3-padding" id="posts">

<div id="mainPost" ng-repeat='post in posts track by $index'>
  <div id="postNav" class="flexBetween">
    <div id="user" class="flexStart">
<img width="40" height="40" src="{{post.img}}" class="w3-circle"><section class="w3-padding bold">{{post.owner}}<br>{{post.mode}}</section>
    </div>

    <button class="fa fa-ellipsis-v w3-large"></button>

  </div><!--end nav-->

<div id="postContent" class="flexCenter w3-padding" style="background-image:url('{{post.bgImagesss}}');{{post.style}}"><!--content-->
<div class="w3-center">{{post.content}}</div>
</div>

<div id="reactions">

<div id="reactionsList" class="flexStart w3-padding postId{{$index}}" >

<button class="fa fa-thumbs-o-up" ng-click="likePost($event)" index="{{$index}}"><i index="{{$index}}">Like</i></button>

<button index="{{$index}}" class="fa fa-heart" ng-click="lovePost($event)"><i index="{{$index}}">Love</i></button>

<button class="fa fa-frown-o" index="{{$index}}"ng-click="dislikePost($event)"><i index="{{$index}}">Angry</i></button>

</div>

<div class="flexStart" id="totalReactions">
<img><img><span style="padding-left:2px;" ng-if="post.likes>0"><b>{{post.ReactedCloseFriend}}</b> and {{post.likes-1}} others </span>
</div>

<div class="flexBetween" id="interactions">
<button index="{{$index}}" ng-click="like($event)" ng-style="{background:post.iLiked? 'rgb(200, 200, 255)':'',color:post.iLiked ? 'blue':''}"><i  index="{{$index}}" class="{{post.myReaction}}"></i><span  index="{{$index}}" >{{post.likes>0?post.likes:""}}</span></button>

<button index="{{$index}}"ng-click="postComment($event)"><i  index="{{$index}}" class="fa fa-comment-o"></i><span ng-if="post.commentsList.length>0">{{post.commentsList.length}}</span></button>

<button index="{{$index}}" ng-click='share($event)'><i class="fa fa-mail-forward"></i><span ng-if="post.share>0">{{post.share}}</span></button>
</div>

</div><!--end interaction-->


<div id="commentsList" class="w3-padding">

<div id="newUserComment" class="flexStart" ng-repeat="comment in post.commentsList">
  <img src='comment.img'>
  <div id="commentContentCtn">
<div id="commentContent">
    <b>{{comment.name}}</b><br>
    {{comment.content}}
</div>

<div class="flexBetween" id="commentEvents"><button>{{comment.time}}</button><button>like</button> <button>reply</button></div>
</div>

</div>

<div id="postComment" class="flexBetween" index='$index' ng-click='postComment($event)'>
  <img src='{{user.img}}'  index="{{$index}}"><div  index="{{$index}}" class="flexBetween">write comment...<i  index="{{$index}}" class="fa fa-image w3-padding"></i></div>
</div>

</div>

<div class="w3-block w3-padding w3-grey"></div>
</div><!--end main post-->

</div>




    
    `
  }
});

app.directive("postsomething",function(){
  return{
    controller:function($scope,global){
      $scope.user=global.user;
      $scope.input={
        text:'',
        style:''
      }
   $scope.postNow=()=>{
if($scope.input.text=='')return message("connot post empty string")

    const post={
      owner:$scope.user.name,
      mode:'Listening to music',
      content: $scope.input.text,
      ReactedCloseFriend:"You",
      likes:0,
      comments:0,
      iLiked:false,
      myReaction:"fa fa-thumbs-o-up",
      img:$scope.user.image,
      bgImage:"images/user.png",
      share:0,
      style:$scope.input.style!=="" ? $scope.input.style:"background-color:rgb(0, 0, 0);color:white;",
      commentsList:[
      
      ]
        }
$scope.posts.unshift(post);
$("#newPost").hide(20);
setTimeout(()=>{
  $("#reactionsList").hide(0);
  document.querySelectorAll("#reactionsList").forEach((e)=>{
e.style.display="none";
  });
message("your post published successfully!",3000,500)
$scope.save();
},1000)
   }
   
   $scope.selectStyle=(e)=>{
     const style=e.target.getAttribute("style");
    $scope.input.style=style;
   }
   
    },
    compile:function(){
$("#newPost li").click(function(){
  message("This feature not added , contact Austine Samuel and get it fast");
});
$("#newPost").hide(0)
    },
    template:`
    <div id="newPost" class="fixBottom">
  
  <div class="flexBetween w3-padding" id="newPostNav">
    <div>
    <button onclick="$('#newPost').hide(20)" class="fa fa-arrow-left w3-padding"></button><span class="w3-text-grey bold">Create Post</span>
    </div>
  <button id="postBtn" ng-click="postNow()">POST</button>
  </div><!--end new post nav-->
  <hr>
  
  <div id="postUser" class="flexStart w3-padding">
  <img width="40" src="images/user.png" height="40" class="w3-circle">
  <div class="w3-padding">
    <b>{{user.name}}</b>
    <br><button><i class="fa fa-globe"></i>public<i class="fa fa-caret-down"></i></button>
  </div>
  </div>
  <hr>
  <textarea ng-model='input.text' style="{{input.style}}">
  
  </textarea>
  
  <hr>
  <div id="postType" class="flexStart">
  <div ng-click='selectStyle($event)'style="background:rgb(0, 0, 0);color:white;"></div>
  
  <div ng-click='selectStyle($event)' style="background:rgb(0, 146, 190);color:white;"></div>
  <div ng-click='selectStyle($event)' style="background:rgb(238, 227, 227);color:black;"></div>

  <div  ng-click='selectStyle($event)' style="background:radial-gradient(rgb(255, 0, 217),rgb(112, 145, 255));
  color:rgb(0, 0, 0);"></div>


  <div  ng-click='selectStyle($event)' style="  background:radial-gradient(rgb(57, 172, 255),rgb(202, 205, 215));
  color:rgb(0, 0, 0);"></div>

  <div  ng-click='selectStyle($event)' style="  background:linear-gradient(rgb(57, 172, 255),rgb(202, 205, 215));
  color:rgb(0, 0, 0);"></div>
  
  <div  ng-click='selectStyle($event)' style=" background:linear-gradient(rgb(255, 215, 57),rgb(202, 205, 215));
  color:rgb(0, 0, 0);"></div>
















  </div><!--end post type-->
  
  <div class="w3-padding">
  <li><i class="fa fa-users"></i>Tag friends</li>
  <li><i class="fa fa-map-marker"></i>Add Location</li>
  <li><i class="fa fa-smile-o"></i>add feelings/activities</li>
  <li><i class="fa fa-question"></i>Host QA</li>
  
  </div>
  
  <div class="w3-padding">
  <button class="w3-btn w3-round w3-blue bold w3-block" ng-click="postNow($event)">POST</button>
  </div>
  
  
    </div>
    
    
        `
  }
})



