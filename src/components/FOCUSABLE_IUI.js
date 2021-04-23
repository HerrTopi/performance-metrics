import { Focusable } from '@instructure/ui'

const FOCUSABLE_IUI = () => {
    return (
      <Focusable>
        {({ focused }) => (
          <span>
            <button>
              Trigger
            </button>
            {focused && (
              <div>
                On focus content
              </div>
            )}
          </span>
        )}
      </Focusable>
    )
}

export default FOCUSABLE_IUI