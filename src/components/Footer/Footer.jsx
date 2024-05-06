import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <a href='https://saif-mohammad.vercel.app/' className='link footer__link'>
        © Copyright Saif {new Date().getFullYear()}
      </a>
    </footer>
  )
}

export default Footer
