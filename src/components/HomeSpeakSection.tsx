import { TrendingUp, Users } from "lucide-react";
import React from "react";

const HomeSpeakSection = () => {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-dark-accent font-bold mb-4 text-balance">
            Imagine. <span className="text-primary">Innovate.</span> Innoverse.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty">
            Where dialogue meets discovery — inspiring the minds shaping our
            digital future.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* First Block - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
              <img
                src="/home/speaker.webp"
                alt="Speaker presenting at conference"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="p-6 md:p-8 rounded-2xl shadow-md"
              style={{ backgroundColor: "white" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "var(--color-secondary-background)",
                  }}
                >
                  <Users
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "var(--color-dark-accent)" }}
                >
                  Seminar on Cyber Security
                </h3>
              </div>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-dark-accent)" }}
              >
                A student-focused event at Innoverse featuring expert sessions,
                interactive quizzes, a keynote, and prizes to inspire innovation
                and dialogue on the nation&apos;s digital transformation. Join
                us to celebrate ideas, explore the power of innovation, and be
                part of a community shaping tomorrow’s digital world. It’s a
                platform where young minds connect, collaborate, and shape ideas
                that drive the future of technology.
              </p>
            </div>
          </div>

          {/* Second Block - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 p-6 md:p-8 rounded-2xl shadow-md bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary-background">
                  <TrendingUp
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "var(--color-dark-accent)" }}
                >
                  Expert-Led Inspiration
                </h3>
              </div>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-dark-accent)" }}
              >
                Top experts in astronomy, economics, tech, and STEM share
                stories and strategies to inspire 2,000–4,000 youth to dream
                big, innovate, and take action. Through engaging talks and
                real-world insights, participants will gain the motivation and
                skills to shape a smarter, more connected future.It’s not just
                about learning — it’s about sparking a movement of young
                innovators ready to transform ideas into impact.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
              <img
                src="/home/ted-talk.webp"
                alt="TED talk style speaker inspiring audience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSpeakSection;
