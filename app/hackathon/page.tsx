import TodoList from "@/components/graphics/TodoList";
import styles from "./page.module.css";
import SiteFooter from "@/components/global/SiteFooter";
import Agenda, { AgendaDay, AgendaTimeSlot } from "@/components/data/Agenda";

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
          <p>Sheffield AI are running a FREE AI based hackathon in May 2025.  Entries are open to anybody in the region who wants to get hands on and build something with AI.  More details to follow closer to the time.</p>
        </div>
      </div>
    </section>
    <section className={[styles.container, styles.agenda].join(' ')}>
      <h2>Hackathon Agenda</h2>
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
    <section className={styles.centreFlex}>
      <SiteFooter className={styles.footer} />
    </section>
  </main>
}
