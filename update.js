let customerList;

let isNull = localStorage.getItem("customerList");

if (isNull) {
    customerList = JSON.parse(localStorage.getItem("customerList"));
} else {
    customerList = [];
}

let editIndex ;

function loadTable() {

    let body = ``;
    
    JSON.parse(localStorage.getItem("customerList"));

    for(data of customerList){
        
        body +=`
            <tboday>
            <tr>
                <td>${data.name}</td>
                <td>${data.address}</td>
                <td>${data.email}</td>
                <td>${data.phoneNumber}</td>
                <td><button type="button" onclick="editCustomer(${data})" class="btn btn-secondary">EDIT</button></td>
            </tr>   
            </tbody>
        `;

    }

    document.getElementById("tableCustomers").innerHTML=body;
}


function updateCustomer(){

    JSON.parse(localStorage.getItem("customerList"));

    for (let i = 0; i < customerList.length; i++) {
        if (customerList[i].id === editIndex) {
            customerList[i] = {
                id: editIndex,
                name: document.getElementById("name").value,
                address: document.getElementById("address").value,
                email: document.getElementById("email").value,
                phoneNumber: document.getElementById("phoneNumber").value
            };
            break;
        }
    }

    localStorage.setItem("customerList", JSON.stringify(customerList));
    loadTable();
}