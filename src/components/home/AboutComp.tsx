import Link from "next/link"

const AboutComp = () => {
    return(
        <>
        <section className="about-section" id="about-section">
        <div className="about-content">
            
            <div className="about-text">
                <h1>ISF</h1>
                <h5>International Science Festival</h5>
                <p>In an era of globalisation marked by the rapid development of science and technology, the ability to think critically, analytically and creatively has become a very important skill. The complexity of the modern world requires the younger generation to be able to understand, analyse and create solutions to various global challenges. Science Competition serves as a platform designed to hone these skills, while introducing participants to the dynamics of the ever-evolving world of science. Through this competition, the younger generation is not only trained to be more competent in academics, but also to think holistically and innovatively in solving real world problems.</p>
                {/* <p>The Math Olympiad is attended by students from various levels, from Elementary school to university level. Participants will be tested with various questions related to basic Math concepts in everyday life.</p> */}
                <Link href="/about">Read More</Link>
            </div>
            <img src="/assets/images/logo/ISF.png" alt="" />
        </div>
    </section>
        </>
    )
}

export default AboutComp