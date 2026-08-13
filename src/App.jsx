import "./App.css";
import Footer from "./Footer";

const CLUB_ADDRESS = "9 Cardinal Road, Greenwich, CT 06830";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Greenwich+Skating+Club%2C+Greenwich%2C+CT";

const APPLE_MAPS_URL =
  "https://maps.apple.com/?daddr=Greenwich+Skating+Club,+Greenwich,+CT";

const DIRECTIONS = [
  {
    highway: "I-95",
    direction: "South",
    exit: "Exit 4",
    steps: [
      "Take I-95 South to Exit 4.",
      "At the end of the ramp, turn right onto Indian Field Road.",
      "Follow Indian Field Road to the end at the Post Road (Route 1) and turn left.",
      "At the bottom of the hill, turn right onto Hillside Road.",
      "Follow Hillside Road to the end and turn right onto Fairfield Road.",
      "Make an immediate left onto Cardinal Road.",
      "Greenwich Skating Club will be on your right.",
    ],
  },
  {
    highway: "I-95",
    direction: "North",
    exit: "Exit 4",
    steps: [
      "Take I-95 North to Exit 4.",
      "At the bottom of the ramp, turn left onto Indian Field Road.",
      "Follow Indian Field Road to the end at the Post Road (Route 1) and turn left.",
      "At the bottom of the hill, turn right onto Hillside Road.",
      "Follow Hillside Road to the end and turn right onto Fairfield Road.",
      "Make an immediate left onto Cardinal Road.",
      "Greenwich Skating Club will be on your right.",
    ],
  },
  {
    highway: "Merritt Parkway",
    direction: "South",
    exit: "Exit 31",
    steps: [
      "Take the Merritt Parkway South to Exit 31 for North Street.",
      "Turn right off the ramp onto North Street.",
      "Continue on North Street and turn left onto Fairfield Road at the traffic light.",
      "Just after turning onto Fairfield Road, bear left to remain on Fairfield Road.",
      "Turn left onto Cardinal Road.",
      "Greenwich Skating Club will be on your right.",
    ],
  },
  {
    highway: "Merritt Parkway",
    direction: "North",
    exit: "Exit 31",
    steps: [
      "Take the Merritt Parkway North to Exit 31 for North Street.",
      "Turn left off the ramp onto North Street.",
      "Continue on North Street and turn left onto Fairfield Road at the traffic light.",
      "Just after turning onto Fairfield Road, bear left to remain on Fairfield Road.",
      "Turn left onto Cardinal Road.",
      "Greenwich Skating Club will be on your right.",
    ],
  },
];

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="inline-icon"
    >
      <path d="M12 21s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="button-icon"
    >
      <path d="m21 3-8.3 18-2.2-7.5L3 11.3 21 3Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="button-arrow"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function HighwayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="direction-icon"
    >
      <path d="M8.5 3 6 21" />
      <path d="M15.5 3 18 21" />
      <path d="M12 3v4" />
      <path d="M12 10v4" />
      <path d="M12 17v4" />
    </svg>
  );
}

function DirectionCard({ highway, direction, exit, steps, number }) {
  return (
    <article className="direction-card">
      <div className="direction-card__top">
        <div className="direction-card__icon-wrap">
          <HighwayIcon />
        </div>

        <div className="direction-card__heading">
          <span className="direction-card__eyebrow">
            Route {String(number).padStart(2, "0")}
          </span>

          <h3>
            From {highway} {direction}
          </h3>
        </div>

        <span className="exit-badge">{exit}</span>
      </div>

      <ol className="direction-list">
        {steps.map((step, index) => (
          <li key={step}>
            <span className="step-number">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

function App() {
  return (
    <>
      <main className="directions-page">
        <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1>Directions to the Club</h1>

            <p className="hero__description">
              Greenwich Skating Club is located on Cardinal Road near
              Greenwich High School, with convenient access from both I-95 and
              the Merritt Parkway.
            </p>

            <div className="address">
              <div className="address__icon">
                <LocationPinIcon />
              </div>

              <div>
                <span className="address__label">
                  Greenwich Skating Club
                </span>
                <span className="address__street">{CLUB_ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="content-width">
          <div className="location-grid">
            <div className="map-panel">
              <iframe
                className="map"
                title="Greenwich Skating Club location"
                src="https://www.google.com/maps?q=Greenwich+Skating+Club,+Greenwich,+CT&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="arrival-panel">
              <span className="section-eyebrow">Getting Here</span>

              <h2>Headed to Cardinal Road?</h2>

              <p>
                Use your preferred navigation app for live traffic conditions,
                road closures and the most current arrival time.
              </p>

              <div className="map-buttons">
                <a
                  className="map-button map-button--primary"
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <NavigationIcon />

                  <span>Google Maps</span>

                  <ArrowIcon />
                </a>

                <a
                  className="map-button map-button--secondary"
                  href={APPLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <NavigationIcon />

                  <span>Apple Maps</span>

                  <ArrowIcon />
                </a>
              </div>

              <div className="arrival-note">
                <div className="arrival-note__line" />

                <p>
                  <strong>Arrival tip:</strong> Once you turn onto Cardinal
                  Road, look for Greenwich Skating Club on the right.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="route-section">
        <div className="content-width">
          <div className="section-heading">
            <div>
              <h2>Choose Your Route</h2>
            </div>
          </div>

          <div className="directions-grid">
            {DIRECTIONS.map((route, index) => (
              <DirectionCard
                key={`${route.highway}-${route.direction}`}
                {...route}
                number={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </>
  );
}

export default App;