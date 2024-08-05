// const Text = () => {
//     return ( <main>
//         <div>
//             <h1>Texts</h1>
//             <button>Button</button>
//         </div>
        
//         <div>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum iure, fugiat numquam quis, minima facere quam excepturi quas nulla similique non quod doloremque, voluptates dolorum autem eos dignissimos veniam eum!</p>
//         </div>
//     </main> );
// }
 
// export default Text;

import { useState } from "react";

const ToggleItem = ({ discription, id }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="single-history" key={id}>
      <button
        className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        click this btn for toggle h-info block {id}
      </button>

      {toggleThisElement && <div className="h-info">{discription}</div>}
    </div>
  );
};

export default function Text() {
  const data = ["first", "second", "third"];

  return (
    <>
      {data.map((d, id) => {
        return <ToggleItem id={id} discription={d} />;
      })}
    </>
  );
}