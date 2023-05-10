const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('.grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// edite option 
let editeElement;
let editeFLag = false;
let editeID = "";

// submit form 
form.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearItems);
// functions

function addItem (e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value&& !editeFLag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
    //  add id 
    const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttribute(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;

      const deleteBtn = element.querySelector('.delete-btn');
      const editeBtn = element.querySelector('.edite-btn');
      deleteBtn.addEventListener('click',deleteItem);
      editeBtn.addEventListener('click',editeItem);
    //   append child
    list.appendChild(element);
    
    // display alert 
    displayAlert("item added to the list","success");
    // show container 
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id,value);
    // set back  to deaful 
    setBackToDefault();

    }else if(value&&editeFLag){
    editeElement.innerHTML = value;
    displayAlert("value changed","green");
    setBackToDefault();
    }else{
      displayAlert("please enter value","danger")
    }
}



// display alert 
function displayAlert(text , action){
      alert.textContent = text;
      alert.classList.add(`alert-${action}`);
}
// remove alert element
setTimeout(function(){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
},1000);


// clear Items


function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if(items.length > 0){
      items.forEach(function (item){
        list.removeChild(item);
      });
  }
  container.classList.remove("show-container");
  displayAlert("empty list","danger");
  setBackToDefault();
}

// edite function
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove("show-container");
  }
  displayAlert("item removed","danger");
  setBackToDefault();
  // remove from local storage 
  removeFromLocalStorage(id);

}


function editeItem(e){
  console.log("edited item");
  const element = e.currentTarget.parentElement.previousElementSibling;
  // set form value 
  grocery.value = editeElement.innerHTML;
  editeFLag = true;
  editeID = element.dataset.id;
  submitBtn.textContent = "edite";
}


// set back to deafult
function setBackToDefault(){
    grocery.value ="";
    editFlag=false;
    editId="";
    submitBtn.textContent="submit";
}






function addToLocalStorage(id,value){
    console.log("Add to local storage");
}



function removeFromLocalStorage(id){

}



