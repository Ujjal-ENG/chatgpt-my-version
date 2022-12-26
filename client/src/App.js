import "./App.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar">Me</div>
            <div className="message">Hello world</div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            className="chat-input-textarea"
            placeholder="Type your message here"
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
