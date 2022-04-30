if(getQr("canvas")==null){
  throw "nop canvas found this script can only be use in html container canvas element";
}

const canvas=getQr("canvas");
const ctx=canvas.getContext("2d");
canvas.height=innerHeight;
canvas.width=innerWidth;
getQr("body").style.padding=0;
getQr("body").style.margin=0;
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
//this script set the canvcas for everything needed