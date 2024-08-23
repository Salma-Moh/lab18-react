import React from 'react';
import Home from './components/home';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
