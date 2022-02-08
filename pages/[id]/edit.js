import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'
import { useState } from 'react';

function EditHero({heros}) {
    const router = useRouter()
    const heroId = router.query.id

    const [form, setForm] = useState({
        superHero: heros.superHero,
        realName: heros.realName
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
            const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: "PUT",
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
                <h1 className="display-3">Edit Hero Identity</h1>
                <br></br>
                <form onSubmit={handleForm}>
                    <MDBInput
                        onChange={handleChange}
                        label='Super Hero'
                        type="text"
                        name='superHero'
                        value={form.superHero}
                    />

                    <MDBInput
                        className='my-4'
                        onChange={handleChange}
                        label='Real Name'
                        type="text"
                        name='realName'
                        value={form.realName}
                    />
                    <MDBBtn type='submit'>Submit</MDBBtn>
                </form>
            </div>
        </>  
    )
}

export async function getServerSideProps({params}){
    const id = params.id
    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    //console.log(res.data.hero)
    const {hero} = res.data
    return{
      props:{heros: hero}
    }
}

export default EditHero