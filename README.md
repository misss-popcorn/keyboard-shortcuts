# Keyboard Shortcuts

A library to bind keyboard shortcuts in your React App.

* Take Key combination as input
* Suppports callback for the key shortcut you like

## tl;dr
* Install by executing `npm install @missspopcorn/keyboard-shortcuts`.
* Import by adding `import { KeyboardShortcuts } from "@missspopcorn/keyboard-shortcuts'`.
* Use by adding `<KeyboardShortcut />`.

## Demo

A minimal demo can be found in `components` directory and `App.js`.

[Online demo](https://jovial-davinci-d3bd41.netlify.app/) is also available!


## Getting started

### Compatibility

Your project needs to use React 16.8 or later.

@missspopcorn/keyboard-shortcut uses modern web technologies. That's why it's so fast, and lightweight. 

### Installation

Add this library to your project by executing `npm install @missspopcorn/keyboard-shortcuts`

### Usage

Here's an example of basic usage:

```js
import { KeyboardShortcut } from "@missspopcorn/keyboard-shortcuts";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
       <KeyboardShortcut
        combo="shift b"
        callback={() => function()}
        description="The shortcut description"
      ></KeyboardShortcut>
    </div>
  );
}
```
To list all keyboard shortcuts passed to the components:

```js
import { withKeyboardShortcuts } from '@missspopcorn/keyboard-shortcuts'


 function Component({
   keyboardShortcuts
 }) {
 }
 withKeyboardShortcut(Component)
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://www.missspopcorn.com/assets/img/DP.jpg" width="100">
    </td>
    <td>
      Miss Popcorn<br />
      <a href="mailto:urvashi.soni05@gmail.com">urvashi.soni05@gmail.com</a><br />
      <a href="https://www.missspopcorn.com/">Portfolio</a>
    </td>
  </tr>
</table>

## Thank you