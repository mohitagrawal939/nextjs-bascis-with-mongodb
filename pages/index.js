import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;

const index = ({heros}) => {
  return (
    <div className="container">
      <br></br>
      {heros.length > 0 ? <h3 className="display-4">Total Identities - {heros.length}</h3> : <br></br>}
      <br></br>
      <div>
        {heros.map(hero =>{
          return (
            <MDBCard className='border dorder-2 my-2' style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link>
                <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          )
        })}
        
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const res = await axios('http://localhost:3000/api/hero')
  //console.log(res.data.hero)
  const {hero} = res.data
  return{
    props:{heros: hero}
  }
}

export default index