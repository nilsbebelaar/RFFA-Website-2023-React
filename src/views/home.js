import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rotterdam Festival for Athletics</title>
        <meta
          name="description"
          content="Kom op zaterdag 9 september 2023 naar het Rotterdam Festival for Athletics en beleef atletiek zoals nooit tevoren!"
        />
        <meta property="og:title" content="Rotterdam Festival for Athletics" />
        <meta
          property="og:description"
          content="Kom op zaterdag 9 september 2023 naar het Rotterdam Festival for Athletics en beleef atletiek zoals nooit tevoren!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e1e5ddc2-2ace-48ef-b801-2d2d7b336274/b09ad99e-e5b7-4899-8cf0-069267cca844?org_if_sml=1"
        />
      </Helmet>
      <div>
        <Script
          html={`<style>
    .section-title:before {
        position: absolute;
        content: '';
        left: 15px;
        bottom: 12px;
        width: 64px;
        height: 2px;
        background-color: var(--dl-color-primary-700);
    }

    .section-title:after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 2px;
        width: 64px;
        height: 2px;
        background-color: var(--dl-color-primary-700);
    }

    .section-title:before,
    .section-title:after {
        left: 50%;
        margin-left: -50px;
    }

    .section-title:after {
        margin-left: -30px;
    }

    .bg-blue .section-title:before,
    .bg-blue .section-title:after {
        background-color: var(--dl-color-gray-white);
    }

    .bg-green .section-title {
        color: var(--dl-color-primary-700)
    }
</style>`}
        ></Script>
      </div>
      <section id="top" className="home-hero">
        <video
          src="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.mp4"
          loop
          muted
          poster="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.webp"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div>
          <Script
            html={`<style>
  .navbar-container .button {
    padding: 2px;
  }
</style>
`}
          ></Script>
        </div>
        <div id="navbar-container" className="home-container01">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/logo%20rffa_white_border.svg"
                className="home-branding"
              />
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span className="navbar-button home-text">Festival</span>
                <span className="navbar-button">Meedoen</span>
                <a href="#tijdschema" className="home-link navbar-button">
                  Tijdschema
                </a>
                <span className="navbar-button">Meet &amp; Greet</span>
                <a href="#meehelpen" className="home-link01 navbar-button">
                  Meehelpen
                </a>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <img
                    alt="image"
                    src="/logo%20rffa_white_border.svg"
                    className="home-logo"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <a href="#festival" className="home-link02">
                    Festival
                  </a>
                  <span className="home-text003">Meedoen</span>
                  <a href="#tijdschema" className="home-link03">
                    Tijdschema
                  </a>
                  <span className="home-text004">Meet &amp; Greet</span>
                  <a href="#meehelpen" className="home-link04">
                    Meehelpen
                  </a>
                </nav>
              </div>
              <div className="home-icon-group">
                <a
                  href="https://www.instagram.com/rffa_rotterdam/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/rffarotterdam/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </header>
        </div>
        <div>
          <Script
            html={`<!-- Style for sticky navbar -->
<style>
  .navbar-scrolled {
    position: -webkit-fixed;
    position: fixed !important;
    animation: navbar-slide-down 1s both;
    background-color: var(--dl-color-primary-300);
  }
  .navbar-scrolled .home-branding {
    width: var(--dl-size-size-xlarge);
  }
  @media (max-width: 479px) {
    .navbar-scrolled .home-branding {
      width: var(--dl-size-size-large);
    }
  }

  @keyframes navbar-slide-down {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
</style>

<script>
  const nav = document.getElementById("navbar-container");
  const header = document.querySelector(".home-hero");
  const navHeight = nav.getBoundingClientRect().height;

  function updateNavColor(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("navbar-scrolled");
      nav.classList.remove("navbar-top");
    } else {
      nav.classList.add("navbar-top");
      nav.classList.remove("navbar-scrolled");
    }
  }

  const headerObserver = new IntersectionObserver(updateNavColor, {
    root: null,
    threshold: 0,
    rootMargin: \`-\${navHeight}px\`,
  });

  headerObserver.observe(header);
</script>
`}
          ></Script>
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <div data-thq="thq-burger-menu" className="home-burger-menu1">
            <div className="home-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-icon08" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container02">
                <img
                  alt="image"
                  src="/logo%20rffa_white_border.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text005">About</span>
                <span className="home-text006">Features</span>
                <span className="home-text007">Pricing</span>
                <span className="home-text008">Team</span>
                <span className="home-text009">Blog</span>
              </nav>
              <div className="home-container03">
                <button className="home-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon11">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon13">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon15">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span className="home-text010">Beleef atletiek</span>
                <span className="home-text011">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text012">op het</span>
                <br className="home-text013"></br>
                <span className="home-text014">
                  Rotterdam Festival for Athletics
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div id="festival" className="bg-blue section">
        <div className="home-container04 section-container">
          <section className="home-note">
            <h1 className="section-title">9 september 2023</h1>
            <h2 className="home-caption">
              <span className="home-text016">
                Hét atletiekfeest van Rotterdam waarbij atletiek en de sfeer van
                een festival ultiem samenkomen.
              </span>
              <br></br>
              <br className="home-text018"></br>
              <span className="home-text019">
                Doe zelf mee, kijk naar nationale topatleten of leer de fijne
                kneepjes van de beste trainers van het land!
              </span>
              <br className="home-text020"></br>
            </h2>
          </section>
          <section className="home-statistics">
            <div className="home-content">
              <div className="home-stat">
                <h3 className="home-header01">Beleef</h3>
                <span className="home-caption1">
                  <span>Strijd om een Cup, volg een clinic!</span>
                  <br></br>
                </span>
              </div>
              <div className="home-stat1">
                <h3 className="home-header02">Kijk</h3>
                <span className="home-caption2">
                  Nationale top, foto&apos;s en handtekening!
                </span>
              </div>
              <div className="home-stat2">
                <h3 className="home-header03">Geniet</h3>
                <span className="home-caption3">
                  Hapjes en drankjes op het middenveld!
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="tijdschema" className="section bg-blue">
        <div className="section-container">
          <h2 className="section-title">TIJDSCHEMA (ONDER VOORBEHOUD)</h2>
          <div>
            <Script
              html={`<style>
  .timetable-menu-button.active {
    color: var(--dl-color-primary-500);
    background-color: var(--dl-color-primary-300);
  }
</style>

<script>
  const buttons = document.querySelectorAll(".timetable-menu-button");
  const elements = document.querySelectorAll(".timetable");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      button.classList.add("active");

      // Hide all elements
      elements.forEach((el) => {
        el.style.opacity = 0;
        setTimeout(() => {
          el.style.display = "none";
        }, 150);
      });

      // Show the clicked element with a delay
      setTimeout(() => {
        elements[index].style.opacity = 1;
        elements[index].style.display = "block";
      }, 150); // 150 milliseconds, matching the fade duration
    });
  });

  // Initialize by showing the first element on load
  elements[0].style.display = "block";
  elements[0].style.opacity = 1;
</script>
`}
            ></Script>
          </div>
          <div className="home-container06">
            <div className="home-timetable-menu">
              <div className="home-knop-1 timetable-menu-button active">
                <h1 className="home-text024 TimetableMenuTitle">
                  Hoofdprogramma
                </h1>
                <span className="TimetableMenuSubtitle">
                  Met nationale topatleten
                </span>
              </div>
              <div className="home-knop-2 timetable-menu-button">
                <h1 className="home-text026 TimetableMenuTitle">RFFA Cups</h1>
                <span>Wedstrijden voor iedereen</span>
              </div>
              <div className="home-knop-3 timetable-menu-button">
                <h1 className="home-text028 TimetableMenuTitle">
                  RFFA Clinics
                </h1>
                <span>Leer van topatleten</span>
              </div>
              <div className="home-knop-4 timetable-menu-button">
                <h1 className="home-text030 TimetableMenuTitle">
                  Estafette &amp; Run2Day
                </h1>
                <span>4x800m &amp; 5000m</span>
              </div>
            </div>
            <div className="home-timetables">
              <div id="timetable-1" className="timetable">
                <div className="home-row timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container07">
                    <span className="timetable-time">Time</span>
                    <div className="home-container08">
                      <h4 className="timetable-title">100 Meter</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mannen</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row01 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container09">
                    <span className="timetable-time">Time</span>
                    <div className="home-container10">
                      <h4 className="timetable-title">100 Meter</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Vrouwen</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row02 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_horden.svg"
                    className="timetable-image"
                  />
                  <div className="home-container11">
                    <span className="timetable-time">Time</span>
                    <div className="home-container12">
                      <h4 className="timetable-title">110 Meter Horden</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mannen</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row03 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_horden.svg"
                    className="timetable-image"
                  />
                  <div className="home-container13">
                    <span className="timetable-time">Time</span>
                    <div className="home-container14">
                      <h4 className="timetable-title">100 Meter Horden</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Vrouwen</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row04 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container15">
                    <span className="timetable-time">Time</span>
                    <div className="home-container16">
                      <h4 className="timetable-title">300 Meter</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row05 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_hoog.svg"
                    className="timetable-image"
                  />
                  <div className="home-container17">
                    <span className="timetable-time">Time</span>
                    <div className="home-container18">
                      <h4 className="timetable-title">Hoogspringen</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row06 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_polshoog.svg"
                    className="timetable-image"
                  />
                  <div className="home-container19">
                    <span className="timetable-time">Time</span>
                    <div className="home-container20">
                      <h4 className="timetable-title">Polsstokhoogspringen</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row07 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_estafette.svg"
                    className="timetable-image"
                  />
                  <div className="home-container21">
                    <span className="timetable-time">Time</span>
                    <div className="home-container22">
                      <h4 className="timetable-title">Zweedse Estafette</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row08 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_kogel.svg"
                    className="timetable-image"
                  />
                  <div className="home-container23">
                    <span className="timetable-time">Time</span>
                    <div className="home-container24">
                      <h4 className="timetable-title">Kogelstoten</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="timetable-2" className="timetable">
                <div className="home-row09 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_ver.svg"
                    className="timetable-image"
                  />
                  <div className="home-container25">
                    <span className="timetable-time">Time</span>
                    <div className="home-container26">
                      <h4 className="timetable-title">
                        RFFA jumpCUP - Group A
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row10 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_ver.svg"
                    className="timetable-image"
                  />
                  <div className="home-container27">
                    <span className="timetable-time">Time</span>
                    <div className="home-container28">
                      <h4 className="timetable-title">
                        RFFA jumpCUP - Group B
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row11 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container29">
                    <span className="timetable-time">Time</span>
                    <div className="home-container30">
                      <h4 className="timetable-title">
                        RFFA sprintCUP - Series
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row12 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container31">
                    <span className="timetable-time">Time</span>
                    <div className="home-container32">
                      <h4 className="timetable-title">
                        RFFA sprintCUP - Finale
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row13 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container33">
                    <span className="timetable-time">Time</span>
                    <div className="home-container34">
                      <h4 className="timetable-title">RFFA runCUP - Group A</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row14 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_sprint.svg"
                    className="timetable-image"
                  />
                  <div className="home-container35">
                    <span className="timetable-time">Time</span>
                    <div className="home-container36">
                      <h4 className="timetable-title">RFFA runCUP - Group B</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row15 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_kogel.svg"
                    className="timetable-image"
                  />
                  <div className="home-container37">
                    <span className="timetable-time">Time</span>
                    <div className="home-container38">
                      <h4 className="timetable-title">
                        RFFA throwCUP - Group A
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row16 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_kogel.svg"
                    className="timetable-image"
                  />
                  <div className="home-container39">
                    <span className="timetable-time">Time</span>
                    <div className="home-container40">
                      <h4 className="timetable-title">
                        RFFA throwCUP - Group B
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="timetable-3" className="timetable">
                <div className="home-row17 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_clinic.svg"
                    className="timetable-image"
                  />
                  <div className="home-container41">
                    <span className="timetable-time">13:05</span>
                    <div className="home-container42">
                      <h4 className="timetable-title">Clinic ronde #1</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row18 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_clinic.svg"
                    className="timetable-image"
                  />
                  <div className="home-container43">
                    <span className="timetable-time">14:05</span>
                    <div className="home-container44">
                      <h4 className="timetable-title">Clinic ronde #2</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row19 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_clinic.svg"
                    className="timetable-image"
                  />
                  <div className="home-container45">
                    <span className="timetable-time">15:05</span>
                    <div className="home-container46">
                      <h4 className="timetable-title">Clinic ronde #3</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row20 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_clinic.svg"
                    className="timetable-image"
                  />
                  <div className="home-container47">
                    <span className="timetable-time">16:05</span>
                    <div className="home-container48">
                      <h4 className="timetable-title">Clinic ronde #4</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Link</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="timetable-3" className="timetable">
                <div className="home-row21 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_clinic.svg"
                    className="timetable-image"
                  />
                  <div className="home-container49">
                    <span className="timetable-time">Time</span>
                    <div className="home-container50">
                      <h4 className="timetable-title">4x800m</h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Teams</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-row22 timetable-row">
                  <img
                    alt="image"
                    src="/events/sports_ver.svg"
                    className="timetable-image"
                  />
                  <div className="home-container51">
                    <span className="timetable-time">Time</span>
                    <div className="home-container52">
                      <h4 className="timetable-title">
                        5000m Finale Run2Day Baancircuit 2023
                      </h4>
                      <button type="button" className="timetable-button">
                        <span>
                          <span>Mixed</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container53">
        <section className="home-growth">
          <div className="home-content1">
            <div className="home-header04">
              <div className="home-header05">
                <h2 className="home-heading1">
                  <span>
                    Multiverse optimized for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text102">growth.</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="home-caption5">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-testimonial">
              <div className="home-content2">
                <span className="home-text104">Testimonial</span>
                <p className="home-text105">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="home-information">
                <div className="home-author">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-icon17"
                  />
                  <span className="home-name">Andrew Gonzales</span>
                </div>
                <img alt="image" src="/logoipsum.svg" className="home-from" />
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-square"></div>
            <img alt="image" src="/growth-1400w.png" className="home-image24" />
          </div>
        </section>
      </div>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image25"
          />
        </div>
        <div className="home-content3">
          <div className="home-header06">
            <div className="home-header-container1">
              <div className="home-header07">
                <h2 className="home-heading2">
                  <span>A worlds class </span>
                  <span className="home-text107">experience</span>
                </h2>
              </div>
              <p className="home-caption6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text108">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text109">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text110">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text111">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial1">
            <div className="home-content4">
              <span className="home-text112">Testimonial</span>
              <p className="home-text113">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon26"
                />
                <span className="home-name1">Cory Smith</span>
              </div>
              <img alt="image" src="/logoipsum-2.svg" className="home-from1" />
            </div>
          </div>
        </div>
      </section>
      <section id="meehelpen" className="section bg-blue">
        <div className="section-container">
          <h2 className="section-title">Meehelpen</h2>
          <img
            alt="image"
            src="/jury-600w.webp"
            loading="lazy"
            className="home-image26"
          />
          <div className="home-container55">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdnJjYTOCFjt-RaE2ZVklgpf5a1C7eCsnynX_MOnzpN-ib48A/viewform?embedded=true"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              className="home-iframe"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="section bg-green">
        <div className="section-container">
          <div className="home-header08">
            <h2 className="section-title">Veel gestelde vragen</h2>
          </div>
          <div className="home-content5">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header09">Kan ik me al inschrijven?</h3>
                <p className="home-content6">
                  <span>
                    Stay tuned! Binnenkort komt op deze website meer informatie.
                    Volg ons ook op
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.instagram.com/rffa_rotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link30"
                  >
                    Instagram
                  </a>
                  <span>
                    , en
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.facebook.com/rffarotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link31"
                  >
                    Facebook
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </a>
                  <span>om niks te missen!</span>
                </p>
              </div>
              <div className="home-element1">
                <h3 className="home-header10">
                  Welke topsporters komen er naar het RFFA?
                </h3>
                <p className="home-content7">
                  <span>
                    Dat is nog een verrassing! Hou onze
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.instagram.com/rffa_rotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link32"
                  >
                    Instagram
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </a>
                  <span>in de gaten om als eerste op de hoogte te zijn.</span>
                </p>
              </div>
              <div className="home-element2">
                <h3 className="home-header11">Welke onderdelen kan ik doen?</h3>
                <p className="home-content8">
                  We zijn druk aan het plannen hoe we zo veel mogelijk aan
                  kunnen bieden aan zoveel mogelijk deelnemers. Sowieso zal je
                  kunnen strijden in de Sprintcup (sprint), Werpcup
                  (kogelstoten) of Springcup (verspringen).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container57">
        <div>
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
        <footer className="home-footer">
          <div className="home-container58">
            <img
              alt="image"
              src="/logo%20rffa_white_border.svg"
              className="home-image27"
            />
            <span className="home-text119">
              Het Rotterdam Festival for Athletics is een initiatief voor een
              jaarlijks atletiekfeest van PAC Rotterdam en Rotterdam Atletiek.
            </span>
          </div>
          <span className="home-text120">
            © 2023 Rotterdam Festival for Athletics - All rights reserved
          </span>
          <div className="home-column1">
            <span className="home-header12">Social</span>
            <div className="home-list">
              <a
                href="https://www.instagram.com/rffa_rotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link33"
              >
                <div className="home-container59">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon27"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="home-text121">Instagram</span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/rffarotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link34"
              >
                <div className="home-container60">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon29"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="home-text122">Facebook</span>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
