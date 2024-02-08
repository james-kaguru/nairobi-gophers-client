import blackGoLogo from "../assets/blackGoLogo.png";
import meetupLogo from "../assets/meetupLogo.png";
import xLogo from "../assets/xLogo.png";
import waves from "../assets/waves.svg";

function Nav() {
  return (
    <nav className={"p-3 flex flex-row items-center justify-start"}>
      <a href="/" className={"text-primary border-b-2 border-primary p-2"}>
        Home
      </a>
    </nav>
  );
}

function Sponsors() {
  return (
    <section
      className={"flex flex-row items-center h-[50vh] px-12 gap-[150px]"}
    >
      <div className={"w-1/2"}>
        <h2 className={"text-5xl font-bold text-secondary mb-2"}>Sponsors</h2>
        <p className={"text-gray-500 mb-5 text-justify"}>
          Attention sponsors! Don't miss this chance to supercharge your brand
          and tap into the vibrant energy of Nairobi's Go programming community.
          Contact us today to explore sponsorship opportunities and join us in
          creating an unforgettable event.
        </p>
        <button
          className={
            "bg-primary text-white px-10 py-5 rounded-[30px] font-bold"
          }
        >
          Sponsor The Event
        </button>
      </div>

      <div className={"flex flex-col w-1/2"}>
        <div className={"flex flex-row gap-3 overflow-x-scroll w-full px-6"}>
          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CallForSpeakers() {
  return (
    <section>
      <div className={"bg-accent w-[300px] h-[100px]"}></div>
      <div>
        <h2>Call for Speakers</h2>
        <p>
          We're looking for speakers to share their expertise with our
          enthusiastic audience. If you have a topic you'd like to present, we'd
          love to hear from you. Submit your proposal today!
        </p>
        <button>Submit a Proposal</button>
      </div>
    </section>
  );
}

function ConnectWithUs() {
  return (
    <section>
      <h2>Connect with us</h2>
      <p>
        Stay in the loop! Engage with us on social media to get the latest
        events
      </p>
      <div>
        <a href={"https://www.meetup.com/Nairobi-Gophers/"}>
          <img
            src={meetupLogo}
            alt={"meetup logo"}
            className={"object-cover w-36"}
          />
        </a>

        <a href={"https://twitter.com/nairobi_gophers"}>
          <img src={xLogo} alt={"twitter logo"} className={"object-cover"} />
        </a>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      {/*<Nav />*/}

      <div
        className={
          "h-[100vh] text-center flex flex-col items-center relative !w-[100vw]"
        }
      >
        <div className={"mt-40 md:mt-60"}>
          <h1 className={"text-4xl md:text-7xl font-bold text-secondary mb-1"}>
            Gophercon Africa
          </h1>
          <p className={"max-w-[800px] m-auto text-gray-500 mb-5"}>
            The 1st Gophercon Africa event is here, bringing together the
            continent's top Go programming enthusiasts to for an <b>2 day</b>{" "}
            thrilling event in <b>Nairobi,Kenya.</b>
          </p>
          <button
            className={"px-6 py-4 bg-primary text-white font-bold md:text-lg"}
          >
            Tickets Coming soon
          </button>
        </div>

        <img
          src={waves}
          alt={"waves"}
          className={"absolute bottom-0 h-100px w-full object-cover"}
          // className={"absolute object-fill md:object-cover bottom-0 md:w-full"}
        />
      </div>

      <Sponsors />

      <CallForSpeakers />

      <ConnectWithUs />
    </>
  );
}
