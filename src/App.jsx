import React from 'react'
import AddQuote from "@/components/AddQuote";
import ListQuotes from "@/components/ListQuotes";
import SingleQuote from "@/components/SingleQuote";



function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AddQuote />
      <ListQuotes />
      <SingleQuote />
    </div>
  )
}

export default App