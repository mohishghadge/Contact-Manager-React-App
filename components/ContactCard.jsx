import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";

const ContactCard = ({contact,removeContact}) => {
 const {id,FirstName,LastName,Contact,Email} = contact



  return (
    <>

      <div className="card ms-4">
        <p className="card-header  d-flex justify-content-between" style={{fontSize:"17px",paddingLeft:'2px',paddingRight:"1px",fontWeight:700}}>
        <IoIosContact size={"2.2rem"} />
        {FirstName + " " +LastName}

        
        <FcFullTrash onClick={()=>removeContact(id)} style={{cursor:'pointer'}} size={"2rem"}/>
        </p>
        <div className="card-body">
          <h5 className="card-title">{Contact}</h5>
          <p className="card-text">{Email}</p>

        </div>
      </div>

    </>
  )
}

export default ContactCard