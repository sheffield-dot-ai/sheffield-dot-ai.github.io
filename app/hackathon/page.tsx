import TodoList from "@/components/graphics/TodoList";
import styles from "./page.module.css";
import SiteFooter from "@/components/global/SiteFooter";
import Agenda, { AgendaDay, AgendaTimeSlot } from "@/components/data/Agenda";
import CtaButton, { CtaLinkButton } from "@/components/forms/CtaButton";

export default function IndexPage() {
  return <main className={styles.main}>
    <h2 className={styles.title1}>Sheffield</h2>
    <h1 className={styles.title2}>AI • Hackathon</h1>
    <h3 className={styles.title3}>13-14 May 2025
      <img src="/img/robot-and-city.svg" className={styles.robotImage} />
    </h3>
    <section className={[styles.container, styles.contrastBlock].join(' ')}>
      <div className={styles.flexRow}>
        <div className={styles.todoListWrapper}>
          <TodoList className={styles.todoList} title="Hackathon 2025">
            <li>Save the date: 13-14 May</li>
            <li>Read the rules</li>
            <li>Join a team</li>
            <li>Build a project</li>
            <li>Win a prize</li>
          </TodoList>
        </div>
        <div>
          <h2>Calling AI Makers</h2>
          <p>Sheffield AI are running a FREE AI based hackathon in May 2025.  Entries are open to anybody in the region who wants to get hands on and build something with AI.  Click the link to fill in the signup form.</p>
          <div className={styles.ctaWrapper}><CtaLinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeR_wUW5cbbFISDmmrrmO148jRwRXaSX5cbZNiz-nadmMOMKg/viewform?usp=sharing" className={styles.cta}>Sign Up Here</CtaLinkButton></div>
        </div>
      </div>
    </section>
    <section className={[styles.container, styles.howItWorks].join(' ')}>
      <h2 className={styles.sectionTitle}>How It Works</h2>
      <p>You can join the hackathon as a team, or as an individual.  There will be an opportunity at the start of the Hackathon to hear all the project proposals and join the team you are most excited about!</p>
      <p>A hackathon team will have 2 days to build something on top of the <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/">Sheffield City Council Open Data</a>.  There are no rules for what you can build.  The data is free and open to all, so let your imagination run wild and build whatever you like!</p>
      <p>There will be prizes for</p>
      <ul>
        <li>The project that has the most potential to benefit our region</li>
        <li>The most innovative use of AI</li>
        <li>The project that aligns most with the <a href="https://sheffieldcitygoals.uk/">Sheffield City Goals</a></li>
        <li>The most functional submission</li>
        <li>Plus more! (to be announced)</li>
      </ul>
    </section>
    <section className={[styles.container, styles.theData].join(' ')}>
      <h2 className={styles.sectionTitle}>The Data</h2>
      <p>The Sheffield City Council Open Data project contains over 122 datasets covering the region.  Browse the data ahead of the hackathon on their <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search">website</a>, the data is grouped into these categories:</p>
      <div className={styles.dataLinks}>
        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=environment" className={styles.dataLink}>
          <svg viewBox="0 0 120 120">
            <path d="M65.561 40.1l4.966-7.43c.095-.145.181-.297.257-.455L83.557 6.13a1.5 1.5 0 00-2.598-1.5L64.756 28.735a4.008 4.008 0 00-.266.45l-3.896 7.904A7.495 7.495 0 0165.56 40.1zM52 44.5c0-1.008.203-1.97.565-2.849L43 41.023a4.009 4.009 0 00-.523.005L13.5 43.008a1.5 1.5 0 100 3l28.977 1.98c.174.014.349.015.523.006l9.571-.629A7.456 7.456 0 0152 44.5zM70.784 56.833a4.01 4.01 0 00-.257-.455l-4.983-7.455A7.487 7.487 0 0159.5 52a7.448 7.448 0 01-2.637-.488L55 113h9l-1.748-57.676 2.238 4.54c.079.155.167.305.266.45l16.203 24.104a1.5 1.5 0 102.598-1.5L70.784 56.833z"></path><circle cx="59.5" cy="44.5" r="4.3"></circle><path d="M85.79 73.123a5.936 5.936 0 01-1.092-1.442l-3.526 3.092a2.55 2.55 0 00-.234.238l-12.17 13.955a.956.956 0 101.353 1.353l13.955-12.17a2.55 2.55 0 00.238-.233l3.195-3.645a5.983 5.983 0 01-1.72-1.148zM85.44 59.427c.02.11.048.217.083.323l1.395 4.108A6.02 6.02 0 0190 63c.239 0 .47.04.703.067l-.888-4.467a2.556 2.556 0 00-.09-.321l-6-17.517a.956.956 0 00-1.847.495l3.562 18.17zM90 74.822c-.565 0-1.11-.102-1.639-.25L87 113h6l-1.361-38.428c-.53.148-1.074.25-1.639.25zM118.34 75.376l-17.517-6a2.545 2.545 0 00-.321-.09l-4.528-.9a5.803 5.803 0 01-.934 3.728l4.312 1.465c.105.035.213.062.322.083l18.17 3.562a.956.956 0 10.496-1.848zM92.121 66.853a2.85 2.85 0 010 4.117 3.065 3.065 0 01-4.242 0 2.85 2.85 0 010-4.117 3.065 3.065 0 014.242 0zM41.332 77.976a2.556 2.556 0 00-.161-.291l-2.533-3.868a5.826 5.826 0 01-4.675 2.126 6.009 6.009 0 01-1.64-.272L31 113h6l-1.29-36.438L37.3 79.87c.05.1.105.196.167.289l10.184 15.463a.956.956 0 101.666-.94l-7.986-16.706zM28.065 69.933a5.944 5.944 0 01.242-1.717L23.716 68a2.553 2.553 0 00-.334 0l-18.484.818a.956.956 0 10-.018 1.913L23.34 72c.111.01.223.012.334.006l4.712-.182a5.998 5.998 0 01-.321-1.891zM49.442 44.422a.956.956 0 00-1.31.338L37.659 60.028a2.56 2.56 0 00-.172.286l-1.985 3.933a6.03 6.03 0 012.738 1.601c.17.173.323.356.469.544l2.606-3.82a2.57 2.57 0 00.166-.289l8.3-16.551a.956.956 0 00-.338-1.31zM36.975 70.06a2.85 2.85 0 01-2.939 2.884c-1.632-.04-2.962-1.396-2.971-3.028s1.306-2.924 2.938-2.884a3.065 3.065 0 012.972 3.029z"></path>
          </svg>
          <span>Environment</span>
        </a>

        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=boundaries" className={styles.dataLink}>
          <svg viewBox="0 0 792 612">
            <path d="M256.5 267.8L90 434.3v49.4l216-215.9zM415.1 497.2v-11.9l-12 11.9zM434.2 321.8L144.1 612h47.1l243-243zM434.2 267.8h-27L90 584.9V612h27.1l317.1-317.2zM434.2 401.6V396l-5.6 5.6zM180 267.8l-90 90v49.4l139.5-139.4zM199.1 248.6H472.5V153h153V95.6H549V0H90v248.6h82.1zM90 267.8v62.9l63-62.9zM333 267.8l-243 243v47.1l290.2-290.1zM338.6 497.2h37.5l39-39v-43.1L218.3 612h43l77.3-77.3z"></path><path d="M587.2 420.8h-153v95.6h-76.4V612H702v-95.6H587.2zM288.4 612h50.2v-50.2z"></path><path d="M568.1 0v76.5h76.5v95.6h-153v95.7h-38.2V401.6h153v95.6H702V0zM338.6 561.8V612h19.2v-69.4z"></path>
          </svg>
          <span>Boundaries</span>
        </a>


        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=governance%2Celections" className={styles.dataLink}>
          <svg viewBox="0 0 120 120">
            <path d="M2 108.1h116V120H2zM6.744 96.582h104.979v6.543H6.744zM15.288 38.532h17.639v52.925H15.288zM50.484 38.532h17.639v52.925H50.484zM84.33 38.532h17.639v52.925H84.33zM0 26.96L60 0l60 26.96-.054 6.952L0 34.01z"></path>
          </svg>
          <span>Governance</span>
        </a>




        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=population%2Cpeople%2Cdemographics" className={styles.dataLink}>
          <svg viewBox="0 0 120 120">
            <path d="M47.2 34c0-7.07 5.73-12.8 12.8-12.8S72.8 26.93 72.8 34 67.07 46.8 60 46.8 47.2 41.07 47.2 34zm-6.4-12c0 5.965-4.835 10.8-10.8 10.8S19.2 27.965 19.2 22 24.035 11.2 30 11.2 40.8 16.035 40.8 22zm-2.7 0c0-4.466-3.634-8.1-8.1-8.1s-8.1 3.634-8.1 8.1 3.634 8.1 8.1 8.1 8.1-3.634 8.1-8.1zM22 55h-3v16h-6.857c-.22-.066-.857-.54-1.143-.9V41.233c0-.82 2.169-2.234 4.132-2.234h29.36a16.173 16.173 0 01-.654-2.984H15.632C12.005 36.016 8 38.616 8 42v27.767C8 71.623 10.898 74 12.893 74H19v14.26c0 .335.915.74 1.274.74H29v-3h-7V55zm68-43.8c5.965 0 10.8 4.835 10.8 10.8S95.965 32.8 90 32.8 79.2 27.965 79.2 22 84.035 11.2 90 11.2zm0 18.9c4.466 0 8.1-3.634 8.1-8.1s-3.634-8.1-8.1-8.1-8.1 3.634-8.1 8.1 3.634 8.1 8.1 8.1zM98 86h-7v3h8.726c.359 0 1.274-.405 1.274-.74V74h6.107c1.995 0 4.893-2.377 4.893-4.233V42c0-3.384-4.005-5.984-7.632-5.984H76.162A16.173 16.173 0 0175.508 39h29.36c1.963 0 4.132 1.414 4.132 2.234v28.865c-.286.361-.923.835-1.143.901H101V55h-3v31zM79.195 51h-38.39C36.62 51 32 54.289 32 58.194v30.537c0 2.142 3.086 4.019 5.385 4.019H40V63h3.125v48c0 .386.961.853 1.375.853h31c.414 0 1.375-.467 1.375-.853V63H80v29.75h2.615c2.3 0 5.385-1.877 5.385-4.02V58.195C88 54.29 83.38 51 79.195 51z"></path>
          </svg>
          <span>Population</span>
        </a>



        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=foi%2Ceir" className={styles.dataLink}>
          <svg viewBox="0 0 8 8">
            <path d="M7.99 6.928L5.847 4.784a3.152 3.152 0 10-2.694 1.521 3.13 3.13 0 001.63-.458l2.145 2.146L7.99 6.928zM1.203 3.154a1.954 1.954 0 011.951-1.951 1.953 1.953 0 011.949 1.951 1.95 1.95 0 01-3.9 0z"></path>
          </svg>
          <span>Freedom Of Information<br /> and Environmental<br /> Information Requests</span>
        </a>




        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=planning" className={styles.dataLink}>
          <svg viewBox="0 0 120 120">
            <path d="M61 46h-3v-4h3v4zm-38 6h-3v4h3v-4zm6 4h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm-6 8h-3v-4h3v4zm6 0h-3v-4h3v4zm38-62h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm-12 8h-3v4h3v-4zm6 0h-3v4h3v-4zm6 0h-3v4h3v-4zm41 11v3H6v-3h5V46h15V26L56.934 8v27H66v-5h8v5h5v21.619l12-12.571V33h3v11.048l12 12.571V109h8zM32 49H17v60h15V49zm17 53H35v7h14v-7zm0-8H35v5h14v-5zm0-8H35v5h14v-5zm0-8H35v5h14v-5zm0-8H35v5h14v-5zm0-8H35v5h14v-5zm0-8H35v5h14v-5zm5-40.783L32 25.98V46h3v5h14v-5H35v-3h14v-5H35v-3h19V13.217zM76 38H55v71h21V38zm7 19h19l-9.5-10L83 57zm13 48h-3v4h3v-4zm7-6H82v10h8v-7h9v7h4V99zm0-3V60H82v36h5V63h3v33h5V63h3v33h5zm-15 6h-3v4h3v-4zM51 27H35v3h16v-3z"></path>
          </svg>
          <span>Planning</span>
        </a>



        <a href="https://sheffield-city-council-open-data-sheffieldcc.hub.arcgis.com/search?tags=transportation%2Chighways%2Ctransport%2Cparking" className={styles.dataLink}>
          <svg viewBox="0 0 120 120">
            <path d="M96 79.5V63.7c0-1.8-.2-3.7-.4-5.5C89.7 22.3 89.4 11 76.5 11h-31c-12.9 0-13.2 11.4-19.1 47.2-.2 1.8-.4 3.7-.4 5.5v15.8c0 6.8 6.5 12.4 13.3 12.4L27 111h12.4l6.2-19.1h31l6.2 19.1H95L82.7 91.9c6.8 0 13.3-5.6 13.3-12.4zM52 17h18v4H52v-4zm9 64.1c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1zM61 61l-23-6 5-25h36l5 25-23 6z"></path>
          </svg>
          <span>Transportation</span>
        </a>


      </div>
    </section>

    <section className={styles.container}>
      <div className={styles.ctaWrapper}><CtaLinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeR_wUW5cbbFISDmmrrmO148jRwRXaSX5cbZNiz-nadmMOMKg/viewform?usp=sharing" className={styles.cta}>Sign Up Here</CtaLinkButton></div>
    </section>
    <section className={[styles.container, styles.agenda].join(' ')}>
      <h2 className={styles.sectionTitle}>Hackathon Agenda</h2>
      <Agenda>
        <AgendaDay dayString="Tuesday" dateString="13th May 2025">
          <AgendaTimeSlot title="Breakfast & Coffee" location="Main Room" timeString="9:00 AM - 9:30 AM">
            A chance to grab your badge, pour a coffee and meet some new people.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Kickoff" location="Main Room" timeString="9:30 AM - 10:00 AM">
            Introduction to the Hackathon, why we are here, the rules, the judging criteria, and guidelines for joining a team.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Project Proposals" location="Main Room" timeString="10:00 AM - 11:00 AM">
            Project leaders will join the stage one by one and sell their idea! Pay attention and decide which team you'd like to join.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Morning Hacking" location="Main Room" timeString="11:00 AM - 12:30 PM">
            Hacking session in your team.  Open your laptops, grab the data and start building!
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Lunch" location="Main Room" timeString="12:30 PM - 13:00 PM">
            Lunch will be "grab & go" style food in the foyer.  Try not to spy on the progress of the other teams, or at least keep it subtle.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Afternoon Hacking" location="Main Room" timeString="11:00 AM - 12:30 PM">
            The main room will be open for the rest of the afternoon for teams to continue building their projects, don't forget to think about your presentation tomorrow.
          </AgendaTimeSlot>
        </AgendaDay>
        <AgendaDay dayString="Wednesday" dateString="14th May 2025">
          <AgendaTimeSlot title="(Optional) Remote Hacking" location="Remote" timeString="9:00 AM - 4:00 PM">
            Teams can spend the Wednesday collaborating asynchronously over slack to finish off your project.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Submission Deadline" location="Remote" timeString="4:00 PM - 4:00 PM">
            Deadline for submission of your project.  You can submit code, a deployed application, or just slides.  This is to give the judges time to prepare for the event presentations
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Evening Reception" location="Cafe" timeString="6:00 PM - 6:30 PM">
            Rejoin your teams on Wednesday evening for the presentations
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Presentations" location="Cafe" timeString="6:00 AM - 11:00 AM">
            Teams will join the stage one by one and present their progress during the Hackathon! Time limit 5 minutes per presentation.
          </AgendaTimeSlot>
          <AgendaTimeSlot title="Prize Ceremony" location="Cafe" timeString="8:00 PM - 9:00 PM">
            Winners announced and prizes handed out.  Grab your camera and don't forget your a bag to carry your trophy home in!
          </AgendaTimeSlot>
        </AgendaDay>
      </Agenda>
    </section>

    <section className={styles.container}>
      <div className={styles.ctaWrapper}><CtaLinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeR_wUW5cbbFISDmmrrmO148jRwRXaSX5cbZNiz-nadmMOMKg/viewform?usp=sharing" className={styles.cta}>Sign Up Here</CtaLinkButton></div>
    </section>


    <section className={styles.centreFlex}>
      <SiteFooter className={styles.footer} />
    </section>
  </main>
}
