import { useEffect, useState } from "react";
import "./App.css";
import NotesDisplay from "./components/NotesDisplay";
import NotesInput from "./components/NotesInput";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserInfo from "./components/UserInfo";

function App() {
  const [user, setUser] = useState("");
  const [signUpPage, setSignUpPage] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const userId = user?.user_id;
    const fetchInitialNotes = async () => {
      if(!userId) return;
      const res = await fetch(`http://localhost:8000/notes/notes?userId=${userId}`);
      const notesFetched = await res.json();
      setNotes(notesFetched["result"]);
    };
    fetchInitialNotes();
  }, [user]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React API Demo</h1>
      </header>

      <main className="main-section">
        {user ? (
          <UserInfo user={user} setUser={setUser}/>
        ) : signUpPage ? (
          <SignUp setSignUpPage={setSignUpPage} user={user} setUser={setUser} />
        ) : (
          <Login setSignUpPage={setSignUpPage} user={user} setUser={setUser} />
        )}
        {user && (<NotesInput notes={notes} setNotes={setNotes} user={user} setUser={setUser}/>)}
        {user && (<NotesDisplay notes={notes} setNotes={setNotes}/>)}

        
      </main>
    </div>
  );
}

export default App;
