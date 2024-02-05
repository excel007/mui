"use client"

import React from 'react'

export default function Error({ error , reset } : any) {
  return (
    <div>Error Message : {error.message}</div>
  )
}
