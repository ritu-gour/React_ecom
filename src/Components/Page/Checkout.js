
        
import React from 'react'
import Testing from './Testing'
import { Container, Stack } from 'react-bootstrap'
import Footer from '../Footer'

const Checkout = () => {
  return (
    <div>

      <div >
        <div className="new-wrapper" >
          <div className='checkbag'>
            <Container >
              <Stack direction="horizontal" gap={3}>
                <div className="p-2"></div>
                <div className="p-2 ms-auto"></div>
                <div className="p-2">
                  <b className='maathenabr '>M</b>
                </div>
              </Stack>
              <h2 className='cgu11 text-center'>Ma commande</h2>
              <div className='cgu3'>
                <Testing />
              </div>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Checkout 
