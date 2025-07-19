let customerList;

let isNull = localStorage.getItem("customerList");

if (isNull) {
  customerList = JSON.parse(localStorage.getItem("customerList"));
  loadTable();
} else {
  customerList = [];
}

let editIndex;

function addCustomer() {
  let customer = {
    name: document.getElementById("customerName").value,
    email: document.getElementById("customerEmail").value,
    phone: document.getElementById("customerPhonenumber").value,
  };

  customerList.push(customer);
  localStorage.setItem("customerList", JSON.stringify(customerList));

  loadTable();
  resetForm();
}

function resetForm() {
  document.getElementById("customerName").value = "";
  document.getElementById("customerEmail").value = "";
  document.getElementById("customerPhonenumber").value = "";
}

function loadTable() {
  JSON.parse(localStorage.getItem("customerList"));

  let body = `
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
    `;

   for (var i = 0; i < customerList.length; i++) {
    var customer = customerList[i];
    body += `
        <tr>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
              <button type="button" onclick="editCustomer(${i})">Edit</button>
              <button type="button" onclick="deleteCustomer(${i})">Delete</button>
            </td>
        </tr>
        `;
  }

  document.getElementById("customerTableBody").innerHTML = body;
}

function editCustomer(index) {
  document.getElementById("customerName").value = customerList[index].name;
  document.getElementById("customerEmail").value = customerList[index].email;
  document.getElementById("customerPhonenumber").value = customerList[index].phone;

  editIndex = index;

  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline-block";
}

function updateCustomer() {
  if (editIndex != null) {
    customerList[editIndex].name =
      document.getElementById("customerName").value;
    customerList[editIndex].email =
      document.getElementById("customerEmail").value;
    customerList[editIndex].phone = document.getElementById(
      "customerPhonenumber"
    ).value;
  }

  localStorage.setItem("customerList", JSON.stringify(customerList));

  loadTable();
  resetForm();

  editIndex = null;

  document.getElementById("addBtn").style.display = "inline-block";
  document.getElementById("updateBtn").style.display = "none";
}

function deleteCustomer(index) {
  if (confirm("Do you want to delete this customer?")) {
    customerList.splice(index, 1);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    loadTable();
    resetForm();
  }
}
