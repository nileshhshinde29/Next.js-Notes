"use client"
import React from 'react'

function ErrorBoundry({error, reset}) {
  return (
    <div><h2>{error.message}</h2>
    <br/>
    <button onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default ErrorBoundry