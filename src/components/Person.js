import React from 'react'

function Person({person}) { // destructing in the props in the parameters
  return (
    <div>
      <h2> I am {person.name} age {person.age}</h2>
    </div>
  )
}

export default Person
