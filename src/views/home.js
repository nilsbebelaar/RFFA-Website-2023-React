import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
import TimetableRow1 from '../components/timetable-row1'
import TimetableRow0 from '../components/timetable-row0'
import TimetableRow4 from '../components/timetable-row4'
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
                <span className="home-text navbar-button">
                  Meet &amp; Greet
                </span>
                <a href="#meehelpen" className="home-link03 navbar-button">
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
                  <a href="#festival" className="home-link04">
                    Festival
                  </a>
                  <a href="#meedoen" className="home-link05">
                    Meedoen
                  </a>
                  <a href="#tijdschema" className="home-link06">
                    Tijdschema
                  </a>
                  <span className="home-text01">Meet &amp; Greet</span>
                  <a href="#meehelpen" className="home-link07">
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
                <span className="home-text02">About</span>
                <span className="home-text03">Features</span>
                <span className="home-text04">Pricing</span>
                <span className="home-text05">Team</span>
                <span className="home-text06">Blog</span>
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
                <span className="home-text07">Beleef atletiek</span>
                <span className="home-text08">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text09">op het</span>
                <br className="home-text10"></br>
                <span className="home-text11">
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
            <h1 className="home-text12 section-title">9 september 2023</h1>
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
                <h3 className="home-header01">Beleef</h3>
                <span className="home-caption">
                  <span>Strijd om een Cup, volg een clinic!</span>
                  <br></br>
                </span>
              </div>
              <div className="home-stat1">
                <h3 className="home-header02">Kijk</h3>
                <span className="home-caption1">
                  Nationale top, foto&apos;s en handtekening!
                </span>
              </div>
              <div className="home-stat2">
                <h3 className="home-header03">Geniet</h3>
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
          <h1 className="home-text20 section-title">ZELF MEEDOEN</h1>
          <div className="home-gallery">
            <GalleryCard1
              Title="Strijd mee"
              image_alt="sprint"
              image_src="/sprintcup.webp"
              Description="Doe mee met de sprintCUP, runCUP, jumpCUP of throwCUP. Ontdek wie van jouw vrienden het beste is met 60 meter sprint, verspringen, 600 meter of kogelstoten."
              rootClassName="rootClassName"
            ></GalleryCard1>
            <GalleryCard1
              Title="Atletiekclinics"
              image_alt="clinic steeple"
              image_src="/clinic_4.webp"
              Description="Krijg nieuwe technieken aangeleerd van toptrainers en talenten uit de atletiek. Er zijn 8 verschillende clinics verspreid over 4 blokken van 30 minuten."
              rootClassName="rootClassName1"
            ></GalleryCard1>
            <GalleryCard1
              Title="Estafette"
              image_alt="4x800m estafette"
              image_src="/estafette.webp"
              Description="Schrijf je als team in voor de 4x800m estafette. Welk team komt na 8 rondes als eerst over de finishlijn?"
              rootClassName="rootClassName2"
            ></GalleryCard1>
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
                <TimetableRow4
                  Time="13:05"
                  Title="RFFA Clinics ronde #1"
                  image_src="/events/rffa_clinic.svg"
                  link_url_1="https://www.atletiek.nu/wedstrijd/startlijst/856405/4251/"
                  link_url_2="https://www.atletiek.nu/wedstrijd/startlijst/856401/4247/"
                  link_url_3="https://www.atletiek.nu/wedstrijd/startlijst/856415/4250/"
                  link_url_4="https://www.atletiek.nu/wedstrijd/startlijst/856413/4249/"
                  Link_text_1="Bootcamp"
                  Link_text_2="Long Jump"
                  Link_text_3="Run"
                  Link_text_4="Steeple"
                  rootClassName="timetable-row4-root-class-name1"
                ></TimetableRow4>
                <TimetableRow4
                  Time="14:05"
                  Title="RFFA Clinics ronde #2"
                  image_src="/events/rffa_clinic.svg"
                  link_url_1="https://www.atletiek.nu/wedstrijd/startlijst/856403/4248/"
                  link_url_2="https://www.atletiek.nu/wedstrijd/startlijst/856409/4246/"
                  link_url_3="https://www.atletiek.nu/wedstrijd/startlijst/856407/4168/"
                  link_url_4="https://www.atletiek.nu/wedstrijd/startlijst/856411/4118/"
                  Link_text_1="High Jump"
                  Link_text_2="Hurdles"
                  Link_text_3="Sprint"
                  Link_text_4="Throw"
                  rootClassName="timetable-row4-root-class-name2"
                ></TimetableRow4>
                <TimetableRow4
                  Time="15:05"
                  Title="RFFA Clinics ronde #3"
                  image_src="/events/rffa_clinic.svg"
                  link_url_1="https://www.atletiek.nu/wedstrijd/startlijst/856406/4251/"
                  link_url_2="https://www.atletiek.nu/wedstrijd/startlijst/856402/4247/"
                  link_url_3="https://www.atletiek.nu/wedstrijd/startlijst/856416/4250/"
                  link_url_4="https://www.atletiek.nu/wedstrijd/startlijst/856412/4118/"
                  Link_text_1="Bootcamp"
                  Link_text_2="Long Jump"
                  Link_text_3="Run"
                  Link_text_4="Throw"
                  rootClassName="timetable-row4-root-class-name4"
                ></TimetableRow4>
                <TimetableRow4
                  Time="16:05"
                  Title="RFFA Clinics ronde #4"
                  image_src="/events/rffa_clinic.svg"
                  link_url_1="https://www.atletiek.nu/wedstrijd/startlijst/856404/4248/"
                  link_url_2="https://www.atletiek.nu/wedstrijd/startlijst/856410/4246/"
                  link_url_3="https://www.atletiek.nu/wedstrijd/startlijst/856408/4168/"
                  link_url_4="https://www.atletiek.nu/wedstrijd/startlijst/856414/4249/"
                  Link_text_1="High Jump"
                  Link_text_2="Hurdles"
                  Link_text_3="Sprint"
                  Link_text_4="Steeple"
                  rootClassName="timetable-row4-root-class-name3"
                ></TimetableRow4>
              </div>
              <div id="timetable-3" className="timetable">
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
      <div className="home-meet-greet bg-green section">
        <div className="home-container10 section-container">
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
                    <span className="home-text31">growth.</span>
                    <br></br>
                  </h2>
                </div>
                <p className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="home-caption4">
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
                  <span className="home-text33">Testimonial</span>
                  <p className="home-text34">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
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
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-from"
                  />
                </div>
              </div>
            </div>
            <div className="home-images">
              <div className="home-square"></div>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-image1"
              />
            </div>
          </section>
        </div>
      </div>
      <section id="meehelpen" className="bg-blue section">
        <div className="section-container">
          <h2 className="home-heading2 section-title">Meehelpen</h2>
          <img
            alt="image"
            src="/jury.webp"
            loading="lazy"
            className="home-image2"
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
          <div className="home-header06">
            <h2 className="home-heading3 section-title">
              Veel gestelde vragen
            </h2>
          </div>
          <div className="home-content3">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header07">Kan ik me al inschrijven?</h3>
                <p className="home-content4">
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
                    className="home-link10"
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
                    className="home-link11"
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
                <h3 className="home-header08">
                  Welke topsporters komen er naar het RFFA?
                </h3>
                <p className="home-content5">
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
                    className="home-link12"
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
                <h3 className="home-header09">Welke onderdelen kan ik doen?</h3>
                <p className="home-content6">
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
              className="home-image3"
            />
            <span className="home-text40">
              Het Rotterdam Festival for Athletics is een initiatief voor een
              jaarlijks atletiekfeest van PAC Rotterdam en Rotterdam Atletiek.
            </span>
          </div>
          <div className="home-column1">
            <span className="home-header10">Contact</span>
            <div className="home-list">
              <a
                href="mailto:organisation@rffa.nl?subject=Vraag RFFA 2023"
                className="home-link13"
              >
                <div className="home-container15">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon18 footer-icon"
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
                className="home-link14"
              >
                <div className="home-container16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20 footer-icon"
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
                className="home-link15"
              >
                <div className="home-container17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22 footer-icon"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="home-text43">Facebook</span>
                </div>
              </a>
            </div>
          </div>
          <a href="#top" data-role="scroll-top" className="home-link16 button">
            <img alt="image" src="/arrow.svg" className="home-image4" />
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
