import React from "react";
import {
  GraduationCap,
  BookOpen,
  Video,
  Brain,
} from "lucide-react";

function Education() {
  const resources = [
    {
      icon: <GraduationCap size={42} color="#387ED1" />,
      title: "Trading Academy",
      desc: "Master stock markets with beginner to advanced trading courses.",
    },
    {
      icon: <BookOpen size={42} color="#387ED1" />,
      title: "Investment Guides",
      desc: "Learn portfolio building, risk management and wealth creation.",
    },
    {
      icon: <Video size={42} color="#387ED1" />,
      title: "Live Webinars",
      desc: "Weekly expert sessions covering market trends and trading strategies.",
    },
    {
      icon: <Brain size={42} color="#387ED1" />,
      title: "AI Learning",
      desc: "Get personalized learning paths based on your investment goals.",
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Learn. Invest. Grow.
        </h2>

        <p
          style={{
            color: "var(--secondary-text)",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          TradeNest Academy helps you become a smarter investor through
          interactive courses, webinars, AI insights and expert resources.
        </p>
      </div>

      <div className="row g-4">

        {resources.map((item, index) => (

          <div className="col-lg-3 col-md-6" key={index}>

            <div className="feature-card text-center h-100 p-4">

              <div className="mb-3">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;