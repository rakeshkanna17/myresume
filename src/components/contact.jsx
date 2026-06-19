function Contact() {
    return (
        <section id="contact" style={{ maxWidth: 1100 }}>
            <div className="contact-wrapper">
                <div>
                    <div className="section-label">Say hello</div>
                    <h2 className="contact-tagline">
                        Let's build something <span>great</span> together.
                    </h2>
                    <p style={{ color: 'var(--text2)', fontSize: '0.92rem', marginTop: '1.25rem', lineHeight: '1.7' }}>
                        I'm always open to new opportunities, collaborations, or just a good conversation about UI development.
                    </p>
                </div>
                <div className="contact-links">
                    <a href="mailto:rakeshkanna39@gmail.com" className="contact-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                        <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">rakeshkanna39@gmail.com</div>
                        </div>
                    </a>
                    <a href="#" className="contact-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.16 6.16l1.02-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div>
                            <div className="contact-label">Phone</div>
                            <div className="contact-value">+91 ***** 53512</div>
                        </div>
                    </a>
                    <a href="https://github.com/rakeshkanna17" target="_blank" className="contact-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                                <path
                                    d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2z"
                                    fill="#56b531" />
                            </svg>
                        </div>

                        <div>
                            <div className="contact-label">GitHub</div>
                            <div className="contact-value">github.com/rakeshkanna17</div>
                        </div>
                    </a>
                    <div className="contact-item" style={{ cursor: 'default' }}>
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div>
                            <div className="contact-label">Location</div>
                            <div className="contact-value">Hyderabad, Telangana</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
