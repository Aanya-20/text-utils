import React from "react"

const Greet = props =>{
    const {name,heroName} = props // destructing in the function body
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
export default Greet
// const Greet = ({name,heroName}) =>{ // destructing in the parameters
//     return(
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }
// export default Greet