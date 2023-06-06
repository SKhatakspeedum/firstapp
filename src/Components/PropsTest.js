import React from 'react'
import PropsTestSubCompo from './PropsTestSubCompo';

const PropsTest=(props)=> {
    const arr = [
        {
          id: 1,
          title: "Blue sky",
          auth: "S.R.Khtak",
          location: "London",
        },
        {
          id: 2,
          title: "Green tree",
          auth: "Dora Marok",
          location: "Delhi",
        },
        {
          id: 3,
          title: "Red Heart",
          auth: "A.K.Arora",
          location: "New York",
        },
      ];
    
      const arrmap = arr.map((item,pos) => {
        return (
         <PropsTestSubCompo key={pos} id={item.id} title={item.title} auth={item.auth} location={item.location}/>
        );
      });
    
      return <div>{arrmap}</div>;
    }

export default PropsTest
 
