import { TreeBrowser } from '@instructure/ui'

const TREEBROWSER_IUI = () => {

  return (
    <TreeBrowser
      collections={{
        1: {
          id: 1,
          name: "Assignments",
          collections: [2,3],
          items: [3, 5],
          descriptor: "Class Assignments"
        },
        2: { id: 2, name: "English Assignments", collections: [4], items: [] },
        3: { id: 3, name: "Math Assignments", collections: [5], items: [1,2] },
        4: { id: 4, name: "Reading Assignments", collections: [], items: [4] },
        5: { id: 5, name: "Advanced Math Assignments", items: [5]}
      }}
      items={{
        1: { id: 1, name: "Addition Worksheet" },
        2: { id: 2, name: "Subtraction Worksheet" },
        3: { id: 3, name: "General Questions" },
        4: { id: 4, name: "Vogon Poetry" },
        5: { id: 5, name: "Bistromath", descriptor: "Explain the Bistromathic Drive" }
      }}
      defaultExpanded={[1, 3]}
      rootId={1}
    />
  )

}

export default TREEBROWSER_IUI
