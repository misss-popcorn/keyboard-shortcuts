import { useState } from 'react';
import { KeyboardShortcutContext } from './KeyboardShortcutContext'

export const KeyboardShortcutProvider = ({
    children
  }) => {
    const [combos, setCombos ] = useState([]);
    return (
      <KeyboardShortcutContext.Provider value={{ combos, setCombos }}>
        {children}
      </KeyboardShortcutContext.Provider>
    );
  }