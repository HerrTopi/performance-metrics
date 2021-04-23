import { Table } from '@instructure/ui'

const TABLE_IUI = () => {

  return (
    <Table caption='Top rated movies'>
      <Table.Head>
        <Table.Row>
          <Table.ColHeader id="Rank">Rank</Table.ColHeader>
          <Table.ColHeader id="Title">Title</Table.ColHeader>
          <Table.ColHeader id="Year">Year</Table.ColHeader>
          <Table.ColHeader id="Rating">Rating</Table.ColHeader>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.RowHeader>1</Table.RowHeader>
          <Table.Cell>The Shawshank Redemption</Table.Cell>
          <Table.Cell>1994</Table.Cell>
          <Table.Cell>9.3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>2</Table.RowHeader>
          <Table.Cell>The Godfather</Table.Cell>
          <Table.Cell>1972</Table.Cell>
          <Table.Cell>9.2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>3</Table.RowHeader>
          <Table.Cell>The Godfather: Part II</Table.Cell>
          <Table.Cell>1974</Table.Cell>
          <Table.Cell>9.0</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )

}

export default TABLE_IUI
