import React from 'react'

 const PropsArr=()=> {
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
  return (
    <div>
      {arr}
    </div>
  )
}

export default  PropsArr;