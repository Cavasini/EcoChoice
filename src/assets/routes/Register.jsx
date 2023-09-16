import {} from 'react'
import ClienteForm from '../../components/ClienteForm'
import '../styles/form.scss'
import BackIcon from '/back.svg'
import { Link } from 'react-router-dom'
import * as S from '../../components/styles'


function Register(){
    return (
        <section className='FormRegister'> 
        <div className="container">
            <Link to='/'>
            <img src={BackIcon} alt="" />
            </Link>
            <S.Card className="card">
            <ClienteForm/>
            </S.Card>
        </div>
        </section>

    )
}
export default Register
