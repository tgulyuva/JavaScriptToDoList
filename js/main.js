function addElement() {
    var input = document.getElementById("task").value;
    console.log(input);
    var domLI= document.createElement("li");
    var txt = document.createTextNode(input);
    domLI.appendChild(txt);
    if (input==="") {
        alert("Please enter to do")
    }else{
        document.getElementById("list").appendChild(domLI)
    }
    document.getElementById("task").value="";
    var spanDom = document.createElement("span");
    spanDom.className="delete";
    var txtSpan = document.createTextNode("Delete");
    spanDom.appendChild(txtSpan);
    domLI.appendChild(spanDom);
    for (taskNo = 0; taskNo < deleteItem.length; taskNo++) {
        deleteItem[taskNo].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        };
    }
}

var deleteItem = document.getElementsByClassName("delete");
var taskNo;
for (taskNo = 0; taskNo < deleteItem.length; taskNo++) {
    deleteItem[taskNo].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (check) {
    if (check.target.tagName === "LI") {
        check.target.classList.toggle("checked");
    }
    },
    false
);
