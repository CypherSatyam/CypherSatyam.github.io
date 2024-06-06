import { Analytics } from "./Analytics";

export const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-col">
          <div className="hero-content">
            <p> we are the best series</p>
            <h1>Welcome to My First Project</h1>
            <p>
              Welcome to your first project! That's exciting! Let's break it
              down into some key steps to help you get started successfully:
              Define Your Project: Objective: What is the main goal of your
              project? Scope: What are the boundaries and limitations?
              Deliverables: What will you produce or achieve?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
          {/* hero image */}
          <div className="hero-image">
            <img src="/images/home.png" alt="coding" width="500" height="500" />
          </div>
        </div>
      </section>
 
      {/* ******************** second section ***************** */}
     <Analytics/>
      {/* *********************** end second section ************* */}
 
      {/* ********************* stert Third section *******************  */}
      <section className="section-hero">
        <div className="container grid grid-two-col">
          {/* hero image */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding"
              width="500"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p> we are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              It sounds like you're ready to take action on something important!
              Could you please provide more details about what you're looking to
              get started with? Whether it's a project, a habit, a learning
              goal, or something else, I'd be happy to help you get started.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};