const HERO_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80'

const INTERESTS = [
  {
    name: 'Laundromats',
    desc: 'Cash-flowing neighborhood laundry businesses with stable demand and clear operations.',
  },
  {
    name: 'Storage facilities',
    desc: 'Self-storage and related light industrial assets with durable occupancy patterns.',
  },
  {
    name: 'Food & beverage',
    desc: 'Juice bars, ice cream shops, and similar concepts with strong local followings.',
  },
  {
    name: 'Retail',
    desc: 'Other small retail businesses where seller knowledge and community trust still matter.',
  },
  {
    name: 'Multifamily homes',
    desc: 'Small multifamily residential properties that fit a patient, long-term ownership approach.',
  },
]

const APPROACH = [
  {
    num: '01',
    title: 'Direct relationships',
    body: 'We prefer speaking with owners who want a clean, respectful transition — not a drawn-out auction process.',
  },
  {
    num: '02',
    title: 'Seller financing',
    body: 'We structure acquisitions with direct seller financing so deals can close with shared alignment and practical terms.',
  },
  {
    num: '03',
    title: 'Steady stewardship',
    body: 'As a family office, we buy to hold and operate carefully — preserving what already works in the business or property.',
  },
]

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="hero__media" aria-hidden="true">
          <img
            src={HERO_IMAGE}
            alt=""
            width={2200}
            height={1467}
          />
          <div className="hero__veil" />
          <div className="hero__grain" />
        </div>

        <div className="hero__inner">
          <nav className="nav" aria-label="Primary">
            <div className="nav__brand">Husain Family Holdings</div>
            <div className="nav__links">
              <a href="#approach">Approach</a>
              <a href="#interests">Interests</a>
              <a href="#principals">Principals</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero__copy">
            <p className="hero__brand">Husain Family Holdings</p>
            <h1 className="hero__headline">
              Acquiring small businesses and multifamily through seller financing.
            </h1>
            <p className="hero__support">
              A family partnership seeking owner-operators ready for a thoughtful next chapter.
            </p>
            <div className="hero__cta">
              <a className="btn btn--gold" href="#contact">
                Start a conversation
              </a>
              <a className="btn btn--outline" href="#interests">
                See what we buy
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--mist" id="approach">
        <div className="section__inner">
          <p className="section__eyebrow">How we buy</p>
          <h2 className="section__title">Direct seller financing, built for owners.</h2>
          <p className="section__lead">
            We look for healthy small businesses and multifamily assets where a flexible, owner-led sale
            creates a better outcome than a conventional bank-only path.
          </p>

          <div className="approach">
            {APPROACH.map((item) => (
              <article className="approach__item" key={item.num}>
                <span className="approach__num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green" id="interests">
        <div className="section__inner">
          <p className="section__eyebrow">Areas of interest</p>
          <h2 className="section__title">Where we focus.</h2>
          <p className="section__lead">
            Practical, local businesses and residential assets with clear cash flow and room for careful ownership.
          </p>

          <div className="interests">
            {INTERESTS.map((item) => (
              <article className="interest" key={item.name}>
                <h3 className="interest__name">{item.name}</h3>
                <p className="interest__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" id="principals">
        <div className="section__inner">
          <p className="section__eyebrow">Leadership</p>
          <h2 className="section__title">The principals.</h2>
          <p className="section__lead">
            Two siblings bringing clinical discipline and commercial deal sense to every acquisition.
          </p>

          <div className="principals">
            <article className="principal">
              <p className="principal__role">Co-Principal</p>
              <h3 className="principal__name">Dr. Husain</h3>
              <p className="principal__title">Anesthesiologist</p>
              <p className="principal__bio">
                Brings rigorous judgment, risk awareness, and a steady operating mindset shaped by
                medicine — focused on durable businesses and responsible ownership.
              </p>
            </article>

            <article className="principal">
              <p className="principal__role">Co-Principal</p>
              <h3 className="principal__name">Taha Husain</h3>
              <p className="principal__title">Tech Sales Executive</p>
              <p className="principal__bio">
                Leads outreach and deal structuring with a background in technology sales —
                translating owner goals into clear, seller-financed paths to close.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ background: 'linear-gradient(180deg, #f7faf7, #eef5f0)' }}>
        <div className="section__inner contact">
          <div>
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Tell us about your business or property.</h2>
            <p className="contact__note">
              If you are an owner considering a sale — or an advisor with an off-market opportunity —
              we would welcome a discreet conversation.
            </p>
          </div>

          <div className="contact__actions">
            <a className="contact__email" href="mailto:hustaha@gmail.com">
              hustaha@gmail.com
            </a>
            <a className="btn btn--green" href="mailto:hustaha@gmail.com?subject=Husain%20Family%20Holdings%20%E2%80%94%20Acquisition%20Inquiry">
              Email the family office
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <strong>Husain Family Holdings</strong>
        <span>Small business &amp; multifamily acquisitions via seller financing.</span>
      </footer>
    </div>
  )
}
