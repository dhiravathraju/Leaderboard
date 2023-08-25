import React from "react";

function Livescore(props){
    let { Name1,Name2,Image1URL,Image2URL,Setswon1,Setswon2,Points1,Points2,Sets }= props; 
    return(
    <div className="vivek mx-md-5 mx-3">
        <div className="container-fluid align-items-center text-center text-black">
            <h2 className=" font-weight-bold">Live Score</h2>
        </div>
        <br /><br />
        <div className="container">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="float-right text-center">
                        <h1 className="text_center">{Name1}</h1>
                        <img src={Image1URL} className="text-center image-fluid w-50" alt="1st player"/>
                    </div>
                </div>
                <div className="col-2 text-center">
                    <h1>VS</h1>
                </div>
                <div className="col-5">
                    <div className="float-left text-center">
                        <h1 className="text_center">{Name2}</h1>
                        <img src={Image2URL} className="text-center image-fluid w-50" alt="2nd player" />
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-6">
                    <div className="float-right text-center mr-5">
                        <h3>{Setswon1}/{Sets}</h3>
                        <h6>({Points1})</h6>
                    </div>
                </div>
                <div className="col-6">
                    <div className="float-left text-center ml-5">
                        <h3>{Setswon2}/{Sets}</h3>
                        <h6>({Points2})</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Livescore;