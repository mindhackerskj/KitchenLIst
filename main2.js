let kitechenInput=document.getElementById("kitchen-input");
let addbtn=document.getElementById("add-btn");
let kitchenList=document.getElementById("kitchen-items-list");
let array=[];

getLocal();

function buildUi(){
    kitchenList.textContent='';
    input.forEach((element) => {
        let li = document.createElement("li");
    let lspan = document.createElement("span");
    li.appendChild(lspan);
    lspan.innerText=element;
    
    li.style.cssText=" animation-name: slidein;";
    kitchenList.appendChild(li);
    kitechenInput.value="";
    kitechenInput.focus(); //To focus cursor



    
    let trashT = document.createElement("i");
    trashT.classList.add("fas","fa-trash");
    li.appendChild(trashT);
    


    let editT = document.createElement("i");
    editT.classList.add("fas","fa-edit");
    li.appendChild(editT);
    });
   
    
}

//add to local storage
function addLocal(){
    let input = kitechenInput.value;
    localStorage.setItem("Kitcheninput",JSON.stringify(array)); 
 
    
    }
    
//get from local storage
function getLocal(){
    if(localStorage.getItem("Kitcheninput")){
     input = JSON.parse(localStorage.getItem("Kitcheninput"));
     
     buildUi();
    }
    }



function addItem(){
    let input = kitechenInput.value;
    array.push(input);
    
 
 addLocal();

 getLocal();


}

function deleteItem(event){
    console.log(event.target.classList[0]);
    if(event.target.classList[1] === 'fa-trash'){
      let item = event.target.parentElement;
      item.classList.add("slideOut");
      item.addEventListener("transitionend",function(){
        item.remove();

      })
     
    }

}

function editItem(event){
    console.log(event.target.classList[1]);
    if(event.target.classList[1] === 'fa-edit'){
        let newValue = prompt("Change name:");
        let item = event.target.parentElement;
        let lspan = item.querySelector('span');
        lspan.innerText = newValue;

      
     
    }

}

addbtn.addEventListener("click",addItem);
kitchenList.addEventListener("click",deleteItem);
kitchenList.addEventListener("click",editItem);




