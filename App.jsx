import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'

function App() {


const [contacts,setContacts] = useState([]);
const [searchQuery, setSearchQuery] = useState(""); 
useEffect(()=>{

  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  if(storedContacts){
    setContacts(storedContacts);
  }
},[])



const removeContact =(id)=>{
  const updateContacts  = contacts.filter((contact)=>contact.id !== id);
    setContacts(updateContacts);


  
}

useEffect(()=>{
  if(contacts.length > 0){
    localStorage.setItem('contacts',JSON.stringify(contacts));
  }
},[contacts])

const filteredContacts = contacts.filter((contact)=>{
  return(
    contact.FirstName.toLowerCase().includes(searchQuery.toLowerCase())||
    contact.LastName.toLowerCase().includes(searchQuery.toLowerCase())||
    contact.Email.toLowerCase().includes(searchQuery.toLowerCase())||
    contact.Contact.includes(searchQuery)
  )
})

  return (
    <>
    <Header filteredContacts={filteredContacts} searchQuery ={searchQuery} setSearchQuery = {setSearchQuery}  />
    <AddContact setContacts = {setContacts}/>

    {/* contacts={contacts}  */}
    <ContactList removeContact = {removeContact} contacts ={filteredContacts} />  
    </>
  )
}

export default App
