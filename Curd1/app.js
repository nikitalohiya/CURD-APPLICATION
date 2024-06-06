var selectedRow = null;

// show alert
function showAlert(message,className){
    const div = document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(()=> document.querySelector(".alert").remove(),3000);
}


// clear all fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#phonenumber").value = "";
    document.querySelector("#city").value = "";
}

// add data

document.querySelector("#student-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    // get form value
 const firstName = document.querySelector("#firstName").value;
 const lastName = document.querySelector("#lastName").value;
 const phonenumber = document.querySelector("#phonenumber").value;
 const city = document.querySelector("#city").value;

// validate
if(firstName == "" || lastName == "" || phonenumber == "" || city == ""){
    showAlert("Please fill the fields","danger");
}
else{
    if(selectedRow == null){
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${phonenumber}</td>
        <td>${city}</td>
        <td>
        <a href="#" class="btn btn-primary btn-sm edit">Edit</a>
         <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Data inserted", "success");
    }
    else{
        selectedRow.children[0].textContent = firstName;
        selectedRow.children[1].textContent = lastName;
        selectedRow.children[2].textContent = phonenumber;
        selectedRow.children[3].textContent = city;
        selectedRow = null;
        showAlert("Data Edited" , "info");
    }

    clearFields();

}


});

// edit data
 document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target;
   if(target.classList.contains("edit")){
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value = selectedRow.children[0].textContent;
    document.querySelector("#lastName").value = selectedRow.children[1].textContent;
    document.querySelector("#phonenumber").value = selectedRow.children[2].textContent;
    document.querySelector("#city").value = selectedRow.children[3].textContent;
   }
 });




// delete
document.querySelector("#student-list").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted","danger")
    }
});