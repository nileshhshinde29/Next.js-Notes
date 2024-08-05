"use client"
import React from 'react'

const randomNum = (num) => {
  return (
    Math.floor(Math.random() * num)
  )
}

function Page() {

  if (randomNum(2) === 1) {
    // throw new Error('custom error happend')
  }
  return (
    <div>Page</div>
  )
}

export default Page