import { useState } from "react";
import styles from "./App.css"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
      <div className={styles.container}>
        {loggedIn ? <p>Logged in</p> : <p>Logged out</p>}
        <button className={styles.btn} onClick={loggedIn ? handleLogoutClick : handleLoginClick}>
          {loggedIn ? "LOG OUT" : "LOG IN"}
        </button>
      </div>
  );
}

export default App;
