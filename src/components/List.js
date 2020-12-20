
import { withKeyboardShortcut } from '../utils/HOC/withKeyboardShortcut'

function List({
  keyboardShortcuts
}) {
  return (
  <div className="container-list">{
    keyboardShortcuts.map(combo => <div key={combo.keyId}>
      <b>
        {combo.text}
      </b> :
      ( {combo.description} )
    </div>)
  }</div>
  );
}

export default withKeyboardShortcut(List);
