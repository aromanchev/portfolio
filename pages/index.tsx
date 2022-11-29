import Head from "next/head";
import { Introduce, About, Projects } from "../blocks";
import { WorkExperience } from "../blocks/work-experience";
import { Footer } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Romanchev</title>
        <meta name="description" content="Artur Romanchev Software Engineer" />
        <meta
          name="keywords"
          content="React Engineer, Software Engineer, JavaScript Engineer, Frontend, ReactJS"
        />
        <meta name="author" content="Artur Romanchev" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduce />
        <About />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
