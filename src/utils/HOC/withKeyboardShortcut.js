import { useContext } from 'react';
import { KeyboardShortcutContext } from '../KeyboardShortcutContext';


export const withKeyboardShortcut = WrappedComponent => ({ ...props }) => {
    const { combos } = useContext(KeyboardShortcutContext);
    return <WrappedComponent  keyboardShortcuts={combos} {...props} />
};