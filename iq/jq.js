var img_array=Array.from(document.querySelectorAll('.continer img'));
var slide_count=img_array.length;
var current_slide=1;
var slide_number=document.getElementById("slid-number");
var next_button=document.getElementById("next");
var prev_button=document.getElementById("prev");
var enter=document.getElementById("enter");
var text=document.getElementById("text");
prev_button.onclick=prev_slide;
next_button.onclick=next_slide;

//creat ul and give id to ul
var padgination_Element_ul=document.createElement("ul");
padgination_Element_ul.setAttribute("id","padgination");
//creat li and give id to li
for(var i=1;i<=slide_count;i++)
{
var padgination_item_li=document.createElement("li");
padgination_item_li.setAttribute("data-index",i);
padgination_item_li.appendChild(document.createTextNode(i));
padgination_Element_ul.appendChild(padgination_item_li);
}
//add ul in indicators
document.getElementById("indicators").appendChild(padgination_Element_ul);

//get the new created ul
var padgination_created_ul=document.getElementById("padgination");
//trigger thecheker
var bolets_array=Array.from(document.querySelectorAll("#padgination li"));
for(var i=0;i<bolets_array.length;i++)
    {
      bolets_array[i].onclick=function()
      {
          current_slide=parseInt(this.getAttribute("data-index"));
         thecheker(); 
      }
    }
thecheker();
//function next and prev
function prev_slide()
{
    if(current_slide==1)
        {
            alert("stop prev")
        }
    else
        {
    current_slide--;
        }
    thecheker();
}
function next_slide()
{
    if(current_slide==slide_count)
        {
            alert("stop next")
        }
    else
        {
    current_slide++;
        }
    thecheker();
}

//function cheker
function thecheker()
{   

  //set slide number
  slide_number.textContent="slide #"+(current_slide)+"of "+(slide_count);
  
  //remove all active from img
    remove_active();
    
  //set active on current classs
  img_array[current_slide-1].classList.add("active");
    
    remove_active_li();
  //set active on pollet
    padgination_created_ul.children[current_slide-1].classList.add("active");
    
  //set disabled on button prev
    if(current_slide==1)
{
        prev_button.classList.add("disable");
}
else
    {
      prev_button.classList.remove("disable");  
    }
    //set disabled on button prev
    if(current_slide==slide_count)
{
        next_button.classList.add("disable");
}
else
    {
      next_button.classList.remove("disable");  
    }
}

//function for remove active
function remove_active()
{
//loop for remove active from img
    img_array.forEach(function(img){
    img.classList.remove("active");                
    }); 
}

//function for remove active from polets
function remove_active_li()
{
 bolets_array.forEach(function(li){
  li.classList.remove("active");   
 });   
}


