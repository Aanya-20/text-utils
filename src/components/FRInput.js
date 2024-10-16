import React from 'react'
// import FRInput from './FRInput';

//  function FRInput() {
//   return (
//     <div>
//       <input></input>
//     </div>
//   )
// }
// re written the above code 
const FRInput = React.forwardRef ((props , ref) =>{    // when a componet is pass a parameter using createRef() ,it receives the ref attribute as second parameters
    return (
        <div>
            <input ref = {ref}></input>
        </div>
    )
})
export default FRInput
