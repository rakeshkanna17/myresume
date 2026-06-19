function Hero() {
    return (
        <div>
                <div className="hero">
                    <div className="hero-grid"></div>
                    <div className="hero-blob"></div>
                    <div className="hero-content">
                        <div className="hero-badge">Available for opportunities</div>
                        <h1 className="hero-name">
                        Kanna<br />
                        <span class="accent">Rakesh</span>
                    </h1>
                    <p className="hero-tagline">
                        Frontend/UI Developer with 7+ years of experience building scalable, responsive, and enterprise-grade web applications using Vue.js, Angular, JavaScript, HTML5, and CSS3.
                    </p>
                    {/* hero section*/}
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Get in touch
                        </a>
                        <a href="#experience" className="btn-outline">View experience →</a>
                    </div>
                                        {/* <div className="hero-stats">
      <div>
        <div class="stat-num">7+</div>
        <div class="stat-label">Years experience</div>
      </div>
      <div>
        <div class="stat-num">4+</div>
        <div class="stat-label">Projects delivered</div>
      </div>
      <div>
        <div class="stat-num">3</div>
        <div class="stat-label">Companies worked at</div>
      </div>
    </div> */}

                </div>
            </div>


        </div>
    );
}

export default Hero;
