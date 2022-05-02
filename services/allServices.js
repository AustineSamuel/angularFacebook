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
firstImage:images[14]
  },
 {
text:"Joel John",
sum:12,
firstImage:images[15]
},
  {
  text:"Justina Samuel",
 sum:1,
  firstImage:images[16]
  }    
  ,
  {
  text:"Smart developer",
 sum:12,
  firstImage:images[3]
  }  ,
  {
  text:"NodeJsl",
 sum:4,
  firstImage:images[16]
  }  ,
  {
  text:"Only me",
 sum:6,
  firstImage:images[16]
  }  
],//end stories





posts:[
  {
    owner:"Samson Monday",
    mode:"feeling blessed",
    content:"PHP vs Nodejs which one is the backend?",
    ReactedCloseFriend:"Nodejs dev",
    likes:230,
    comments:13,
    iLiked:false,
    myReaction:"fa fa-thumbs-o-up",
    img:images[5],
    bgImage:"images/user.png",
    share:2,
    style:"background-color:rgb(0, 0, 0);color:white;",
    commentsList:[
    {
      name:'NodeJS',
      content:"both are very good but i prefer PHP",
    img:images[3],
    time:"1hrs"
    }
    ]
      },
    {
      owner:"Austine Samuel",
      mode:"feeling happy",
      content:"How to do someone pass turing code challages  in  peace?",
      ReactedCloseFriend:"Pro Coder",
      likes:550,
      comments:83,
      iLiked:false,
      myReaction:"fa fa-thumbs-o-up",
      img:images[11],
      bgImage:"images/user.png",
      share:120,
      style:"background-color:rgb(0, 0, 0);color:white;",
      commentsList:[
      {
        name:'Pro Coder',
        content:"i don't like working for turing i prefer freelancing",
      img:images[2],
      time:"2hrs"
      },
      {
        name:'John Joel',
        content:"You really need to be expert on problem solving algorithm && data structure then you are goo to go!! ",
      img:images[2],
      time:"2hrs"
      }

      ]
        
      }
  ,      {
    owner:"Shedenbright ",
    mode:"feeling blessed",
    content:"is pexelstore.com the best website to buy and sell your design?",
    ReactedCloseFriend:"Austine Samuel",
    likes:187,
    comments:53,
    iLiked:false,
    myReaction:"fa fa-thumbs-o-up",
    img:images[7],
    bgImage:"images/user.png",
    share:24,
    style:"background-color:rgb(0, 0, 0);color:white;",
    commentsList:[
    {
      name:'Austine Samuel',
      content:"Yes i think is one o the best",
    img:images[14],
    time:"5hrs"
    }
    ]
      
    }

,      {
  owner:"socket programmer",
  mode:"feeling crazy",
  content:"i can build any software withing few days",
  ReactedCloseFriend:"Nodejs dev",
  likes:200,
  comments:83,
  iLiked:false,
  myReaction:"fa fa-thumbs-o-up",
  img:images[12],
  bgImage:"images/user.png",
  share:20,
  style:"background-color:rgb(0, 0, 0);color:white;",
  commentsList:[
  {
    name:'NodeJS',
    content:"both are very good but i prefer PHP",
  img:images[2],
  time:"1hrs"
  }
  ]
    
  }


  


]//end posts
,
//user
user:{
name:userName!=null ? userName:"Fb User",
image:iconLink
},
friends:{
  list:[
{
name:"Samson monday",
image:"",
mutualFriendsList:33,
firstMutualFriendsImages:[1,2],
profileLink:null
}
  ],

  request:[
{

  name:"Samson monday",
  image:image[13],
  mutualFriendsList:33,
  firstMutualFriendsImages:[1,2],
  date:"3d",
  profileLink:null
}
  ]
}
  }



  
  function pushList(){
    console.log(myData.user)
    names.forEach((e,i)=> {
    myData.friends.list.push({
      name:e,
      image:images[i],
      mutualFriendsList:33,
      firstMutualFriendsImages:images[images[Math.floor(Math.random()*images.length-1)],images[Math.floor(Math.random()*images.length-1)]],
      profileLink:null
      })
    });
}
const names=["smart developer","Spenzy","mma John","NoLife","favour samuel","Samson Freedom","high ways","small doctor","Only me"];
function pushRequest(){
names.slice(3,6).forEach((e,i)=>{
  myData.friends.request.push({
    name:e,
    image:images[i],
    mutualFriendsList:Math.floor(Math.random()*33),
    firstMutualFriendsImages:images[images[Math.floor(Math.random()*images.length-1)],images[Math.floor(Math.random()*images.length-1)]],
    date:"3d",
    profileLink:null
  });
})
}
pushList()
pushRequest()
/*
{
owner:'austine samuel',
mode:'Listening to music',
content:"we all starts from 'HELLO WORLD' ",
ReactedCloseFriend:"Praise Codes",
likes:200,
comments:83,
iLiked:false,
myReaction:"fa fa-thumbs-o-up",
img:'images/user.',
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
  }*/

  return myData;
});


const userName=localStorage.getItem("user");
if(userName==null || userName==""){
  href("login/index.html");
}
const iconLink="images/fbUser.png";
  const images=["https://i.imgur.com/aVMfsM1.jpg", "https://i.imgur.com/kDb8oUO.jpg","https://i.imgur.com/lqBefwD.jpg","https://i.imgur.com/uur6jIm.png","https://i.imgur.com/S2ePMki.jpg","https://i.imgur.com/4ezTQbl.jpg","https://i.imgur.com/BFuNPvP.jpg","https://i.imgur.com/BzVMgpN.jpg","https://i.imgur.com/CfeWNgT.jpg","https://i.imgur.com/FlREWaU.jpg","https://i.imgur.com/GiARP0h.jpg","https://i.imgur.com/MRvZ7Ak.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/QFC8Izu.jpg","https://i.imgur.com/QZnHKVZ.jpg","https://i.imgur.com/Ww0K6t3.jpg","https://i.imgur.com/Y84z4b5.jpg","https://i.imgur.com/YD0j6lm.jpg","https://i.imgur.com/ZX4Z5Ji.jpg","https://i.imgur.com/bN6uW4s.jpg","https://i.imgur.com/l7Mpnop.jpg","https://i.imgur.com/okI2Hrx.jpg","https://i.imgur.com/pXmrjTg.jpg","https://i.imgur.com/wBAQU5Z.jpg","https://i.imgur.com/ySAAqDG.jpg","https://i.imgur.com/zxkReVx.jpg"]
  let image=images

