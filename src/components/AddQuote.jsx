import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function AddQuote() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input type="text" placeholder="Enter a quote" />
      <Button onClick={() => console.log("Add Quote")}>Add</Button>
      <Button onClick={() => console.log("Add Quote")}>Sort</Button>
    </form>
  )
}

export default AddQuote