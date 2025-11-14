import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">🎧 Calm Voice</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#use-cases">For You</a></li>
          <li><a href="#testimonials">Stories</a></li>
          <li>
            <a
              href="https://yomiya.proksiyazilim.com"
              className="cta-btn"
            >
              Sign Up Free
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-icon">🎧</div>
        <h1>Your Words, Beautifully Spoken</h1>
        <p className="hero-subtitle">
          Transform any text into natural, calm speech. Listen while you work, learn, and grow.
          No stress, no hassle—just pure listening.
        </p>
        <div className="hero-buttons">
          <a
            href="https://yomiya.proksiyazilim.com"
            className="primary-btn"
          >
            Get Started Free
          </a>
          <button className="secondary-btn">See How It Works</button>
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="section-title">Why Choose Calm Voice?</h2>
        <p className="section-subtitle">Built for real people with real needs</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant & Effortless</h3>
            <p>
              Copy any text, paste, play. That's it. No complex setup, no learning curve.
              Just natural speech in seconds.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Beautiful Natural Voices</h3>
            <p>
              Choose from diverse, warm voices that sound genuinely human—not robotic.
              Control speed and tone to match your mood.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Supercharge Productivity</h3>
            <p>
              Listen to emails, articles, and documents while doing other things.
              Multitask like never before without sacrificing focus.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>Truly Accessible</h3>
            <p>
              Perfect for anyone—whether you're dyslexic, visually impaired,
              or simply prefer audio. Everyone deserves equal access.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Works Everywhere</h3>
            <p>
              Desktop, tablet, phone. Start on one device, continue on another.
              Your listening experience travels with you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Your Privacy Matters</h3>
            <p>
              Your texts stay yours. We don't store, track, or share what you listen to. Period.
            </p>
          </div>
        </div>
      </section>

      <section className="use-cases" id="use-cases">
        <h2 className="section-title">Perfect For Every Moment</h2>
        <p className="section-subtitle">Real workflows, real people</p>

        <div className="use-cases-grid">
          <div className="use-case">
            <h4>👨‍💼 Busy Professionals</h4>
            <h3>Stay Informed On The Go</h3>
            <p>
              Listen to reports, emails, and articles during your commute.
              Catch up on work without adding screen time to your day.
            </p>
          </div>

          <div className="use-case">
            <h4>📚 Students & Learners</h4>
            <h3>Learn Your Way</h3>
            <p>
              Review notes, read articles aloud, and absorb information differently.
              Perfect for different learning styles and retention.
            </p>
          </div>

          <div className="use-case">
            <h4>💪 Content Creators</h4>
            <h3>Quality Voice Overs</h3>
            <p>
              Generate professional-sounding voiceovers for videos, podcasts,
              and presentations. Fast, affordable, and always consistent.
            </p>
          </div>

          <div className="use-case">
            <h4>🌍 Non-Native Speakers</h4>
            <h3>Improve Your English</h3>
            <p>
              Hear proper pronunciation. Learn rhythm and intonation by listening
              to text read naturally. Build confidence through listening.
            </p>
          </div>

          <div className="use-case">
            <h4>👁️ Visual Impairment</h4>
            <h3>Access Everything</h3>
            <p>
              Never miss out. Listen to websites, documents, and articles with seamless
              accessibility. Designed with you in mind.
            </p>
          </div>

          <div className="use-case">
            <h4>🏠 At Home</h4>
            <h3>Relax & Absorb</h3>
            <p>
              Listen to your favorite blogs, recipes, or stories while cooking,
              cleaning, or unwinding. Turn any moment into learning time.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <h2 className="section-title">Real Stories From Real People</h2>
        <p className="section-subtitle">See how Calm Voice is changing lives</p>

        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "I discovered I actually love reading now. I listen to articles while I garden and
              it feels like a conversation with a friend. This app gave me back the joy of learning."
            </p>
            <div className="testimonial-author">Sarah Chen</div>
            <div className="testimonial-role">Marketing Manager</div>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "As someone with dyslexia, this has been life-changing. I can finally consume
              information at my own pace without the stress. It's not just accessible—
              it's actually enjoyable."
            </p>
            <div className="testimonial-author">Marcus Johnson</div>
            <div className="testimonial-role">Student</div>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "The voice quality is incredible. I use it for my YouTube videos now and people ask
              where I found this voice actor. Simple, professional, and so affordable."
            </p>
            <div className="testimonial-author">Emma Rodriguez</div>
            <div className="testimonial-role">Content Creator</div>
          </div>

          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "My daily commute transformed. Instead of scrolling, I'm learning. I've listened to
              12 books this year. My brain feels sharper than it's been in years."
            </p>
            <div className="testimonial-author">David Park</div>
            <div className="testimonial-role">Software Engineer</div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to Listen?</h2>
        <p>Join thousands who've transformed how they consume information.</p>
        <a
          href="https://yomiya.proksiyazilim.com"
          className="primary-btn"
          style={{
            background: 'white',
            color: '#2ecc71',
            border: 'none',
            display: 'inline-block',
          }}
        >
          Start Your Free Trial Today
        </a>
      </section>

      <footer>
        <p>&copy; 2025 Calm Voice. Made with care for real people.</p>
        <p
          style={{
            marginTop: '1rem',
            fontSize: '0.9rem',
          }}
        >
          <a href="https://yomiya.proksiyazilim.com/privacy">Privacy</a> •{' '}
          <a href="https://yomiya.proksiyazilim.com/terms">Terms</a> •{' '}
          <a href="https://yomiya.proksiyazilim.com">Contact</a> •{' '}
          <a href="https://yomiya.proksiyazilim.com">Blog</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
