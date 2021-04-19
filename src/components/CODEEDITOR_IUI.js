import { CodeEditor } from '@instructure/ui'

const CODEEDITOR_IUI = () => {

  const code = `function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}`

  return (
    <CodeEditor label='code editor' value={code} language='javascript' />
  )
}

export default CODEEDITOR_IUI
