const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-main_wrapper">
                <div className="newsletter-subscribe_wrapper">
                    <h2>Subscribe Now!</h2>
                    <p>Subscribe to our newsletter to receive our latest news</p>
                    <form action="https://formspree.io/f/xoqgjrok" method="POST" className="newsletter-form">
                    <div className="inner">
                        <input type="email" name="email" placeholder="Enter Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp