let t = document.getElementById("show");
console.log(t);
cnt = 0; let w = document.getElementById("tasks"); console.log(w);
let input=document.getElementById("task");

// t.addEventListener('click',show());

function clear_task() {
    console.log(localStorage)
    localStorage.clear();
    let i=document.getElementById("task")
    console.log(i.value)
    i.value=""
    w.style.display = "none";
}
function get() {
    let item = document.getElementById("task").value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push(item);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push(item);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    add()
}

function add() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }


    let l = itemJsonArray.length; str = "";
    itemJsonArray.forEach(element => {
        str += '<div class="form-check" id="num"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="task_no" for="flexCheckDefault">' + element + '</label></div><div class="underline"></div>'
    });
    w.innerHTML = str;
    w.style.display="block";
    input.value="";
}
function del() {
    let n = document.querySelectorAll("#num")
    let c = document.querySelectorAll("#flexCheckDefault");
    let value = [];
    c.forEach((checkbox, index) => {
        console.log(checkbox, index)
        if (checkbox.checked == true) {
            value.push([checkbox, index]);
        } 
    })
        value.forEach(element => {
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            // Delete itemIndex element from the array
            itemJsonArray.splice(element[1], 1);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            add()
        })
   
}

