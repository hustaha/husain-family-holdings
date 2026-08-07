import FamilyCrest from './components/FamilyCrest'

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

const ZERO_DOWN_ROWS = [
  { label: 'Business', value: 'Neighborhood laundromat (illustrative)' },
  { label: 'Agreed purchase price', value: '$400,000' },
  { label: 'Cash due at closing', value: '$0' },
  { label: 'Buyer cash upfront', value: 'Zero dollars' },
  { label: 'Seller payment type', value: 'Royalty on gross revenue' },
  { label: 'Royalty rate', value: '10% of monthly gross sales' },
  { label: 'Assumed monthly gross', value: '$40,000' },
  { label: 'Est. monthly payback to seller', value: '$4,000' },
  { label: 'Payback period to $400k', value: '~100 months (about 8.3 years)' },
  { label: 'Hard stop / term cap', value: '120 months (10 years) max' },
  { label: 'Early payoff', value: 'Allowed anytime at remaining balance' },
]

const TEN_PERCENT_ROWS = [
  { label: 'Asset', value: '8-unit multifamily property (illustrative)' },
  { label: 'Agreed purchase price', value: '$1,200,000' },
  { label: 'Buyer cash at closing', value: '$120,000 (10% down)' },
  { label: 'Seller-financed balance', value: '$1,080,000' },
  { label: 'Note structure', value: 'Fixed monthly principal & interest' },
  { label: 'Interest rate', value: '6.5% amortized' },
  { label: 'Term', value: '7 years (84 months)' },
  { label: 'Est. monthly payment to seller', value: '~$16,050' },
  { label: 'Balloon at maturity', value: 'Remaining balance due or refinance' },
  { label: 'Assumed monthly NOI support', value: '~$9,500–$11,000 rent roll cushion via ops plan' },
  { label: 'Why this shape', value: 'Seller gets cash now + strong monthly income; buyer preserves liquidity' },
]

function DealTable({ rows }) {
  return (
    <dl className="deal__table">
      {rows.map((row) => (
        <div className="deal__row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

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
            <div className="nav__brand">
              <FamilyCrest className="nav__crest" size={42} />
              <span>Husain Family Holdings</span>
            </div>
            <div className="nav__links">
              <a href="#approach">Approach</a>
              <a href="#example">Financing</a>
              <a href="#interests">Interests</a>
              <a href="#principals">Principals</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero__copy">
            <div className="hero__crest-wrap">
              <FamilyCrest className="hero__crest" size={112} />
            </div>
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
              <a className="btn btn--outline" href="#example">
                See financing examples
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

      <section className="section section--deal" id="example">
        <div className="section__inner">
          <p className="section__eyebrow">Seller financing examples</p>
          <h2 className="section__title">How a deal can be structured.</h2>
          <p className="section__lead">
            Illustrative only — real terms are tailored to the asset, cash flow, and the seller’s goals.
            Below are two common shapes: zero cash at close, and a modest down payment with a seller note.
          </p>

          <div className="deal">
            <div className="deal__intro">
              <FamilyCrest size={88} />
              <div>
                <p className="deal__eyebrow">Example A</p>
                <h3 className="deal__name">$0 down — royalty payback</h3>
                <p>
                  Instead of a large check at closing, the seller receives an ongoing share of revenue
                  until the purchase price is repaid — or until a maximum term is reached.
                </p>
              </div>
            </div>

            <DealTable rows={ZERO_DOWN_ROWS} />

            <div className="deal__math">
              <div>
                <span className="deal__math-label">Year-one seller receipts</span>
                <strong>~$48,000</strong>
                <span className="deal__math-note">$4,000 × 12 months</span>
              </div>
              <div>
                <span className="deal__math-label">Full principal path</span>
                <strong>~$400,000</strong>
                <span className="deal__math-note">via royalties over ~8.3 years</span>
              </div>
              <div>
                <span className="deal__math-label">Buyer cash at close</span>
                <strong>$0</strong>
                <span className="deal__math-note">zero-dollar upfront example</span>
              </div>
            </div>
          </div>

          <div className="deal deal--second">
            <div className="deal__intro">
              <div className="deal__badge" aria-hidden="true">10%</div>
              <div>
                <p className="deal__eyebrow">Example B</p>
                <h3 className="deal__name">10% down — multifamily seller note</h3>
                <p>
                  A small cash down payment at closing, with the balance carried by the seller as a
                  fixed monthly note — useful when an owner wants liquidity now and reliable income after.
                </p>
              </div>
            </div>

            <DealTable rows={TEN_PERCENT_ROWS} />

            <div className="deal__math">
              <div>
                <span className="deal__math-label">Cash to seller at close</span>
                <strong>$120,000</strong>
                <span className="deal__math-note">10% of $1.2M purchase price</span>
              </div>
              <div>
                <span className="deal__math-label">Financed by seller</span>
                <strong>$1.08M</strong>
                <span className="deal__math-note">6.5% · 7-year term</span>
              </div>
              <div>
                <span className="deal__math-label">Est. monthly to seller</span>
                <strong>~$16,050</strong>
                <span className="deal__math-note">principal &amp; interest on the note</span>
              </div>
            </div>

            <p className="deal__disclaimer">
              Example assumptions for clarity. We also consider royalties, step-down payments,
              interest-only periods, balloon balances, and consulting transitions — whatever fits a fair
              deal for both sides.
            </p>
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
          <div className="principals-head">
            <FamilyCrest size={72} />
            <div>
              <p className="section__eyebrow">Leadership</p>
              <h2 className="section__title">The principals.</h2>
              <p className="section__lead" style={{ marginBottom: 0 }}>
                Two siblings bringing clinical discipline and enterprise technology judgment to every acquisition.
              </p>
            </div>
          </div>

          <div className="principals">
            <article className="principal">
              <div className="principal__photo" aria-label="Photo placeholder for Dr. Sanaa Husain">
                <span>Photo</span>
                <span className="principal__photo-hint">Dr. Sanaa Husain</span>
              </div>
              <p className="principal__role">Co-Principal</p>
              <h3 className="principal__name">Dr. Sanaa Husain</h3>
              <p className="principal__title">Anesthesiologist</p>
              <p className="principal__bio">
                Brings rigorous judgment, risk awareness, and a steady operating mindset shaped by
                medicine — focused on durable businesses and responsible ownership.
              </p>
            </article>

            <article className="principal">
              <div className="principal__photo" aria-label="Photo placeholder for Co-Principal">
                <span>Photo</span>
                <span className="principal__photo-hint">Technology Executive</span>
              </div>
              <p className="principal__role">Co-Principal</p>
              <h3 className="principal__name">Technology Executive</h3>
              <p className="principal__bio">
                An enterprise technology executive focused on customer outcomes, complex commercial
                strategy, and long-term partnership. Leads outreach, diligence framing, and deal
                structuring — turning owner goals into clear, seller-financed paths to close.
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
              we would welcome a discreet conversation. Booking via Calendly coming soon.
            </p>
          </div>

          <div className="contact__actions">
            {/* Replace href with your Calendly link when ready */}
            <a
              className="btn btn--green"
              href="#contact"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
            >
              Schedule on Calendly
            </a>
            <p className="contact__soon">Calendly link will go here</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__brand">
          <FamilyCrest size={36} />
          <strong>Husain Family Holdings</strong>
        </div>
        <span>Small business &amp; multifamily acquisitions via seller financing.</span>
      </footer>
    </div>
  )
}
