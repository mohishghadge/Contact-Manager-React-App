import React, {useRef } from 'react'


const AddContact = ({setContacts}) => {


  const toUpdateFName = useRef();
  const toUpdateLName = useRef();
  const toUpdateEmail = useRef();
  const toUpdateContact = useRef();

const handleAddBtnClick=(e)=>{
e.preventDefault();



  const todofName=(toUpdateFName.current.value);
  const todoLName=(toUpdateLName.current.value);
  const todoEmail =(toUpdateEmail.current.value);
  const todoContact = (toUpdateContact.current.value);


  if (!todofName || !todoLName || !todoEmail || !todoContact) {
    alert("All fields are mandatory!");
    return;
  }

  const newContact = {
    id:Date.now().toString(),
    FirstName:todofName,
    LastName:todoLName,
    Email:todoEmail,
    Contact:todoContact


  }
  
  console.log(newContact.FirstName)
  console.log(newContact.LastName)
  console.log(newContact.Email)
  console.log(newContact.Contact)


  setContacts((prevContacts)=>[...prevContacts,newContact]);


  // addNewContact(todofName,todoLName,todoEmail)
  (toUpdateFName.current.value) = "";
  (toUpdateLName.current.value) = "";
  (toUpdateEmail.current.value) = "";
  (toUpdateContact.current.value) = "";

}

  return (
    <>
    
    <form className="needs-validation" onSubmit={handleAddBtnClick}>
          <div className=" row g-2">
            <div className="px-5 col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First Name"  ref = {toUpdateFName} required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
           </div>

            <div className="px-5 col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref = {toUpdateLName} required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div className="px-5 col-sm-6">
              <label htmlFor="lastName" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" ref = {toUpdateEmail} required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="px-5 col-sm-6">
              <label htmlFor="lastName" className="form-label">Contact</label>
              <input type="text" className="form-control" id="number" placeholder="Contact Number" ref ={toUpdateContact}  required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


          <hr className="my-4"/>

          <button className="px-4 w-10 btn btn-dark btn-lg ms-5"  type="submit">Save</button>
        </form>
    </>
  )
}

export default AddContact