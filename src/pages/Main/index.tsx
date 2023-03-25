import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar></Sidebar>
      <section>
        <img src={logoImg} alt='Logo do app' />
        <Outlet></Outlet>
      </section>
    </Container>
  )
}
