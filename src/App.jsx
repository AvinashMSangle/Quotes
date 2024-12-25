import { useState } from "react";
import AddQuote from "@/components/AddQuote";
import ListQuotes from "@/components/ListQuotes";

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      likes: 15328967548960,
      title: "Life is good!",
    },
    {
      id: 2,
      likes: 876519246896498763421,
      title: "Next.js is awesome!",
    },
  ]);

  const handleAddQuote = (title) => {
   
    const quote = {
      title,
      id: crypto.randomUUID(),
      likes: 0,
    };

   
    setQuotes((prevQuotes) => [quote, ...prevQuotes]);
  };

  const deleteQuote= (id) => {
    setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
  };

  return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} />
      <ListQuotes quotes={quotes} onDelete={deleteQuote} />
    </div>
  );
}

export default App;