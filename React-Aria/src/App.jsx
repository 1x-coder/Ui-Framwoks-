import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import { Calendar, CalendarCell, CalendarGrid, Heading} from 'react-aria-components';

function App() {

  return (
    <>
     <Select>
  <Label>Favorite Animal</Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</Select>

<br />
<Calendar aria-label="Appointment date">
  <header>
    <Button slot="previous">◀</Button>
    <Heading />
    <Button slot="next">▶</Button>
  </header>
  <CalendarGrid>
    {(date) => <CalendarCell date={date} />}
  </CalendarGrid>
</Calendar>
    </>
  )
}

export default App
