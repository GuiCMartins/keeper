import './styles.css'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer;