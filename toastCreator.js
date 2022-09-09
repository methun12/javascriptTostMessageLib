var idn;
var timex;
let Toast=function(){
  this.setId=(id)=>this.id=id;
  this.initialize=(id,duration)=>{
    this.id=id;
    this.duration=duration;
    idn=this.id;
    timex=this.duration;
    this.duration=duration;
    		 this.styles = `
    		 #`+this.id+`{
    		 visibility: hidden;
    		 min-width: 250px;
    		 margin-left: -125px;
    		 background-color: #333;
    		 color: #fff;
    		 text-align: center;
    		 border-radius: 2px;
    		 padding: 16px;
    		 position: fixed;
    		 z-index: 1;
    		 bottom: 30px;
    		 font-size: 17px;
    		 }
    		 
    		 #`+this.id+`.show {
    		 visibility: visible;
    		 -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    		 animation: fadein 0.5s, fadeout 0.5s 2.5s;
    		 }
    		 
    		 @-webkit-keyframes fadein {
    		 from {bottom: 0; opacity: 0;} 
    		 to {bottom: 30px; opacity: 1;}
    		 }
    		 
    		 @keyframes fadein {
    		 from {bottom: 0; opacity: 0;}
    		 to {bottom: 30px; opacity: 1;}
    		 }
    		 
    		 @-webkit-keyframes fadeout {
    		 from {bottom: 30px; opacity: 1;} 
    		 to {bottom: 0; opacity: 0;}
    		 }
    		 
    		 @keyframes fadeout {
    		 from {bottom: 30px; opacity: 1;}
    		 to {bottom: 0; opacity: 0;}
    		 }
    		 `
    		 var styleSheet = document.createElement("style");
    		 styleSheet.innerText = this.styles
    		 document.head.appendChild(styleSheet)
    		 var script=`
    		 	function m(){
  var x = document.getElementById("tos");
		  x.className = "show";
		  setTimeout(function() { x.className = x.className.replace("show", ""); }, 1500);
}
    		 `+`
    		 var scrp = document.createElement("script");
    		 scrp.innerText = this.script
    		 document.head.appendChild(scrp)`
  }
  this.show=(message)=>{
    tostM(message);
  }
}
let tostM=(message)=>{
  var x = document.getElementById(idn);
      x.innerText=message;
		  x.className = "show";
		  setTimeout(function() { x.className = x.className.replace("show", ""); }, timex);}
