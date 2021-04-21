import { Responsive } from '@instructure/ui'

const RESPONSIVE_IUI = () => {

  return (
    <Responsive
      match="media"
      query={{
        small: { maxWidth: 600 },
        medium: { minWidth: 600 },
        large: { minWidth: 800}
      }}
    >
      {(props, matches) => {
        if (matches.includes('large')) {
          return (
            <div>large</div>
          )
        } else if (matches.includes('medium') && !matches.includes('large')) {
          return (
            <div>medium</div>
          )
        } else {
          return (
            <div>small</div>
          )
        }
      }}
    </Responsive>
  )

}

export default RESPONSIVE_IUI
