import React, { useRef } from 'react'
import { MdOutlineConnectWithoutContact } from "react-icons/md";
const Header = ({filteredContacts,searchQuery,setSearchQuery}) => {
    console.log(filteredContacts)
 

    const color = {color:"#fff"}
  return (
    <>
    <header className="py-3 mb-3 border-bottom text-bg-dark" style={{width:"100%"}}>
    <div className="container-fluid d-grid gap-3 align-items-center"  style={{ gridTemplateColumns: '1fr 2fr'}}>        

      <div className="dropdown">
        <a href="#" className="d-flex align-items-center px-3 col-lg-6 mb-2 mb-lg-0 link-body-emphasis text-decoration-none" aria-expanded="false">
        <MdOutlineConnectWithoutContact size="3em" style={color}/>
        <p style={{color:"white", fontSize:"24px", fontWeight:"700"}}>Contact Manager</p>
        </a>
       
      </div>

      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input type="search" className="form-control" value = {searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search Your Contacts..." aria-label="Search"/>
        </form>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header