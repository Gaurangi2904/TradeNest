import { Code, Cloud, Brain } from "lucide-react";

function Team() {
  return (
    <section className="container py-5">

      {/* Skills */}

      <div className="row mt-5 g-3">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <Code size={40} color="#387ED1" />
            <h5 className="mt-3">Full Stack</h5>
            <p className="text-muted mb-0">
              React, Node.js, Express & MongoDB
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <Cloud size={40} color="#387ED1" />
            <h5 className="mt-3">Cloud</h5>
            <p className="text-muted mb-0">
              AWS, Docker & Deployment
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4 text-center h-100">
            <Brain size={40} color="#387ED1" />
            <h5 className="mt-3">AI</h5>
            <p className="text-muted mb-0">
              AI Integration & Smart Analytics
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Team;