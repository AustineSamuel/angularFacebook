app.service("global",function(){//return all the data facebook index page will have and keep updating the update
  const db=localStorage.getItem("fbDataBase");
  const myData=db!==null ? JSON.parse(db) : {
    navigationBars:{
     home:{
num:1,
icon:"fa fa-home",
    },
    friends:{
   num:4,//b
  icon:"fa fa-users",
     },
         
 chats:{
num:11,
icon:"fa fa-commenting",
    },
           
 notifications:{
num:41,
icon:"fa fa-bell",
    },

    tv:{
num:23,
icon:"fa fa-tv",
    },
     market: {
num:0,
icon:"fa fa-briefcase",
    },
          
  },//end navigtionsBars
//stories
stories:[
  {
text:"Your story",
sum:2,
firstImage:"images/user.png"
  },
 {
text:"Joel John",
sum:12,
firstImage:"images/user.png"
},
  {
  text:"Justina Samuel",
 sum:5,
  firstImage:"images/user.png"
  },
        
],//end stories
posts:[
{
owner:'austine samuel',
mode:'Listening to music',
content:"we all starts from 'HELLO WORLD' ",
ReactedCloseFriend:"Praise Codes",
likes:200,
comments:83,
iLiked:false,
myReaction:"fa fa-thumbs-o-up",
img:'images/user.png',
bgImage:"images/user.png",
share:20,
style:"background-color:rgb(0, 0, 0);color:white;",
commentsList:[
{
  name:'solomon mondey',
  content:"print('Hello World')",
img:'images/user.png',
time:"2hrs"
}
]
  }
]//end posts
,
//user
user:{
name:userName!=null ? userName:"Fb User",
image:'images/user.png'
}

  }


  return myData;
});


const userName=localStorage.getItem("user");
if(userName==null || userName==""){
  href("login/index.html");
}

  
