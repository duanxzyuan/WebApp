window.onload=function test(){

window.setInterval('hightlight()',1);} 

function hightlight(){
if(!document.getElementsByTagName)return false;
var fathers = document.getElementsByTagName("li");
for(var i=0;i<fathers.length;i++){
 fathers[i].onmouseover=function(){
  this.className="over";};
 fathers[i].onmouseout=function(){
  this.className="out";};
 fathers[i].onmousedown=function(){
  this.className="down";};
};
}


function see(node){
	del_ff(node.parentNode.parentNode);
	node=node.parentNode.nextSibling;
	if(node.className == "unsee"){
		if(node.style.display=="none"){
		  node.style.display="block";
		}else{node.style.display="none";}
	}
}

function Search(){
var searchContent = document.getElementById("search").value.toLowerCase();
var lists = document.getElementsByTagName("li");
for(var i=0;i<lists.length;i++){
 listContent = lists[i].textContent.toLowerCase();
 if(searchContent == listContent){
	 
	 lists[i].className="highlight";
     var list = lists[i];
	 while(list.parentNode.className == "unsee")
	 { 
		list.parentNode.style.display="block";
	    list=list.parentNode;}

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
	 
  alert(addContent);
   del_ff(node.parentNode.parentNode);
   brother=node.parentNode.nextSibling;
   if((!brother) || brother.className !="unsee"){
   var newChild = document.createElement("ul");
    newChild.setAttribute("class","unsee");
	newChild.setAttribute("style","display:none");
    node.parentNode.parentNode.insertBefore(newChild,brother);}
	    
   else{var newChild = brother;}
	 
  

  var newNode = document.createElement("li"); 
  newChild.appendChild(newNode);
  var newImg1 = document.createElement("img");
  newImg1.setAttribute("src","1.gif");
  newImg1.setAttribute("alt","choose");
  newImg1.setAttribute("onclick","see(this)");
  newNode.appendChild(newImg1);
  var text = document.createTextNode(addContent);
  newNode.appendChild(text);
  var newImg2 = document.createElement("img");
  newImg2.setAttribute("src","3.gif");
  newImg2.setAttribute("alt","add");
  newImg2.setAttribute("onclick","Add(this)");
  newNode.appendChild(newImg2);
  var newImg3 = document.createElement("img");
  newImg3.setAttribute("src","4.gif");
  newImg3.setAttribute("alt","delete");
  newImg3.setAttribute("onclick","Delete(this)");
  newNode.appendChild(newImg3);

}

}


function Delete(node){
 del_ff(node.parentNode.parentNode);
 brother=node.parentNode.nextSibling;
 var result = confirm("您确定继续吗？")
 if(result == true){
 if((!brother) || brother.className !="unsee")
	{
	 node.parentNode.parentNode.removeChild(node.parentNode);}
 else{
   node.parentNode.parentNode.removeChild(brother);
   node.parentNode.parentNode.removeChild(node.parentNode);
 }
}else{}
}

function del_ff(node){
var elem_child = node.childNodes;
for(var i=0; i<elem_child.length;i++){
if(elem_child[i].nodeType==3&&/^\s+$/.test(elem_child[i].nodeValue))
{elem_child[i].parentNode.removeChild(elem_child[i]);
}
}
}