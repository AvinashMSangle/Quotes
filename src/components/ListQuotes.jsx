import SingleQuote from "./SingleQuote";

function ListQuotes({ quotes,onDelete }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <SingleQuote key={quote.id} quote={quote} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ListQuotes;