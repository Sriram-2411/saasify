import React from "react";
import './Header.css';
import logoimg from '../../Assets/logos.jpg'
import Btn from "../Commondesign/Btn";
class Menubar extends React.Component{
    render(){
        return(
            <header>
                <div className="logomain">
                    <div className="logo"> <img src={logoimg} alt="logo" /></div>
                    <div className="toogle"><i class="bi bi-list"></i></div>
                   
                </div>
                <div className="menus">
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Feature</a></li>
                        <li> <a href="#">Service</a></li> 
                        <li className="supermenu"> <a href="#">Resources</a>
                        <ul className="submenu">
                            <li> <a href="#">Blog 1</a></li>
                            <li> <a href="#">Blog 2</a></li>
                            <li> <a href="#">Blog 3</a></li></ul>
                        </li>
                       <li> <a href="#">Contact </a></li>
          

                    </ul>
                </div>
                <div className="bluemenu">
                    <ul>
                        <li>
                            <a href="#"><i class="bi bi-moon-fill"></i></a>
                        </li>
                        <li>
                            <Btn btnstyle="get start"/>
                           
                        </li>
                    </ul>
                </div>
            </header>

        )
    }
}
export default Menubar;