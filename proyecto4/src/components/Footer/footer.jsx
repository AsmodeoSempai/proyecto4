import React from 'react'
import '../Footer/footer.css'
import {FaFacebookF,FaInstagram,FaTwitter,FaTripadvisor} from 'react-icons/fa'

export function Footer() {
  return (
    
    <section className='footer'>
        
        <a href="#/"><FaFacebookF/></a>
        <a href="#/"><FaInstagram/></a>
        <a href="#/"><FaTwitter/></a>
        <a href="#/"><FaTripadvisor/></a>
        
        
    </section>
    
  )
}
