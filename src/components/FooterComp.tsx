import Link from 'next/link'
import '../assets/css/Footer.css'

const FooterComp = () => {
    return(
        <>
        <footer>
        <div className="content">
            <div className="top">
                <div className="logo-details">
                    <i><img src="/assets/images/logo/ISF 2025.png" alt="ISF"/></i>
                </div>
                <div className="media-icons">
                    {/* <a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><i className="fab fa-facebook-f"></i></a> */}
                    <Link href="https://www.instagram.com/isf.official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fab fa-instagram"></i></Link>
                    {/* <a href="https://www.youtube.com/@IYSAOfficial" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target="_blank"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><i className="fab fa-linkedin"></i></a> */}
                </div>  
            </div>   
            <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">ISF</li>
                        <li><p>The Science Competition empowers youth to think critically and creatively, fostering global collaboration and innovation to solve real-world challenges through science.</p></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Information Link</li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/AboutPage">About</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                        <li><Link href="https://drive.google.com/file/d/1IyjNGCUDfeQyYlZb-ENDtLev6yKumzDo/view?usp=sharing">Guide Book</Link></li>
                        {/* <li><a href="https://iysa.or.id" target="_blank">IYSA Main Website</a></li>
                        <li><a href="https://iysaolympiad.or.id" target="_blank">IYSA Olympiad Main Website</a></li> */}
                    </ul>
                    <ul className="box">
                        <li className="link_name">Office</li>
                        <li><Link href="" target="_blank">SEGi University</Link></li>
                        <li><Link href='mailto:internationalscience.isf@gmail.com' target='_blank' className="">internationalscience.isf@gmail.com</Link></li>
                        {/* <li><a href='https://wa.me/+6283870026877' target='_blank'>+6283870026877</a></li> */}
                    </ul>
                    <ul className="box input-box">
                        <form action="https://formspree.io/f/xoqgjrok" method="POST">
                            <li className="link_name">Newsletter</li>
                            <input type="email" name="email" placeholder="Enter Your Email"/>
                            <li><input type="submit" value={"Subscribe"}/></li>
                        </form>
                    </ul>
                </div>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2025 <Link href="#">ISF Official.</Link>All rights reserved</span>
                <span className="policy_terms">
                    <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms & Condition</Link>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp