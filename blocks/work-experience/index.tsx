import { Card } from "../../components";
import styles from "./work-experience.module.scss";

export const WorkExperience = () => (
  <div className={styles.workExperience}>
    <h3>Work Experience</h3>
    <Card
      href="https://www.businessolver.com/"
      title="Software Engineer - Businessolver"
      stack="React • TypeScript • JS • SCSS • JEST"
      year={`2022${
        new Date().getFullYear() !== 2022 ? "-" + new Date().getFullYear() : ""
      }`}
      month="March - current"
      description="Development and support of internal libraries. Implementation of new features in the internal product. UI library development for company's internal needs. Documentation writing. Writing API contracts. Writing unit-tests for all internal projects and company's libraries. Code review within the team."
    />
    <Card
      href="https://www.mircod.com/"
      title="Frontend Developer - Mircod"
      stack="React • Redux • TypeScript • SCSS • Cypress"
      year="2021 — 2022"
      month="Febrary - March"
      description="Participated in the development of a large system for the internal needs of the company, which in the future is planned to be used as a b2b product. Implemented TypeScript in the project. Wrote most of the e2e tests for the project, which allowed me to detect bugs faster and speed up the release process. Configured docker for the tests in gitlab. Also wrote documentation for other developers on the rules of code maintenance, writing tests and new features in the project. Implemented the first version of customizable graphs for data visualization on our internal platform, which improved communication between teams and projects. Whenever possible, I help other developers, as well as mentor interns."
    />
    <Card
      href="https://ilartech.com/"
      title="Frontend Developer - ILAR"
      stack="HTML • SCSS • JS • AdobeXD"
      year="2020 — 2021"
      month="October - Febrary"
      description="Web page layout from scratch. Adaptive layout coding. Implementation of the designer's ideas with a minimum amount of code. Project support."
    />
    <Card
      title="Frontend Developer - K-Center"
      stack="React • Redux • TypeScript • SASS • PWA"
      year="2020"
      month="June - October"
      description="Developed the frontend part of the administration panel for the antifraud department. Supported this project and added new functionality at the request of users. Handled the engineering part of email marketing. Added PWA support to the company's main website and wrapped it in an android app. Developed a Telegram bot to monitor the quality of the user support department. The project was written using Python and Telebot library."
    />
  </div>
);
