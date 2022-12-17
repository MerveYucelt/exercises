let formDOM = document.querySelector("#toDoForm")
formDOM.addEventListener('submit', formSubmit)

// toast fonksiyonu
let toastDOM = document.querySelector("#liveToast")
function toastFunc(className) {
    toastDOM.classList.add("toast", "show", className)
}

let newTaskDOM = document.querySelector('#task')
let toastText = document.querySelector("#toastText")
function formSubmit(event) {
    event.preventDefault()
    
    // Inputtaki veriyi okuma 
    if (newTaskDOM.value && newTaskDOM.value.trim().length) {
        addItem(newTaskDOM.value)
        newTaskDOM.value = ""
        if (toastDOM.classList.contains("error")) {
            toastDOM.classList.remove("error")
            toastFunc("success")
        }
        toastText.innerHTML = "Listeye eklendi."
        console.log("Listeye eklendi")
    } else {
        toastText.innerHTML = "Boş bilgi girişi yapılamaz."
        console.log("boş bilgi.")
        toastFunc(
            "error")
    }
}      

// Listeye yeni veri ekleme fonksiyonu
let listDOM = document.querySelector("#list")
const addItem = newTask => {
    let liDOM = document.createElement("li")
    liDOM.setAttribute("id", "listItem")
    liDOM.innerHTML = `<button id="closeBtn" type="button" onclick="delItem(this)"  class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>${newTask}`
    liDOM.classList.add(
        "list-group-item", "fade", "show"
        )
    listDOM.append(liDOM)
    return 
}

// // LocalStorage --> Düzgün çalışmıyor, düzeltilecek.
// let listItem = document.querySelectorAll("#listItem")
// let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

// const data = JSON.parse(localStorage.getItem("items"))
// listItem.forEach(litem => {itemsArray.push(litem.textContent)
//     console.log(litem.textContent)})
// localStorage.setItem("items", JSON.stringify(itemsArray))

// data.forEach(item => {
//     addItem(item)
// })


// Listeden veri silme fonksiyonu
function delItem(e) {
    e.parentNode.remove()
}

// Yapıldı işaretleme ve geri alma fonksiyonu
let listItems = document.querySelectorAll("#list") 
listItems.forEach(e => e.addEventListener('click', function onClick(event) {
    event.target.style.textDecoration = "line-through";
    event.target.style.backgroundColor = "#276678";
    if (event.target.innerHTML.includes("✓ ")) { 
    event.target.style.textDecoration = "";
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    event.target.innerHTML = event.target.innerHTML.replace("✓ ", "");
    } else { event.target.innerHTML = "✓ " + event.target.innerHTML;
    event.target.style.textDecoration = "line-through";
    event.target.style.backgroundColor = "#276678";
    event.target.style.color = "#fff";
    }
    return
}))




