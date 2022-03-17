import React from 'react'
import '../style/Navber.css'
import Logo from '../assets/pizzaLogo.png';
// import ViewStreamIcon from '@mui/icons-material/ViewStream';
import {Link } from 'react-router-dom'


const Navber = () =>{

    return(
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo}></img>
                {/* <div className='hiddenList'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/menu'>Menu</Link>
                    <Link to = '/about'>About</Link>
                    <Link to ='/contact'>Contact</Link>
                </div> */}
            </div>

            <div className='rightSide'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/menu'>Menu</Link>
                    <Link to = '/about'>About</Link>
                    <Link to ='/contact'>Contact</Link>

            {/* <button >
            <ViewStreamIcon/>
            </button> */}
            </div>
        </div>
    )

}
export default Navber;