import { InlineList } from '@instructure/ui'

const INLINELIST_IUI = () => {

  return (
    <InlineList delimiter="pipe">
      <InlineList.Item>Lorem Ipsum</InlineList.Item>
      <InlineList.Item>10pts</InlineList.Item>
      <InlineList.Item><b>Due:</b> Oct 1, 2019</InlineList.Item>
    </InlineList>
  )
}

export default INLINELIST_IUI
