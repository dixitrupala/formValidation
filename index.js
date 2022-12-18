
		//AddBooking Funtion
function addBooking(){	

	//Onsubmit blank error Show
	let roomNubmer = document.getElementById("roomNo").value.trim();
	if(roomNubmer == ""){
		document.getElementById("roomError").innerHTML = "*Please Filed Your Input!";
	} else {
		document.getElementById("roomError").innerHTML = "";
	}
	let perName = document.getElementById("personName").value.trim();
	if(perName == ""){
		document.getElementById("personError").innerHTML = "*Please Filed Your Input!";
	} else {
		document.getElementById("personError").innerHTML = "";
	}
	let bookingDate = document.getElementById("bookDate").value.trim();
	if(bookingDate == ""){
		document.getElementById("bookingError").innerHTML = "*Please Filed Your Input!";
	} else {
		document.getElementById("bookingError").innerHTML = "";
	}
	let totPerson = document.getElementById("totalPerson").value.trim();
	if(totPerson == ""){
		document.getElementById("totalError").innerHTML = "*Please Filed Your Input!";
		
	} else {
		document.getElementById("totalError").innerHTML = "";
	}
	

    if(roomNubmer!="" && perName!="" && bookingDate!="" && totPerson!="") {
	/*let detail = document.getElementById("personDetail").insertRow();
	
	let formDetail = detail.insertCell();
	formDetail.innerHTML = roomNo.value;
	
	let personDetail = detail.insertCell();
	personDetail.innerHTML = personName.value;
	
	let bookDetail = detail.insertCell();
	bookDetail.innerHTML = bookDate.value;
	
	let totalPDetail = detail.insertCell();
	totalPDetail.innerHTML = totalPerson.value;
	
	let action = detail.insertCell();
	action.innerHTML = 
	`<div class="btn"><button type="button" class="btnDelete" onclick="onDelete(this)">Delete</button>
	<button type="button" class="btnEdit" onclick="onEdit(this)">Edit</button></div>`;*/
	
	
	
	//Dynamic 
	let roomN = document.getElementById("personDetail").value;
	roomN.innerHTML +=
	`<tr>
		<td>${roomNubmer}</td>
		<td>${perName}</td>
		<td>${bookingDate}</td>
		<td>${totPerson}</td>
		<td>
		<div class="btn"><button type="button" class="btnDelete" onclick="onDelete(this)">Delete</button>
		<button type="button" class="btnEdit" onclick="onEdit(this)">Edit</button></div>
		</td>
	</tr>`;
	
	btnReset();
    }
}

	//Delete Function
function onDelete(e){
	 if (confirm('Are you sure to delete this record ?')) {
        e.parentElement.parentElement.parentElement.remove();
		//btnReset();
    }
}

	//ResetForm Function
function btnReset(){
	
		document.getElementById("roomNo").value = "";
		document.getElementById("personName").value = "";
		document.getElementById("bookDate").value = "";
		document.getElementById("totalPerson").value = "";
		
		document.getElementById("btnButton").innerHTML = "Submit";
		
	if(roomNo == "" && personName == "" && bookDate == "" && totalPerson == ""){
		
		document.getElementById("roomNo").value = "";
		document.getElementById("personName").value = "";
		document.getElementById("bookDate").value = "";
		document.getElementById("totalPerson").value = "";
		
		document.getElementById("btnButton").innerHTML = "Submit";
	
	}else{
		document.getElementById("roomError").innerHTML = "";
		document.getElementById("personError").innerHTML = "";
		document.getElementById("bookingError").innerHTML = "";
		document.getElementById("totalError").innerHTML = "";
	}
	
}

	//OnEdit Function
function onEdit(td){
	console.log("Edit");
	editRow = td.parentElement.parentElement.parentElement;
	console.log(editRow);	

		document.getElementById("roomNo").value = editRow.children[0].innerHTML;
		document.getElementById("personName").value = editRow.children[1].innerHTML;
		document.getElementById("bookDate").value = editRow.children[2].innerHTML;
		document.getElementById("totalPerson").value = editRow.children[3].innerHTML;

		document.getElementById("btnButton").innerHTML = "Update";
		document.getElementById("btnButton").setAttribute("onclick","updateData()");
		
	let editRoom = document.getElementById("roomNo").value;
	if(editRoom == ""){
		document.getElementById("roomError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("roomError").innerHTML = "";
	}
	let editName = document.getElementById("personName").value;
	if(editName == ""){
		document.getElementById("personError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("personError").innerHTML = "";
	}
	let editDate = document.getElementById("bookDate").value;
	if(editDate == ""){
		document.getElementById("bookingError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("bookingError").innerHTML = "";
	}
	let editPerson = document.getElementById("totalPerson").value;
	if(editPerson == ""){
		document.getElementById("totalError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("totalError").innerHTML = "";
	}	
		
		
}

	//Update Data
function updateData(){	
	console.log("Hello",editRow.children[0],"lll");
	
	let updateRoom = document.getElementById("roomNo").value.trim();
	if(updateRoom == ""){
		document.getElementById("roomError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("roomError").innerHTML = "";
	}
	let updateName = document.getElementById("personName").value.trim();
	if(updateName == ""){
		document.getElementById("personError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("personError").innerHTML = "";
	}
	let updateDate = document.getElementById("bookDate").value.trim();
	if(updateDate == ""){
		document.getElementById("bookingError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("bookingError").innerHTML = "";
	}
	let updatePerson = document.getElementById("totalPerson").value.trim();
	if(updatePerson == ""){
		document.getElementById("totalError").innerHTML = "*Please Filed Your Input!";
	}else{
		document.getElementById("totalError").innerHTML = "";
	}
	
	
	if(updateRoom != "" && updateName != "" && updateDate != "" && updatePerson != ""){
		document.getElementById("btnButton").innerHTML = "Submit";
		
		editRow.children[0].innerHTML = document.getElementById("roomNo").value;
		editRow.children[1].innerHTML = document.getElementById("personName").value;
		editRow.children[2].innerHTML = document.getElementById("bookDate").value;
		editRow.children[3].innerHTML = document.getElementById("totalPerson").value;
			
		document.getElementById("btnButton").setAttribute("onclick","addBooking()");
		btnReset();
	}
}

	//
function myFunction(value) {
	let data = value.value.trim();
	  if(data == ""){
		  document.getElementById(`${value.name}`).innerHTML = "*Please Filed Your Input!";
	  }else{
		  document.getElementById(`${value.name}`).innerHTML = "";
	  }
}




