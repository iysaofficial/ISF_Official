import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section" id="hero-section">
            <div className="hero-content">
                <h1>ISF</h1>
                <h3>International Science Festival</h3>
                <p>Registration is now open for the International Science Festival <br />
                Join this prestigious Competition and gain an unforgettable experience!</p>                    
                    <br />
                    <div className="hero-btn">  
                        <Link href="#" target="_blank" className="btn">Close Registration</Link>
                        <Link href="https://drive.google.com/file/d/1IyjNGCUDfeQyYlZb-ENDtLev6yKumzDo/view?usp=sharing" className="btn">Guide Book</Link>
                    </div>
                    <br />
                    {/* <div className="hero-social-icon">   
                        <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="https://www.instagram.com/isf.official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                        <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                        <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                        <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                    </div> */}
            </div>
            <div className="hero-img">
                <img src="/assets/images/logo/hero-image.png" alt="" />
            </div>
        </section>
        </>
    )
}

export default HeroComp