import { Flex, Text, Button , Box, Card, Inset , Strong , Table} from '@radix-ui/themes';
import "./App.css";

function App() {
  return <>
  <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Lets go</Button>
    </Flex>

    <Box maxWidth="240px">
  <Card size="2">
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 140,
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Text as="p" size="3">
      <Strong>Typography</Strong> is the art and technique of arranging type to
      make written language legible, readable and appealing when displayed.
    </Text>
  </Card>
</Box>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
      <Table.Cell>danilo@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
      <Table.Cell>zahra@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
      <Table.Cell>jasper@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>

<Text size="6">
  <Flex direction="column">
    <Text weight="light">Light</Text>
    <Text weight="regular">Regular</Text>
    <Text weight="medium">Medium</Text>
    <Text weight="bold">Bold</Text>
  </Flex>
</Text>
  </>;


}

export default App;
