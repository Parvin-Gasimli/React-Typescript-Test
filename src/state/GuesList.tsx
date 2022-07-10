import { useState } from "react";

const GuesList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuest] = useState<string[]>([]);
  const onclick = () => {
    setName("");
    setGuest([...guests, name]);
  };

  return (
    <div>
      <h4>Gues List </h4>
      <ul>
        {guests.map((guest, index) =>
          guest ? <li key={`uniq id ${index}`}>{guest}</li> : null
        )}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onclick}>Add </button>
    </div>
  );
};

export default GuesList;
