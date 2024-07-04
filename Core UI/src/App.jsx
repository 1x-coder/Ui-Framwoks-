import {CCard, CCardImage,CCardBody,
CCardTitle,
CCardText,
CButton} from '@coreui/react'

function App() {
  return <>
  <CCard style={{ width: '18rem' }}>

  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton color="primary" href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
  </>;
}

export default App;
