import { Pagination } from '@instructure/ui'

const PAGINATION_IUI = () => {

  const pages = Array.from(Array(9)).map((v, i) => <Pagination.Page
      key={i}
      onClick={() => {}}
      current={i === 0}>
    {i + 1}
  </Pagination.Page>)


  return (
    <Pagination as="nav" margin="small" variant="compact" labelNext="Next Page" labelPrev="Previous Page"
    >
      {pages}
    </Pagination>
  )

}

export default PAGINATION_IUI