
var name_input = document.getElementById("name_input")
var age_input = document.getElementById("age_input")
var course_input = document.getElementById("course_input")
var email_input = document.getElementById("email_input")
var table_two = document.getElementById("table_two")

function save(){

    var gender_radio = document.querySelector('input[name="gender"]:checked')

    if(!gender_radio){
        alert("Select gender")
        return
    }

    var gender = gender_radio.value

    var tr = document.createElement("tr")

    tr.innerHTML = `
     <td>${name_input.value}</td>
     <td>${age_input.value}</td>
     <td>${course_input.value}</td>
     <td>${gender}</td>
     <td>${email_input.value}</td>
     <td><button onclick="deleteRow(event)">Delete</button></td>
    `

    table_two.append(tr)

    // clear inputs
    name_input.value=""
    age_input.value=""
    course_input.value=""
    email_input.value=""
    gender_radio.checked=false
}

function deleteRow(event){
    event.target.parentElement.parentElement.remove()
}
