import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import { useState } from 'react';

function AddNewHero() {

    const [form, setForm] = useState({
        superHero: '',
        realName: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = async(e) => {
        e.preventDefault()
        try{
            const res = await axios('http://localhost:3000/api/hero', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })
            Router.push('/')
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <br></br>
            <div className="container">
                <h1 className="display-3">Add a New Hero Identity</h1>
                <br></br>
                <form onSubmit={handleForm}>
                    <MDBInput
                        onChange={handleChange}
                        label='Super Hero'
                        type="text"
                        name='superHero'
                    />

                    <MDBInput
                        className='my-4'
                        onChange={handleChange}
                        label='Real Name'
                        type="text"
                        name='realName'
                    />
                    <MDBBtn type='submit'>SUBMIT</MDBBtn>
                </form>
            </div>
        </>  
    )
}

export default AddNewHero