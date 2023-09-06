import React, { useState } from 'react'

function PrivateRoute({children,user}) {

  return (
    user?children:
    <h1>Bara 3aref b rouhek sahbi</h1>
  )
}

export default PrivateRoute