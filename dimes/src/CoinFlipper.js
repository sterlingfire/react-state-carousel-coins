import Coin from "./Coin";
import {useState} from 'react';

/* CoinFlipper component
 * props: none
 * state: countHeads:int, countTails:int
 * App -> CoinFlipper -> Coin
 */

function CoinFlipper(){
  const [countHeads, setCountHeads] = useState(0);
  const [countTails, setCountTails] = useState(0);
  const [coinSide, setCoinSide] = useState("");

  function flipCoin(){
    if (Math.random() > 0.5) {
      setCoinSide("Heads");
      setCountHeads(countHeads+1);
    }
    else {
      setCoinSide("Tails");
      setCountTails(countTails+1);
    }
  }

  return (
    <div>
      <h1>Flip A Coin!</h1>
      <Coin side={coinSide}/>
      <button className="CoinFlipper-button" onClick={flipCoin}>Flip Me!</button>
      <p>Out of {countHeads+countTails} flips, there have been {countHeads} heads, and {countTails} tails.</p>
    </div>
  );
}

export default CoinFlipper;
