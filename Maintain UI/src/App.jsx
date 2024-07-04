// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function App() {
  return <MantineProvider> <Card shadow="sm" padding="lg" radius="md" withBorder>
  <Card.Section>
    <Image
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      height={160}
      alt="Norway"
    />
  </Card.Section>

  <Group justify="space-between" mt="md" mb="xs">
    <Text fw={500}>Norway Fjord Adventures</Text>
    <Badge color="pink">On Sale</Badge>
  </Group>

  <Text size="sm" c="dimmed">
    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
    activities on and around the fjords of Norway
  </Text>

  <Button color="blue" fullWidth mt="md" radius="md">
    Book classic tour now
  </Button>
</Card>

<br />
<br />
<Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
</MantineProvider>;
}