import TodoList from "@/components/graphics/TodoList";
import classes from "./page.module.css";
import SiteFooter from "@/components/global/SiteFooter";

export default function IndexPage() {
  return <main className={classes.main}>
    <h2 className={classes.title1}>Sheffield</h2>
    <h1 className={classes.title2}>AI • Hackathon</h1>
    <h3 className={classes.title3}>May 2025
      <img src="/img/robot-and-city.svg" className={classes.robotImage} />
    </h3>
    <section className={[classes.container, classes.contrastBlock].join(' ')}>
      <div className={classes.flexRow}>
        <div className={classes.todoListWrapper}>
          <TodoList className={classes.todoList} title="Hackathon 2025">
            <li>Save the date (TBC)</li>
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
    <section className={[classes.container, classes.agenda].join(' ')}>
      <h2>Draft Agenda</h2>
        <h3>Day 1: [Date]</h3>
      <ul>
        <li>
          <time dateTime="09:00">9:00 AM</time>
          <span>Kickoff</span>
          <address>Vanue</address>
        </li>
        <li>
          <time dateTime="09:30">09:30 AM</time>
          <span>Project Presentations</span>
          <address>Venue</address>
        </li>
        <li>
          <time dateTime="11:00">11:00 AM</time>
          <span>Hacking Begins</span>
          <address>Venue</address>
        </li>
      </ul>
        <h3>Day 2: [Date]</h3>
      <ul>
        <li>
          <time dateTime="12:00">12:00 PM</time>
          <span>Project Deadline</span>
          <address>Online</address>
        </li>

      </ul>
    </section>
    <section className={classes.centreFlex}>
      <SiteFooter className={classes.footer} />
    </section>
  </main>
}
