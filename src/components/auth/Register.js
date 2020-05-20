import React, { useState } from "react"

const Register = props => {
  const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: "", familyMembers: 0 });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegister = e => {
    e.preventDefault();

    const newCustomer = {
      "first_name": credentials.firstName,
      "last_name": credentials.lastName,
      "email": credentials.email,
      "username": credentials.username,
      "password": credentials.password,
      "family_members": credentials.familyMembers
    }

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCustomer)
    })
    .then(response => response.json())
    .then(parsedResponse => {
      if("token" in parsedResponse) {
        sessionStorage.setItem("kennywood-token", parsedResponse.token)
      }
    })
  }

  return (
    <form className="form--login" onSubmit={handleRegister}>
      <h1 className="h3 mb-3 font-weight-normal">Register to use Saturday in the Park</h1>
      <fieldset>
        <label htmlFor="firstName"> First Name </label>
        <input onChange={handleFieldChange} type="text"
          id="firstName"
          placeholder="First Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="lastName"> Last Name </label>
        <input onChange={handleFieldChange} type="text"
          id="lastName"
          placeholder="Last Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="email"> Email </label>
        <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="Email Address"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="familyMembers"> Total Number of Family Members </label>
        <input onChange={handleFieldChange} type="number"
          id="familyMembers"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <button type="submit">
          Register
                    </button>
      </fieldset>
    </form>
  )
}

export default Register;
