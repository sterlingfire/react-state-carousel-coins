import "./Coin.css";

const SIDE_TO_URL = {
  Heads: "https://upload.wikimedia.org/wikipedia/commons/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png",
  Tails: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/220px-2017-D_Roosevelt_dime_reverse_transparent.png"
} 

/** Renders Coin component
 * 
 * Prop:
 * - Side: "Heads", "Tails" or "" which determines the image
 *   - "" does not display the image
 */

function Coin({side}) {
  let imgUrl = SIDE_TO_URL[side];

  return (<div>
    { side && <img src={imgUrl} className="Coin" alt={side}></img> }
  </div>);
}

export default Coin;
export {SIDE_TO_URL};