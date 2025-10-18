"use client";

import Link from "next/link";
import {
  Rocket,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  Target,
  Building2,
  Zap,
  Heart,
  Code,
  Mail,
} from "lucide-react";

export default function ExpoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
            Innovation Expo & InnoVentures&apos; Vault
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            Bangladesh&apos;s premier innovation hub where startups,
            researchers, and changemakers showcase groundbreaking ideas and
            drive national progress
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4 text-dark">
              About the Innovation Expo
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-white">
              <p className="text-lg leading-relaxed mb-8 text-dark">
                The Innovation Expo, the flagship event of Innoverse Bangladesh,
                is a central hub for showcasing groundbreaking ideas, products,
                and technologies shaping the future of entrepreneurship and
                inclusive development. It brings together startups, researchers,
                policymakers, and industry leaders to collaborate, exchange
                insights, and accelerate Bangladesh&apos;s innovation ecosystem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg text-dark">
                      Startups
                    </h3>
                  </div>
                  <p className="text-sm text-dark">
                    15 selected startups exhibiting products and prototypes
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg text-dark">
                      Research
                    </h3>
                  </div>
                  <p className="text-sm text-dark">
                    10–15 research and academic projects competing
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg text-dark">GovTech</h3>
                  </div>
                  <p className="text-sm text-dark">
                    National digital transformation initiatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expo Segments Section */}
      <section className="py-16 px-4 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              Expo Segments
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Startup Pavilion */}
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-primary-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary-background">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">
                  Startup Pavilion
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-dark">
                15 selected startups exhibit products and prototypes, engage
                with investors, and network with policymakers and industry
                leaders. This is a prime opportunity for emerging entrepreneurs
                to showcase their innovations and build strategic partnerships.
              </p>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p className="text-dark">
                  <span className="font-semibold">Focus:</span> Product
                  demonstrations, investor networking, and partnership
                  opportunities
                </p>
              </div>
            </div>

            {/* Project Showcase */}
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-dim-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary-background">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">
                  Project Showcase
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-dark">
                10–15 research and academic projects compete for the prestigious
                Shaheed Tanvin Innovation Award, recognizing innovation with
                strong societal impact. These projects represent the cutting
                edge of academic research and student-led innovation.
              </p>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p className="text-dark">
                  <span className="font-semibold">Award:</span> Shaheed Tanvin
                  Innovation Award for projects with exceptional societal impact
                </p>
              </div>
            </div>

            {/* GovTech Pavilion */}
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-primary-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary-background">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">
                  GovTech Pavilion
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-dark">
                Features national digital transformation initiatives including
                smart governance systems, citizen services, and scalable
                e-governance models. This segment showcases how technology is
                reshaping public service delivery and government efficiency.
              </p>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p className="text-dark">
                  <span className="font-semibold">Highlights:</span> Smart
                  governance, citizen services, and e-governance models
                </p>
              </div>
            </div>

            {/* Tech for Inclusion */}
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-dim">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary-background">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">
                  Tech for Inclusion Pavilion
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-dark">
                An invitation-only segment highlighting assistive technologies,
                inclusive learning platforms, and gender-responsive solutions.
                This pavilion celebrates innovations that make technology
                accessible and beneficial for all members of society.
              </p>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p className="text-dark">
                  <span className="font-semibold">Focus:</span> Assistive
                  technologies, inclusive learning, and gender-responsive
                  solutions
                </p>
              </div>
            </div>
          </div>
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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              How to Participate
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl shadow-md bg-primary-background">
              <p className="text-lg leading-relaxed mb-8 text-dark">
                Startups and project teams can apply via the Innoverse
                Bangladesh portal or by contacting us directly. Submit a brief
                proposal outlining your idea, impact, and feasibility.
              </p>

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

              <div className="mt-8 p-6 rounded-xl bg-secondary-background">
                <h4 className="font-semibold text-lg mb-3 text-dark">
                  Application Requirements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-dark">
                      Clear description of your idea or project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-dark">
                      Demonstrated societal or market impact
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-dark">
                      Feasibility and implementation roadmap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-dark">
                      Team information and credentials
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full flex items-center justify-center py-4">
                <Link
                  href="mailto:innoversebangladesh@gmail.com"
                  className="px-8 py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 bg-primary text-white"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
