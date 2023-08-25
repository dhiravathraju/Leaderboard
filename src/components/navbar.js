import React from "react";
import Logo from '../Assets/logo.jpg'
import Bg from '../Assets/bg.png'

function Navbar(props){
    let {SeriesName}= props;
    return(
        <div>
            <img src={Bg} alt="bg" className="fixed-top w-100 h-100" style={{zIndex: "-1"}} />
            <nav className="font-weight-heavy container-fluid fixed-top" style={{backgroundColor: "red"}}>
                <div className="row text-center align-items-center">
                    <img src={Logo} alt="profile_image" width="50px" height="50px" />
                    <h3 className="mx-auto font-weight-bold text-white">{SeriesName}</h3>
                </div>
            </nav>
            <br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Navbar;