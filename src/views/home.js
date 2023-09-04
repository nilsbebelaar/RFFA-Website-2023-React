import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MeedoenCard from '../components/meedoen-card'
import TimetableRow1 from '../components/timetable-row1'
import TimetableRow0 from '../components/timetable-row0'
import TimetableRow4 from '../components/timetable-row4'
import TimetableRowclinic from '../components/timetable-rowclinic'
import MeetGreetCard from '../components/meet-greet-card'
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e1e5ddc2-2ace-48ef-b801-2d2d7b336274/f34e9a89-f8fc-4d78-a54a-c2451cf80675?org_if_sml=1"
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
        color: var(--dl-color-primary-700);
        font-weight: 700;
    }
</style>`}
        ></Script>
      </div>
      <section id="top" className="home-video">
        <video
          src="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.mp4"
          loop
          muted
          poster="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.webp"
          preload="auto"
          autoPlay
          playsInline
          className="home-video1"
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
                src="/rffa_logo_website.svg"
                className="home-branding"
              />
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a href="#festival" className="home-link navbar-button">
                  Festival
                </a>
                <a href="#meedoen" className="home-link01 navbar-button">
                  Meedoen
                </a>
                <a href="#tijdschema" className="home-link02 navbar-button">
                  Tijdschema
                </a>
                <a href="#meet-greet" className="home-link03 navbar-button">
                  Meet &amp; Greet
                </a>
                <a href="#meehelpen" className="home-link04 navbar-button">
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
                    src="/rffa_logo_website.svg"
                    className="home-logo"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <a href="#festival" className="home-link05">
                    Festival
                  </a>
                  <a href="#meedoen" className="home-link06">
                    Meedoen
                  </a>
                  <a href="#tijdschema" className="home-link07">
                    Tijdschema
                  </a>
                  <a href="#meet-greet" className="home-link08">
                    Meet &amp; Greet
                  </a>
                  <a href="#meehelpen" className="home-link09">
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
  const header = document.getElementById("top");
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
                  src="/rffa_logo_website.svg"
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
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
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
                <span className="home-text05">Beleef atletiek</span>
                <span className="home-text06">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text07">op het</span>
                <br className="home-text08"></br>
                <span className="home-text09">
                  Rotterdam Festival for Athletics
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div id="festival" className="bg-blue section">
        <div className="section-container">
          <section>
            <h1 className="home-text10 section-title">
              <span className="home-text11">9 september 2023</span>
              <br></br>
              <span className="home-text13">13:00 - 17:30</span>
              <br></br>
              <span>Sportcomplex Nenijto</span>
              <br></br>
            </h1>
            <p className="head-content">
              <span>
                Hét atletiekfeest van Rotterdam waarbij atletiek en de sfeer van
                een festival ultiem samenkomen.
              </span>
              <br></br>
              <br></br>
              <span>
                Doe zelf mee, kijk naar nationale topatleten en leer de fijne
                kneepjes van de beste trainers van het land!
              </span>
            </p>
          </section>
          <section className="home-statistics">
            <div className="home-content">
              <div className="home-stat">
                <h3 className="home-header1">Beleef</h3>
                <span className="home-caption">
                  <span>Strijd om een Cup, volg een clinic!</span>
                  <br></br>
                </span>
              </div>
              <div className="home-stat1">
                <h3 className="home-header2">Kijk</h3>
                <span className="home-caption1">
                  Nationale top, foto&apos;s en handtekening!
                </span>
              </div>
              <div className="home-stat2">
                <h3 className="home-header3">Geniet</h3>
                <span className="home-caption2">
                  Hapjes en drankjes op het middenveld!
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="meedoen" className="bg-green section">
        <div className="section-container">
          <h1 className="home-text24 section-title">ZELF MEEDOEN</h1>
          <div className="home-gallery">
            <MeedoenCard
              Title="Strijd mee"
              image_alt="sprint"
              image_src="/sprintcup.webp"
              Description="Doe mee met de sprintCUP, runCUP, jumpCUP of throwCUP. Ontdek wie van jouw vrienden het beste is met 60 meter sprint, verspringen, 600 meter of kogelstoten."
              rootClassName="rootClassName"
            ></MeedoenCard>
            <MeedoenCard
              Title="Atletiekclinics"
              image_alt="clinic steeple"
              image_src="/clinic_4.webp"
              Description="Krijg nieuwe technieken aangeleerd van toptrainers en talenten uit de atletiek. Er zijn 8 verschillende clinics verspreid over 4 blokken van 30 minuten."
              rootClassName="rootClassName1"
            ></MeedoenCard>
            <MeedoenCard
              Title="Estafette"
              image_alt="4x800m estafette"
              image_src="/estafette.webp"
              Description="Schrijf je als team in voor de 4x800m estafette. Welk team komt na 8 rondes als eerst over de finishlijn?"
              rootClassName="rootClassName2"
            ></MeedoenCard>
          </div>
        </div>
      </div>
      <div id="tijdschema" className="bg-blue section">
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
          <div className="home-container07">
            <div className="home-timetable-menu">
              <div className="home-container08">
                <div className="home-knop-1 timetable-menu-button active">
                  <h1 className="timetable-menu-title">Hoofdprogramma</h1>
                  <span className="timetable-menu-subtitle">
                    Met nationale topatleten
                  </span>
                </div>
                <div className="home-knop-2 timetable-menu-button">
                  <h1 className="timetable-menu-title">RFFA Cups</h1>
                  <span className="timetable-menu-subtitle">
                    Wedstrijden voor iedereen
                  </span>
                </div>
              </div>
              <div className="home-container09">
                <div className="home-knop-3 timetable-menu-button">
                  <h1 className="timetable-menu-title">RFFA Clinics</h1>
                  <span className="timetable-menu-subtitle">
                    Leer van topatleten
                  </span>
                </div>
                <div className="home-knop-4 timetable-menu-button">
                  <h1 className="timetable-menu-title">
                    Estafette &amp; Run2Day
                  </h1>
                  <span className="timetable-menu-subtitle">
                    4x800m &amp; 5000m
                  </span>
                </div>
              </div>
            </div>
            <div className="home-timetables">
              <div id="timetable-1" className="timetable">
                <TimetableRow1
                  Time="13:15"
                  Title="Hoogspringen"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653876/13/"
                  Link_text="Mixed"
                  image_src="/events/hoog.svg"
                ></TimetableRow1>
                <TimetableRow1
                  Time="13:45"
                  Title="100 Meter Horden"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653879/50/"
                  Link_text="Vrouwen"
                  image_src="/events/horden.svg"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:00"
                  Title="110 Meter Horden"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653873/51/"
                  Link_text="Mannen"
                  image_src="/events/horden.svg"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:15"
                  Title="100 Meter"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653872/12/"
                  Link_text="Mannen"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:25"
                  Title="Kogelstoten"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653881/2/"
                  Link_text="Mixed"
                  image_src="/events/kogel.svg"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:35"
                  Title="100 Meter"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653878/12/"
                  Link_text="Vrouwen"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:40"
                  Title="Polsstokhoogspringen"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653877/49/"
                  Link_text="Mixed"
                  image_src="/events/pols.svg"
                ></TimetableRow1>
                <TimetableRow1
                  Time="15:15"
                  Title="300 Meter"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848975/67/"
                  Link_text="Mixed"
                ></TimetableRow1>
                <TimetableRow1
                  Time="16:10"
                  Title="Zweedse Estafette"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/653875/77/"
                  Link_text="Mixed"
                  image_src="/events/estafette.svg"
                ></TimetableRow1>
                <TimetableRow0
                  Time="16:30"
                  Title="Prijsuitreiking"
                  image_src="/events/rffa_cup.svg"
                  rootClassName="timetable-row0-root-class-name"
                ></TimetableRow0>
              </div>
              <div id="timetable-2" className="timetable">
                <TimetableRow1
                  Time="13:00"
                  Title="RFFA sprintCUP (60m)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848981/4169/"
                  Link_text="Series"
                  image_src="/events/sprint.svg"
                  rootClassName="timetable-row1-root-class-name2"
                ></TimetableRow1>
                <TimetableRow1
                  Time="13:10"
                  Title="RFFA throwCUP (Kogel)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848990/4171/"
                  Link_text="Group A"
                  image_src="/events/kogel.svg"
                  rootClassName="timetable-row1-root-class-name5"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:10"
                  Title="RFFA jumpCUP (Ver)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848988/4170/"
                  Link_text="Group A"
                  image_src="/events/ver.svg"
                  rootClassName="timetable-row1-root-class-name"
                ></TimetableRow1>
                <TimetableRow1
                  Time="14:45"
                  Title="RFFA runCUP (600m)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/856417/4256/"
                  Link_text="Group A"
                  image_src="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name4"
                ></TimetableRow1>
                <TimetableRow4
                  Time="15:25"
                  Title="RFFA sprintCUP Finales (60m)"
                  image_src="/events/sprint.svg"
                  link_url_1="https://www.atletiek.nu/wedstrijd/startlijst/848982/4172/"
                  link_url_2="https://www.atletiek.nu/wedstrijd/startlijst/848983/4172/"
                  link_url_3="https://www.atletiek.nu/wedstrijd/startlijst/848985/4172/"
                  link_url_4="https://www.atletiek.nu/wedstrijd/startlijst/848986/4172/"
                  Link_text_1="Pupillen"
                  Link_text_2="U14/U16"
                  Link_text_3="U18/U20/SEN"
                  Link_text_4="Masters"
                  rootClassName="timetable-row4-root-class-name"
                ></TimetableRow4>
                <TimetableRow1
                  Time="15:40"
                  Title="RFFA jumpCUP (Ver)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848984/4170/"
                  Link_text="Group B"
                  image_src="/events/ver.svg"
                  rootClassName="timetable-row1-root-class-name1"
                ></TimetableRow1>
                <TimetableRow1
                  Time="16:05"
                  Title="RFFA throwCUP (Kogel)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848991/4171/"
                  Link_text="Group B"
                  image_src="/events/kogel.svg"
                  rootClassName="timetable-row1-root-class-name7"
                ></TimetableRow1>
                <TimetableRow1
                  Time="16:20"
                  Title="RFFA runCUP (600m)"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/856418/4256/"
                  Link_text="Group B"
                  image_src="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name6"
                ></TimetableRow1>
                <TimetableRow0
                  Time="16:30"
                  Title="Prijsuitreiking"
                  image_src="/events/rffa_cup.svg"
                  rootClassName="timetable-row0-root-class-name1"
                ></TimetableRow0>
              </div>
              <div id="timetable-3" className="timetable">
                <TimetableRowclinic
                  Time="13:05"
                  by_1="Nargelis Statia &amp; Gioganny Gaarie"
                  by_2="Joris van Gool &amp; Maurice Afognon"
                  by_3="Morgann de Jong"
                  by_4=" "
                  Title="RFFA Clinics ronde #1"
                  url_1="https://www.atletiek.nu/wedstrijd/startgroep/856405/"
                  url_2="https://www.atletiek.nu/wedstrijd/startgroep/860876/"
                  url_3="https://www.atletiek.nu/wedstrijd/startgroep/860877/"
                  url_4=" "
                  name_1="Bootcamp"
                  name_2="Estafette"
                  name_3="Hurdles"
                  name_4=" "
                  image_alt="Clinic"
                  image_src="/events/rffa_clinic.svg"
                  rootClassName="timetable-rowclinic-root-class-name"
                ></TimetableRowclinic>
                <TimetableRowclinic
                  Time="14:05"
                  by_1=" "
                  by_2="Zoë Sedney"
                  by_3=" "
                  by_4=" "
                  Title="RFFA Clinics ronde #2"
                  url_1="https://www.atletiek.nu/wedstrijd/startgroep/856403/"
                  url_2="https://www.atletiek.nu/wedstrijd/startgroep/856409/"
                  url_3="https://www.atletiek.nu/wedstrijd/startgroep/856407/"
                  url_4="https://www.atletiek.nu/wedstrijd/startgroep/856411/"
                  name_1="High Jump"
                  name_2="Hurdles"
                  name_3="Sprint"
                  name_4="Throw"
                  image_alt="Clinic"
                  image_src="/events/rffa_clinic.svg"
                  rootClassName="timetable-rowclinic-root-class-name1"
                ></TimetableRowclinic>
                <TimetableRowclinic
                  Time="15:05"
                  by_1="Damian Felter"
                  by_2=" "
                  by_3="Jacqueline Goormachtigh"
                  by_4=" "
                  Title="RFFA Clinics ronde #3"
                  url_1="https://www.atletiek.nu/wedstrijd/startgroep/856402/"
                  url_2="https://www.atletiek.nu/wedstrijd/startgroep/856416/"
                  url_3="https://www.atletiek.nu/wedstrijd/startgroep/856412/"
                  url_4=" "
                  name_1="Long Jump"
                  name_2="Run"
                  name_3="Throw"
                  name_4=" "
                  image_alt="Clinic"
                  image_src="/events/rffa_clinic.svg"
                  rootClassName="timetable-rowclinic-root-class-name2"
                ></TimetableRowclinic>
                <TimetableRowclinic
                  Time="16:05"
                  by_1="Zoë Sedney"
                  by_2="Ridzerd Punt"
                  by_3="Dudley Boeldak"
                  by_4="Britt de Blaauw"
                  Title="RFFA Clinics ronde #4"
                  url_1="https://www.atletiek.nu/wedstrijd/startgroep/856414/"
                  url_2="https://www.atletiek.nu/wedstrijd/startgroep/856404/"
                  url_3="https://www.atletiek.nu/wedstrijd/startgroep/856401/"
                  url_4="https://www.atletiek.nu/wedstrijd/startgroep/856408/"
                  name_1="Estafette"
                  name_2="High Jump"
                  name_3="Long Jump"
                  name_4="Sprint"
                  image_alt="Clinic"
                  image_src="/events/rffa_clinic.svg"
                  rootClassName="timetable-rowclinic-root-class-name3"
                ></TimetableRowclinic>
              </div>
              <div id="timetable-4" className="timetable">
                <TimetableRow1
                  Time="16:40"
                  Title="4 x 800m"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/858446/128/"
                  Link_text="Teams"
                  image_src="/events/estafette.svg"
                  rootClassName="timetable-row1-root-class-name8"
                ></TimetableRow1>
                <TimetableRow1
                  Time="17:00"
                  Title="5000m Finale Run2Day Baancircuit 2023"
                  link_url="https://www.atletiek.nu/wedstrijd/startlijst/848980/4216/"
                  Link_text="Mixed"
                  image_src="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name9"
                ></TimetableRow1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="meet-greet" className="home-meet-greet bg-green section">
        <div className="section-container">
          <h1 className="home-text34 section-title">Meet &amp; Greet</h1>
          <div className="home-gallery1">
            <MeetGreetCard
              Title="Liemarvin Bonevacia"
              image_alt="Liemarvin Bonevacia"
              image_src="/athletes/bonevacia1-1500w.jpg"
              Description="400m"
              rootClassName="meet-greet-card-root-class-name7"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Ramsey Angela"
              image_alt="Ramsey Angela"
              image_src="/athletes/angela-1500w.jpg"
              Description="400m horden, 400m"
              rootClassName="meet-greet-card-root-class-name5"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Isayah Boers"
              image_alt="Isayah Boers"
              image_src="/athletes/boers-1500w.jpg"
              Description="400m"
              rootClassName="meet-greet-card-root-class-name6"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Zoë Sedney"
              image_alt="Zoë Sedney"
              image_src="/athletes/sedney-1500w.jpg"
              Description="100m, 100m horden, 400m"
              rootClassName="meet-greet-card-root-class-name9"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Isaya Klein Ikkink"
              image_alt="Isaya Klein Ikkink"
              image_src="/athletes/kleinikkink-1500w.jpg"
              Description="110m horden, 400m"
              rootClassName="meet-greet-card-root-class-name8"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Taymir Burnet"
              image_alt="Taymir Burnet"
              image_src="/athletes/burnet-1500w.jpg"
              Description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name4"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Hensley Paulina"
              image_alt="Hensley Paulina"
              image_src="/athletes/paulina-1500w.jpg"
              Description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name3"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Ridzerd Punt"
              image_alt="Ridzerd Punt"
              image_src="/athletes/punt-1500w.jpg"
              Description="Hoogspringen"
              rootClassName="meet-greet-card-root-class-name10"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Britt De Blaauw"
              image_alt="Britt De Blaauw"
              image_src="/athletes/deblaauw-1500w.jpg"
              Description="400m"
              rootClassName="meet-greet-card-root-class-name11"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Sam Kranse"
              image_alt="Sam Kranse"
              image_src="/athletes/kranse-1500w.jpg"
              Description="Polsstokhoogspringen"
              rootClassName="meet-greet-card-root-class-name12"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Koen van der Wijst"
              image_alt="Koen van der Wijst"
              image_src="/athletes/vanderwijst-1500w.jpg"
              Description="Polsstokhoogspringen"
              rootClassName="meet-greet-card-root-class-name13"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Jozuah Revierre"
              image_alt="Jozuah Revierre"
              image_src="/athletes/revierre-1500w.jpg"
              Description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name14"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Daan Hoomoedt"
              image_alt="Daan Hoomoedt"
              image_src="/athletes/hoomoedt-1500w.jpg"
              Description="Hink-stapspringen"
              rootClassName="meet-greet-card-root-class-name"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Joris van Gool"
              image_alt="Joris van Gool"
              image_src="/athletes/vangool-1500w.jpg"
              Description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name2"
            ></MeetGreetCard>
            <MeetGreetCard
              Title="Maurice Afognon"
              image_alt="Maurice Afognon"
              image_src="/athletes/afognon-1500w.jpg"
              Description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name1"
            ></MeetGreetCard>
          </div>
        </div>
      </div>
      <section id="meehelpen" className="bg-blue section">
        <div className="section-container">
          <h2 className="home-heading1 section-title">Meehelpen</h2>
          <img
            alt="image"
            src="/jury.webp"
            loading="lazy"
            className="home-image1"
          />
          <div className="home-container12">
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
      <section className="home-faq bg-green section">
        <div className="section-container">
          <div className="home-header4">
            <h2 className="home-heading2 section-title">
              Veel gestelde vragen
            </h2>
          </div>
          <div className="home-content1">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header5">Kan ik me al inschrijven?</h3>
                <p className="home-content2">
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
                    className="home-link12"
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
                    className="home-link13"
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
                <h3 className="home-header6">
                  Welke topsporters komen er naar het RFFA?
                </h3>
                <p className="home-content3">
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
                    className="home-link14"
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
                <h3 className="home-header7">Welke onderdelen kan ik doen?</h3>
                <p className="home-content4">
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
      <div className="home-footer">
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
        <footer className="home-footer1">
          <div className="home-container14">
            <img
              alt="image"
              src="/rffa_logo_website.svg"
              className="home-image2"
            />
            <span className="home-text40">
              Het Rotterdam Festival for Athletics is een initiatief voor een
              jaarlijks atletiekfeest van PAC Rotterdam en Rotterdam Atletiek.
            </span>
          </div>
          <div className="home-column1">
            <span className="home-header8">Contact</span>
            <div className="home-list">
              <a
                href="mailto:organisation@rffa.nl?subject=Vraag RFFA 2023"
                className="home-link15"
              >
                <div className="home-container15">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon17 footer-icon"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="home-text41">organisation@rffa.nl</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rffa_rotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <div className="home-container16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon19 footer-icon"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="home-text42">Instagram</span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/rffarotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <div className="home-container17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon21 footer-icon"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="home-text43">Facebook</span>
                </div>
              </a>
            </div>
          </div>
          <a href="#top" data-role="scroll-top" className="home-link18 button">
            <img alt="image" src="/arrow.svg" className="home-image3" />
          </a>
        </footer>
        <span className="home-text44">
          © 2023 Rotterdam Festival for Athletics - All rights reserved
        </span>
      </div>
    </div>
  )
}

export default Home
