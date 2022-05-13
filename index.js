const btn = document.querySelector('#notebutton')
 let delbuttons = document.querySelectorAll(".delbutton");
const txt = document.querySelector('textarea')
const output =document.querySelector('.emptylist')
const notelist = document.querySelector('#notelist')
let counter =1;




function dosomthing(){
    const txt = document.querySelector('textarea')
    let newdiv = document.createElement("div");
    newdiv.setAttribute('class',"newnote")
    newdiv.setAttribute('tag',`${counter}`)
    let newheading = document.createElement('h3')
    newheading.innerText =Date();
    newdiv.appendChild(newheading);
    let newp = document.createElement('p')
    newp.innerText = txt.value
    newdiv.appendChild(newp)
    
    let del = document.createElement("button")
    del.setAttribute("class","delbutton")
    del.setAttribute('tag',`${counter}`)
    del.innerText = "Delete"
    
    newdiv.appendChild(del)
    del.onclick = function(){
        console.log("working?")
        this.parentNode.remove()
    }
    notelist.appendChild(newdiv)
    txt.value= "";
    output.remove()
    counter ++;
    delbuttons = document.querySelectorAll(".delbutton");
 
    

 
  

   
    
   

}
 function del(){
     console.log()
 }

 btn.onclick = dosomthing;






   




