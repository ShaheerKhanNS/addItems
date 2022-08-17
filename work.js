
let form = document.getElementById('addForm');
form.addEventListener('submit',additem)
let itemList = document.getElementById('items');

itemList.addEventListener('click',removeitem);

function removeitem(e){

if(e.target.classList.contains('delete')){
    if(confirm("Are You Sure")){

        let li = e.target.parentElement;
     
        itemList.removeChild(li);
    }
}
}

function additem(e){
e.preventDefault();

let newItem = document.getElementById('item').value;

let li = document.createElement('li');
li.className ='list-group-item';
li.appendChild(document.createTextNode(newItem));
itemList.appendChild(li);

let delete1  =document.createElement('button');
delete1.className = "btn btn-danger btn-sm float-right delete";
delete1.appendChild(document.createTextNode("X"));
li.appendChild(delete1);

let edit = document.createElement('button');
edit.className = "edit";
edit.appendChild(document.createTextNode("Edit"));
li.appendChild(edit);

}

let filter = document.getElementById('abc');

filter.addEventListener('keyup',filter1);

function filter1(e){
let text = e.target.value.toLowerCase();

let items = itemList.getElementsByTagName('li');

Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
});


}