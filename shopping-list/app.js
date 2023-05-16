const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


function onAddItemSubmit(e) {
    e.preventDefault();
    
    const newItem = itemInput.value;
    // validation form input 
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

     addItemToDOM(newItem);
    // console.log(button);

    checkUI();
    itemInput.value = '';
}

function addItemToDOM(item){
    //   create list item 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
}

// function to add local storage
function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
       itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
     itemsFromStorage.push(item);       
    //  convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

// create function button 
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark");
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
      if(confirm('Are you sure ?')){
        e.target.parentElement.parentElement.remove();
        checkUI();
      }
    }
}


function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}
// filter items 
function  filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    console.log('text :   ',text);
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1){
            console.log(true);
            item.style.display = 'flex';
        }else{ 
            item.style.display = 'none';
        }
        // console.log(itemName);
    }); 
    
}

// check ui list
function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
     clearBtn.style.display = 'none';
     itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}






// event listeners 
itemForm.addEventListener('submit',onAddItemSubmit);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItems);
itemFilter.addEventListener('input',clearItems);



checkUI();