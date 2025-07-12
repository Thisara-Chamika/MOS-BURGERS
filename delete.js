let customerList;

let isNull = localStorage.getItem("customerList");

if (isNull) {
    customerList = JSON.parse(localStorage.getItem("customerList"));
} else {
    customerList = [];
}


let deleteIndex;


function deleteCustomer() {
    if (deleteIndex !== undefined) {
        customerList.splice(deleteIndex, 1);
        localStorage.setItem("customerList", JSON.stringify(customerList));
        loadTable();
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phoneNumber").value = "";
        deleteIndex = undefined;
    }
}

function loadCustomerToForm(index) {
    const data = customerList[index];
    document.getElementById("name").value = data.name;
    document.getElementById("address").value = data.address;
    document.getElementById("email").value = data.email;
    document.getElementById("phoneNumber").value = data.phoneNumber;
    deleteIndex = index;
}


    let body = ``;
    for(let i = 0; i < customerList.length; i++){
        let data = customerList[i];
        body +=`
            <tr>
                <td>${data.name}</td>
                <td>${data.address}</td>
                <td>${data.email}</td>
                <td>${data.phoneNumber}</td>
                <td><button type="button" onclick="loadCustomerToForm(${i})" class="btn btn-warning">Load</button></td>
            </tr>
        `;
    }
    document.getElementById("tableCustomers").innerHTML=body;

function loadTable() {
    let body = ``;

    for (let i = 0; i < customerList.length; i++) {
        let data = customerList[i];

        body += `
            <tr>
                <td>${data.name}</td>
                <td>${data.address}</td>
                <td>${data.email}</td>
                <td>${data.phoneNumber}</td>
                <td><button type="button" onclick="loadCustomerToForm(${i})" class="btn btn-warning">Load</button></td>
            </tr>   
        `;
    }

    document.getElementById("tableCustomers").innerHTML = body;
}