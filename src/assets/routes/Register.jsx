import {} from 'react'
import ClienteForm from '../../components/ClienteForm'
import '../styles/form.scss'
import BackIcon from '/back.svg'
import { Link } from 'react-router-dom'


function Register(){
    return (
        <section className="container">
            <Link to='/'>
            <img src={BackIcon} alt="" />
            </Link>
            <div className="card">

            <ClienteForm/>
            </div>
        </section>

    )
}
export default Register