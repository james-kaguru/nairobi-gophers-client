import blackGoLogo from "../assets/blackGoLogo.png";
import meetupLogo from "../assets/meetupLogo.png";
import xLogo from "../assets/xLogo.png";

function Nav() {
  return (
    <nav>
      <a href="/">Home</a>
    </nav>
  );
}

function Partners() {
  return (
    <section>
      <div>
        <h2>Sponsors</h2>
        <p>
          Attention sponsors! Don't miss this chance to supercharge your brand
          and tap into the vibrant energy of Nairobi's Go programming community.
          Contact us today to explore sponsorship opportunities and join us in
          creating an unforgettable event.
        </p>
      </div>
      <div>
        <div className={"bg-accent p-3"}>
          <img
            src={blackGoLogo}
            alt={"go lang logo"}
            className={"object-cover"}
          />
        </div>

        <div className={"bg-accent p-3"}>
          <img
            src={blackGoLogo}
            alt={"go lang logo"}
            className={"object-cover"}
          />
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
            className={"object-cover"}
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
      <Nav />
      <h1>Gophercon Africa</h1>
      <p>
        The Gophercon Africa event is here, bringing together the content's top
        Go programming enthusiasts for an exciting day of collaboration,
        learning, and networking. This year's event promises cutting-edge talks,
        engaging workshops, and the chance to connect with like-minded
        individuals shaping the future of technology.
      </p>
      <button>Tickets Coming soon</button>

      <Partners />

      <CallForSpeakers />

      <ConnectWithUs />
    </>
  );
}
