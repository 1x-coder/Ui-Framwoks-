import { CircularProgress} from '@chakra-ui/react'
import { Container , Box} from '@chakra-ui/react'
import { Code , Stack} from '@chakra-ui/react'
import MainCard from './MainCard'

function App() {
  return (
    <>
      <CircularProgress value={80} />
      <CircularProgress isIndeterminate color='green.300' />
      <Container maxW='2xl' bg='blue.600' centerContent>
  <Box padding='4' bg='blue.400' color='black' maxW='md'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Container>

<Stack direction='row'>
  <Code children='console.log(welcome)' />
  <Code colorScheme='red' children="var chakra = 'awesome!'" />
  <Code colorScheme='yellow' children='npm install chakra' />
</Stack>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<MainCard></MainCard>
    </>
  )
}

export default App
