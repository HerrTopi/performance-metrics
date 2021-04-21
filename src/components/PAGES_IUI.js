import { Pages } from '@instructure/ui'

const PAGES_IUI = () => {
  const renderBackButton = (navigateToPreviousPage) => {
    return (
      <button onClick={navigateToPreviousPage}>Back</button>
    )
  }

  return (
    <Pages
      activePageIndex={0}
      onPageIndexChange={() => {}}
      backButtonLabel="Back to previous page"
    >
      <Pages.Page>
        {(history, navigateToPreviousPage) => {
          return (
            <div>
              <div>
                <button onClick={() => {}}>
                  Go to Page Two
                </button>
              </div>
              <div>
                <div>Page One</div>
              </div>
            </div>
          )
        }}
      </Pages.Page>
      <Pages.Page>
        {(history, navigateToPreviousPage) => {
          return (
            <div>
              <div>
                {history.length > 1 && (
                    renderBackButton(navigateToPreviousPage)
                )}
              </div>
              <div>
                Hey Look - Page Two
              </div>
            </div>
          )
        }}
      </Pages.Page>
    </Pages>
  )
}

export default PAGES_IUI