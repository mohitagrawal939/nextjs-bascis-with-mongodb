import Link from 'next/link'
import {MDBBtn} from 'mdb-react-ui-kit'

function Navbar(){
    return (
        <nav className='navbar container'>
            <Link href="/">
                <a className='navbar-brand'>Superhero Identity Manager</a>
            </Link>
            <Link href="/add">
                <MDBBtn>Add New Identity</MDBBtn>
            </Link>
        </nav>
    )
}

export default Navbar