import type { Route } from "./+types/home";
import Navbar from "../../Components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../Components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar />;

        <section className="hero">
          <div className="announce">
            <div className="dot">
              <div className="pulse"></div>
            </div>
            <p> floor planer </p>
          </div>

          <h1>Build beautifull spaces at the speed</h1>
          <p className="subtitle">
            floor planer helps you visulaize and render architectural projects faster
          </p>

          <div className="actions">
            <a href="#upload" className="cta">
              start Building <ArrowRight className="icon" />
            </a>

            <Button variant="outline" size="lg" className="demo">
               Watch Demo
            </Button>
          </div>
          <div id="upload" className="upload-shell">
            <div className="grid-overlay" />

            <div className="upload-card">
              <div className="upload-head">
                <div className="upload-icon">
                  <Layers className="icon" />
                </div>

                <h3>Upload your floor plan</h3>
                <p>Supports JPG, PNG, formats up to 10MB</p>
              </div>

              <p>Upload images</p>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="section-inner">
            <div className="section-head">
              <div className="copy">
                <h2>Projects</h2>
                <p>Your latest work and shared community projects, all in one place.</p>
              </div>
            </div>

            <div className="projects-grid">
              {projects.map(({id, name, renderedImage, sourceImage, timestamp}) => (
                  <div key={id} className="project-card group" onClick={() => navigate(`/visualizer/${id}`)}>
                    <div className="preview">
                      <img  src={renderedImage || sourceImage} alt="Project"
                      />

                      <div className="badge">
                        <span>Community</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <div>
                        <h3>{name}</h3>

                        <div className="meta">
                          <Clock size={12} />
                          <span>{new Date(timestamp).toLocaleDateString()}</span>
                          <span>By romanramen</span>
                        </div>
                      </div>
                      <div className="arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  )

}
