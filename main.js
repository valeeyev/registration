async function loginWithFirstNamePassword(firstName, password) {
  try {
    const response = await axios.post("login-api", {
      firstName: firstName,
      password: password,
    });

    console.log(response.data);

    // acces token
    const token = response.data.accessToken;

    // Save
    localStorage.setItem("accessToken", token);

    // error handle
  } catch (error) {
    console.error(error);
    console.log("password or firstname incorrect!");
  }
}

async function registration() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const parentFirstName = document.getElementById("parentFirstName").value;
  const parentLastName = document.getElementById("parentLastName").value;
  const parentPhone = document.getElementById("parentPhone").value;
  const password = document.getElementById("Password").value;

  try {
    const response = await axios.post("register-api", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      parentFirstName: parentFirstName,
      parentLastName: parentLastName,
      parentPhone: parentPhone,
      password: password,
    });

    console.log(response.data);

    await loginWithFirstNamePassword(firstName, password);
  } catch (error) {
    console.error(error);
  }
}

function toggleForm() {
  const registerForm = document.querySelector(".register-form");
  const loginForm = document.querySelector(".login-form");

  if (registerForm.style.display === "none") {
    // switch login
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  } else {
    // switch registration
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  }
}
