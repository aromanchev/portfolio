import Head from "next/head";
import { Introduce, About, Projects } from "../blocks";
import { WorkExperience } from "../blocks/work-experience";
import { Footer } from "../components";
import { ThemeChanger } from "../components/theme-changer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Romanchev</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Artur Romanchev Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="React Engineer, Software Engineer, JavaScript Engineer, Frontend, ReactJS"
        />
        <meta name="author" content="Artur Romanchev" />
        <meta property="og:title" content="Artur Romanchev - Developer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Artur Romanchev" />
        <meta
          property="og:description"
          content="Frontend Developer, Software Engineer, Blockchain Developer."
        />
        <meta property="og:image" content="/meta-img.png" />
      </Head>
      <main>
        <ThemeChanger />
        <Introduce />
        <About />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
