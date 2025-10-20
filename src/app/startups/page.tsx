"use client";

import Link from "next/link";
import { Users, TrendingUp, Sparkles, Zap, Mail } from "lucide-react";

import React from "react";

const StartupsPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 md:pt-24 pb-10 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
            Innoventure&apos; Vault
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            Great Opportunity for Startups to Showcase and Pitch their
            Innovations to raise their initial funding. Innoventures&apos; Vault
            gives a Shark Tank–Style Pitching Experience.
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-6">
          <Link
            href="/startups/register"
            className="px-8 py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 bg-white text-primary"
          >
            Register Startup
          </Link>
        </div>
      </section>

      {/* InnoVentures&apos; Vault Section */}
      <section className="py-16 px-4 md:py-24 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              InnoVentures&apos; Vault
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty text-dark opacity-70">
              Shark Tank–Style Pitching Experience
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl shadow-md mb-8 bg-white">
              <p className="text-lg leading-relaxed mb-8 text-dark">
                The InnoVentures&apos; Vault is the Expo&apos;s flagship startup
                recognition platform, offering a Shark Tank–style pitching
                experience. Startups from the Startup Pavilion present their
                innovations to a panel of investors, venture capitalists,
                mentors, and policymakers, receiving real-time feedback on
                market fit, scalability, and impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg text-dark">
                      Real-Time Feedback
                    </h4>
                  </div>
                  <p className="text-sm text-dark">
                    Assessment on market fit, scalability, and societal impact
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg text-dark">
                      Growth Opportunities
                    </h4>
                  </div>
                  <p className="text-sm text-dark">
                    Seed funding, incubation support, and corporate partnerships
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg text-dark">
                      Expert Panel
                    </h4>
                  </div>
                  <p className="text-sm text-dark">
                    Investors, venture capitalists, mentors, and policymakers
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg text-dark">
                      Strategic Mentorship
                    </h4>
                  </div>
                  <p className="text-sm text-dark">
                    Tailored guidance and resources for promising ventures
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-dim">
                <p className="text-base leading-relaxed text-dark">
                  <span className="font-semibold">The Experience:</span> Each
                  startup delivers a short pitch while also managing an
                  interactive stall, giving visitors and industry leaders a
                  hands-on view of their solutions. This platform bridges
                  visibility and investment, turning innovative ideas into
                  actionable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section className="py-16 px-4 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              How to Participate?
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-primary-background">
              {/* Intro */}
              <p className="text-lg leading-relaxed text-dark">
                If you’re a startup or a project team ready to showcase your
                innovation, we’d love to hear from you! Register your startup
                through our portal or reach out directly via email.
              </p>

              {/* Register Button */}
              <div className="w-full flex items-center justify-center py-6">
                <Link
                  href="/startups/register"
                  className="px-8 py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 bg-primary text-white"
                >
                  Register Startup
                </Link>
              </div>

              {/* Email Section */}
              <div className="flex items-center gap-4 p-6 rounded-xl bg-white">
                <Mail className="w-8 h-8 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-dark">
                    Email Us
                  </h4>
                  <p className="text-dark">
                    <Link
                      href="mailto:innoversebangladesh@gmail.com"
                      className="hover:underline"
                    >
                      innoversebangladesh@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartupsPage;
