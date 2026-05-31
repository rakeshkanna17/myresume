function Hero() {
    return (
        <div >
            <div class="hero">
                <div class="hero-grid"></div>
                <div class="hero-blob"></div>
                <div class="hero-content">
                    <div class="hero-badge">Available for opportunities</div>
                    <h1 class="hero-name">
                        Kanna<br />
                        <span class="accent">Rakesh</span>
                    </h1>
                    <p class="hero-tagline">
                        Frontend/UI Developer with 7+ years of experience building scalable, responsive, and enterprise-grade web applications using Vue.js, Angular, JavaScript, HTML5, and CSS3.
                    </p>
                    {/* hero section*/}
                    <div class="hero-actions">
                        <a href="#contact" class="btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Get in touch
                        </a>
                        <a href="#experience" class="btn-outline">View experience →</a>
                    </div>
                    {/* <div class="hero-stats">
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
