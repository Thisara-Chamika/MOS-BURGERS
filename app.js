
let customerList;

let isNull = localStorage.getItem("customerList");

if (isNull) {
    customerList = JSON.parse(localStorage.getItem("customerList"));
} else {
    customerList = [];
}

// -------------------------------- add coustomer -------------------------

function addCustomer(){

    let customer = {
        name : document.getElementById("name").value,
        address : document.getElementById("address").value,
        email : document.getElementById("email").value,
        phoneNumber : document.getElementById("phoneNumber").value,
    } 

    console.log(customer);
    

    customerList.push(customer);
    

    localStorage.setItem("customerList",JSON.stringify(customerList));
    loadTable();
}

//--------------- load table -------------------------------

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
            </tr>   
            </tbody>
        `;

    }

    document.getElementById("tableCustomers").innerHTML=body;
}