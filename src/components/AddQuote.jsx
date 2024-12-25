import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddQuote({ onSubmit }) {
  const [inputValue, setIntputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!inputValue.trim()) return;
    onSubmit(inputValue);

    setIntputValue(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <Input
        type="text"
        placeholder="Add a Quote"
        className="mb-2"
        onChange={(e) => setIntputValue(e.target.value)}
        value={inputValue}
      />

      <div className="flex gap-2">
        <Button>Add</Button>
        <Button>Sort</Button>
      </div>
    </form>
  );
}

export default AddQuote;