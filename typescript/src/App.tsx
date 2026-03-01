// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import React, { useState } from "react";
import Message from "./Message";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>CodeSandbox React TypeScript</h1>

      <Message isLoggedIn={isLoggedIn} />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
    </div>
  );
}
