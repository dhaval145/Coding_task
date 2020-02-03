import React, { useState, useEffect } from 'react';

const RewardsPoints = ({UserInfo}) => {
		
	const[UserData, SetUserData] = useState([]);
    useEffect(() => {
    	const today = new Date();
        const threeOldDate = today.setMonth(today.getMonth() - 3);
        const filteredList = UserInfo.filter(trans =>
         new Date(trans.date) > new Date(threeOldDate)).map((info)=>{
         	let infoObj = {...info};
         	const{price} = infoObj;
         	if(price>50 && price<100){
         		let rewards = price-50;
         		infoObj.rewards = rewards;
         	}else if(price >100){
         		let rewards =  (2*(price-100) + 50); 
         		infoObj.rewards = rewards;
         	}else{
         		infoObj.rewards = 0;   		
         	}
         	return infoObj;
        });
        SetUserData(filteredList);
  },[]);
  return(
  	  <div className="table-block">
  	  	<h2>Reward Points</h2>
  	  	<table>
  	  	 <thead>
	  	  <tr>
	  	  	<th>Date</th>
	  	  	<th>Price</th>
	  	  	<th>Rewards</th>
  	  	 </tr>
  	  	 </thead>
  	  	<tbody>
  	  	 {UserData.map((user, key)=>
  	  	 	<tr key={key} >
  	  	 		<td>{user.date}</td>
  	  	 		<td>{user.price}</td>
  	  	 		<td>{user.rewards}</td>
  	  	 	</tr>
  	  	 	)}
  	  	</tbody>
  	  	</table>
  	 </div>
  	 );
	
}
export default RewardsPoints;