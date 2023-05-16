const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');




function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // validation form input 
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    
    li.appendChild(button);
    itemList.appendChild(li);
    console.log(button);
    itemInput.value = '';
}


// create function button 
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = document.createElement('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;

}

// create function Icon button
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// remove items 
function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}


function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}
// event listeners 
itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItems);