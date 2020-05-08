import React from 'react'

export default function Header({ children }) {
  return (
    <div className="p-4 bg-indigo-800 sm:flex justify-between items-center">
      { children }
    </div>
  )
}
