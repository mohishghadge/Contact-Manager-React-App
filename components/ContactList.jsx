import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,removeContact}) => {
 
  return (
    <>
        <div className='mt-4 ms-3 d-flex '>   
  


        {contacts.length > 0 ? (
          contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} removeContact={removeContact} />
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h5>No contacts found</h5> {/* Display message if no contacts are found */}
          </div>
        )}
    </div>
    </>
  )
}

export default ContactList