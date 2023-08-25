import React from'react';

function Leaderboardcell1(props){
    const {Rank,Name,Wins,Looses,ImageURL,ties,Winpoints,loosepoints,tiepoints}=props;
    const Points=(Wins*Winpoints+Looses*loosepoints+ties*tiepoints)/(Wins+Looses+ties);
    const Point=Points.toFixed(3);
    let bgc;
    if(Rank%2===1){
        bgc="vivk";
    }
    else{
        bgc=null;
    }
    return(
        <tr className={bgc}>
            <td className="px-2 px-md-4">{Rank+1}</td>
            <td className="w-25">
                <img src={ImageURL} alt="profile" className="hover-zoom bg w-50 py-2 image-fluid" />
            </td>
            <td className="pr-2 text-center">{Name}</td>
            <th className="pr-2 text-center">{Wins+Looses+ties}</th>
            <td className="pr-2 text-center">{Wins}</td>
            <td className="pr-2 text-center">{Looses}</td>
            <td className="pr-2 text-center">{ties}</td>
            <td className="pr-2 text-center">{Point}</td>
      </tr>
    )
}

export default Leaderboardcell1;