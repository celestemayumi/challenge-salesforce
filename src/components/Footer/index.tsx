import './styles.css'
import '../../../public/footercloud.png'
import '../../../public/Logo.png'
import Image from 'next/image'




const Footer  = () => {
    return(
        <footer>
            <div className="social">
                <Image 
                    src='/Logo.png'
                    width={190}
                    height={10}
                    alt = 'Logo'
                />
                <div className="social-icons">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-square-youtube"></i>
                </div>
            </div>
            <div className="footer-info">
            <p className='font-bold	'>Ainda nao conhece a Salesforce?</p>
            <ul>
                <li><a href=''>Link 1</a></li>
                <li><a href=''>Link 2</a></li>  
            </ul>
            </div>
            <div className="footer-info">
            <p className='font-bold	'>Sobre a Salesforce</p>
            <ul>
                <li><a href=''>Link 1</a></li>
                <li><a href=''>Link 2</a></li>   
            </ul>
            </div>
            <div className="footer-info">
            <p className='font-bold	'>Links populares</p>
            <ul>
                <li><a href=''>Link 1</a></li>
                <li><a href=''>Link 2</a></li>   
            </ul>
            </div>
        </footer>
    )
}

export default Footer;