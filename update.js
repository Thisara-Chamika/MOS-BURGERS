let customerList;

let isNull = localStorage.getItem("customerList");

if (isNull) {
    customerList = JSON.parse(localStorage.getItem("customerList"));
} else {
    customerList = [];
}

let editIndex ;

function updateCustomer() {
    let customer = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
    };

    if (editIndex !== undefined) {
        customerList[editIndex] = customer;
        editIndex = undefined; 
    } else {
        customerList.push(customer);
    }

    localStorage.setItem("customerList", JSON.stringify(customerList));
    loadTable();
}

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
                <td><button type="button" onclick="editCustomer(${i})" class="btn btn-primary">EDIT</button></td>
            </tr>   
        `;
    }

    document.getElementById("tableCustomers").innerHTML = body;
}

function editCustomer(index) {
    const data = customerList[index];
    document.getElementById("name").value = data.name;
    document.getElementById("address").value = data.address;
    document.getElementById("email").value = data.email;
    document.getElementById("phoneNumber").value = data.phoneNumber;
    editIndex = index;
}