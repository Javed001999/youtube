//-------------------------------------------------------------------------------------------------------------------
//                                     Topic-1 Two way binding in React
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setUsername] = useState("");
//   return (
//     <>
//     <h1 className='m-8 mb-5 text-2xl'>Enter your name : </h1>
//       <form>
//         <input  className='text-xl border-zinc-800 border-2 m-8 mt-0 px-4 py-2' type='text'
//         value={username}
//         onChange={(e)=>{
//           setUsername(e.target.value)
//         }}
//         />
//       </form>
//     </>
//   )
// }
// export default page;

//----------------------------------------------------------------------------------------------------------------
//                             Topic-2 (Routing and Dynamic Routing) or App Routing 


// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <h1 className='text-2xl font-bold'>This is Home Page</h1>
//       <button><a href='/Contact'>Contact</a></button>
//     </>
//   );
// };
// export default page;

//--------------------------------------------------------------------------------------------------------------
//                               Topic -03 API Calling (fetch API/Axios)

// "use client"
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const page = () => {
//   const [users, setusers] = useState([]);
//   const getUsers = async () => {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users")
//     const data = res.data
// console.log(data);
//   setusers(data)
// }

// Hamare function ko automatically call karne ke liye iska use karte hain ....
//   useEffect(()=>{
//     getUsers()
//   },[])

//   return (
//     <>
//       <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>

//       <div className='p-8 bg-slate-100 mt-5'>
//         <ul>
//           {users.map((e) => {
//             return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };
// export default page;
//------------------------------------------------------------------------------------------------------------------
//                                        Topic-4 Context API

// "use client"
// import React, {useState} from 'react';
// import Header from './Components/Header';

// const page = () => {
//   const [num, setNum] = useState(10)
//   return (
//     <>
//       <div>
// {/* This is a Home Pages */}
//  <Header num={num}/>
// </div>
// </>
// );
// };
// export default page; 


// "use client"
// import { MyContext } from '@/Helper/Context';
// import React, { useContext } from 'react';
// import Header from './Components/Header';

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   return (
//     <div>
//       {user}
//       <Header />
//     </div>
//   )
// }
// export default page;

//----------------------------------------------------------------------------------------------------------------
                                              // Topic- Showing flash message (react toastify)

// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify = () => {
//    toast("Login Successful");
//   }

//   return (
//     <div>
//       <button onClick={notify}>Login</button>
//       <ToastContainer />
//     </div>
//   )
// }

// export default page;

//----------------------------------------------------------------------------------------------------------------
                          // Topic - Server side rendering vs client side rendering
// "use client"
// import axios from 'axios';
// import React, { useState } from 'react';

// const page = () => {
//   const[userdata, setUserdata] = useState("")
//   const [num, setnum] = useState(10)
//   const getData = async () =>{
//      const response = await axios.get("https://picsum.photos/v2/list")
//      setUserdata(JSON.stringify(response.data));
//   }
//   return (
//     <div>
//       <button onClick={getData}>Click</button>
//       {userdata}
//     </div>
//   )
// }
// export default page;

//-------------------------------------------------------------------------------------------------------------------
                  // Topic - Deployment via Netlify (Push Next.js code in Github)
import React from 'react'

const page = () => {
  return (
    <>
    <div>
      <h1>Deployment</h1>
    </div>
    </>
  );
};
export default page;

//------------------------------------------------------------------------------------------------------------------










































