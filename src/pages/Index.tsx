import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Md. Redwan Hossen | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Md. Redwan Hossen - A passionate software developer specializing in C#, .NET Core, and web technologies. 4th Year CSE student at AUST."
        />
        <meta
          name="keywords"
          content="Md. Redwan Hossen, software developer, C#, .NET Core, ASP.NET, web developer, Bangladesh, AUST"
        />
        <meta property="og:title" content="Md. Redwan Hossen | Software Developer" />
        <meta
          property="og:description"
          content="Portfolio of Md. Redwan Hossen - A passionate software developer specializing in C#, .NET Core, and web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
