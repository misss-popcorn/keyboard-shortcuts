import React, { useContext, useEffect } from 'react';
import { KeyboardShortcutContext } from './KeyboardShortcutContext'
import { Listener } from 'keypress.js'

let listener = new Listener();

export const KeyboardShortcut = ({ combo, callback, description }) => {
  const { setCombos } = useContext(KeyboardShortcutContext);
  useEffect(() => {
    const uid = listener.simple_combo(combo, callback);
    setCombos(combos => [...combos, {
      keyId: `key-${Math.random()}`,
      text: combo,
      description,
      uid
    }])
    return () => {
      listener.unregister_combo(uid)
      setCombos(combos => combos.filter(combo => combo.uid !== uid))
    }
  }, 
  // eslint-disable-next-line 
  []
  )
  return <></>
};
