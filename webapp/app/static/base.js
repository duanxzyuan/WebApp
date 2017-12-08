window.onload=function test(){

window.setInterval('hightlight()',0.5);} ;

function hightlight(){
if(!document.getElementsByTagName)return false;
var fathers = document.getElementsByTagName("li");
for(var i=0;i<fathers.length;i++){

 fathers[i].onmouseover=function(){
  
  this.className="over";
  del_ff(this);
  this.lastChild.style.display="block";};
 fathers[i].onmouseout=function(){
  
  this.className="out";
  del_ff(this.parentNode);
  this.lastChild.style.display="none";};
 fathers[i].onmousedown=function(){
  this.className="down";};
}
}


function Search(){
var searchContent = document.getElementById("search").value.toLowerCase();
var lists = document.getElementsByTagName("li");
for(var i=0;i<lists.length;i++){
    del_ff(lists[i]);
	if(lists[i].parentNode.className == "unsee" )
        listContent =lists[i].textContent.toLowerCase();
	else{
        listContent = lists[i].firstChild.nodeValue.toLowerCase();}
   if(searchContent == listContent){
	   lists[i].className="highlight";
       var list = lists[i];
	   while(list.parentNode.className == "unsee")
	    {
		list.parentNode.style.display="block";
	    list=list.parentNode.parentNode;}

	    var found = true;
 }
}
if(found != true){
 alert("Please try again.");
}
}

function Add(node){
var addContent= prompt("添加标签：");
if(addContent=="")
	{alert("请输入标签名字");}
else if(addContent==null){
}else{
	 
   
    var newNode = document.createElement("li");
  newNode.setAttribute("class","nav-li");
  var text = document.createTextNode(addContent);
  newNode.appendChild(text);
  var newImg3 = document.createElement("img");
  newImg3.setAttribute("src","../static/4.gif");
  newImg3.setAttribute("alt","delete");
  newImg3.setAttribute("onclick","Delete(this)");
  newNode.appendChild(newImg3);
	  var newNode2 = document.createElement("br");
  newNode.appendChild(newNode2);
	  node.parentNode.lastChild.appendChild(newNode);
   }
	 

}




function add(){
 var addContent= prompt("添加标签：");
if(addContent=="")
	{alert("请输入标签名字");}
else if(addContent==null){
}else{
	 
	var navul= document.getElementById("navul");
  var newNode = document.createElement("li");
    newNode.setAttribute("class","");
	var text = document.createTextNode(addContent);
  newNode.appendChild(text);
  var newImg2 = document.createElement("img");
  newImg2.setAttribute("src","../static/3.gif");
  newImg2.setAttribute("alt","add");
  newImg2.setAttribute("onclick","Add(this)");
  newNode.appendChild(newImg2);
  var newImg3 = document.createElement("img");
  newImg3.setAttribute("src","../static/4.gif");
  newImg3.setAttribute("alt","delete");
  newImg3.setAttribute("onclick","Delete(this)");
  newNode.appendChild(newImg3);

   var newChild = document.createElement("ul");
    newChild.setAttribute("class","unsee");
	newChild.setAttribute("style","display:none");
	newNode.appendChild(newChild);
    navul.appendChild(newNode);
   }}






function Delete(node){
 del_ff(node.parentNode.parentNode);
 var result = confirm("您确定继续吗？")
 if(result == true){
	 node.parentNode.parentNode.removeChild(node.parentNode);}
 else{}
}

function del_ff(node){
var elem_child = node.childNodes;
for(var i=0; i<elem_child.length;i++){
if(elem_child[i].nodeType==3&&/^\s+$/.test(elem_child[i].nodeValue))
{elem_child[i].parentNode.removeChild(elem_child[i]);
}
}
}