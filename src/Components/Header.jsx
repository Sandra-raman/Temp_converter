import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { SiConvertio } from "react-icons/si";

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <SiConvertio className='fs-3 m-2 '/>
            <span>Temperature</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header