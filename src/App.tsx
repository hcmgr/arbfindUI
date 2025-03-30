import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Arb } from "./dtos";
import { Dialog } from "./components/dialog/dialog";
import { ArbBox } from "./components/arbbox/arbbox";

function ClerkStuff() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

/**
 * Core App component
 */
function App() {
  const [arbs, setArbs] = useState([]);
  const [selected, setSelected] = useState<Arb | null>(null);

  useEffect(() => {
    fetch('http://localhost:10001/getArbs')
      .then(res => res.json())
      .then(setArbs)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <ClerkStuff />
      {arbs.map((arb, i) => (
        <ArbBox key={i} arb={arb} onClick={setSelected} />
      ))}
      <Dialog arb={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App
