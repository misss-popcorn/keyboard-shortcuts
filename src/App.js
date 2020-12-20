import React from 'react';
import { KeyboardShortcutProvider } from './utils/KeyboardShortcutProvider'
import List from './components/List'
import './App.css';

import A from './components/A'
import B from './components/B'
import C from './components/C'

function App() {

  return (
    <KeyboardShortcutProvider>
      <div className="container">
        <A />
        <B />
        <C />
        <List />      
      </div>
    </KeyboardShortcutProvider>
  );
}

export default App;
