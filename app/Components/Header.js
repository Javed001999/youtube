// import React from 'react'
// import Nav from './Nav';

// const Header = (props) => {
//   return (
//     <>
//     <div className='bg-green-200 p-5'>
//           This is a Header Page (Main hoon Don)
//           <Nav num={props.num}/>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useContext } from 'react'
import Nav from './Nav';
import { MyContext } from '@/Helper/Context';

const Header = (props) => {
 const user = useContext(MyContext)
  return (
    <>
      <div className='bg-green-200 p-5'>
        {user}
      </div>
    </>
  );
};

export default Header;




























