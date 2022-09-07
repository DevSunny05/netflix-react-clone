import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    // const [show,handleShow]=useState(false);

    // useEffect(()=>{
    //     window.addEventListener("scroll",()=>{
    //         if(window.scrollY> 100){
    //             handleShow(true)
    //         }else{
    //             handleShow(false)
    //         }
    //     });
    //     return ()=>{
    //         window.removeEventListener('scroll')
    //     };
    // },[])
  return (
    <div className='nav'>
        <img
        className='nav__logo'
        src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0"
        alt='nav_logo'
        />

        <img className='nav__avatar'
        src='https://th.bing.com/th/id/OIP.JIPMtrXt6ynG_NAOmtGmswHaHX?w=136&h=149&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        alt='netflix_avatar'
        />



    </div>
  )
}

export default Navbar