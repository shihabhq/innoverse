"use client";

import Link from "next/link";
import { ArrowLeft, Award, Users, CheckCircle, Trophy } from "lucide-react";

export default function AwardPage() {
  return (
    <div className="min-h-screen ">
      {/* <div className="max-w-7xl mx-auto bg-primary text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
          Shaheed Tanvin Innovation Award
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Flagship Recognition of the Project Showcase Segment
        </p>
      </div> */}

      {/* About Shaheed Tanvin Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-dark-accent mb-8 sm:mb-12">
            About Shaheed Tanvin
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image with Dark Filter */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shaheed-tanvin-H85gP5Ti5KdA8ukErsolAJsZjEjCq9.png"
                  alt="Shaheed Tanvin"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {/* Tribute Dark Filter Overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The award is named in memory of{" "}
                <span className="font-semibold text-primary">
                  Shaheed Tanvin
                </span>
                , a young visionary and innovator whose dedication, courage, and
                commitment to societal progress continue to inspire
                Bangladesh&apos;s future generations.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Tanvin&apos;s life symbolized resilience, creativity, and
                service to the community—values that the Innovation Expo seeks
                to cultivate among young researchers and innovators.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Through his work and ideals, Tanvin emphasized the power of
                ideas to create real impact, whether through technological
                solutions, research breakthroughs, or community-driven
                initiatives. The award celebrates not just technical excellence,
                but also the spirit of innovation for societal good, encouraging
                participants to think beyond conventional boundaries and address
                pressing challenges with ingenuity and empathy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Award Details Section */}
      <div className=" py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-dark-accent mb-8 sm:mb-12">
            Award Details
          </h2>

          {/* Concept */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-start gap-4 mb-4">
              <Award className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-accent mb-3">
                  Concept
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Shaheed Tanvin Innovation Award is the highest recognition
                  within the Project Showcase segment of the Innovation Expo. It
                  is presented to the most outstanding project that demonstrates
                  excellence in research, innovation, and practical application.
                </p>
              </div>
            </div>
          </div>

          {/* Participants */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-start gap-4 mb-4">
              <Users className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-accent mb-3">
                  Participants
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      All shortlisted teams (~30 projects) from the Project
                      Showcase
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Includes academic research, prototypes, and independent
                      innovations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Criteria for Evaluation */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle
                className="text-primary flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-accent mb-3">
                  Criteria for Evaluation
                </h3>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <span className="font-semibold text-dark-accent">
                        Innovation & Novelty
                      </span>
                      <p className="text-gray-600">
                        Creativity and originality of the project
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <span className="font-semibold text-dark-accent">
                        Technical Merit
                      </span>
                      <p className="text-gray-600">
                        Depth of research, methodology, and technical soundness
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <span className="font-semibold text-dark-accent">
                        Feasibility & Scalability
                      </span>
                      <p className="text-gray-600">
                        Potential for real-world application
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <span className="font-semibold text-dark-accent">
                        Impact
                      </span>
                      <p className="text-gray-600">
                        Potential to address pressing challenges or advance
                        knowledge
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Structure & Flow */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-dark-accent mb-4">
              Structure & Flow
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-dark-accent mb-2">
                  Project Showcase Stalls
                </h4>
                <p className="text-gray-700">
                  Teams display their work in Expo stalls and engage with
                  visitors. Judges interact directly with teams for evaluation.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-dark-accent mb-2">
                  Evaluation by Jury
                </h4>
                <p className="text-gray-700">
                  Panel of academicians, industry experts, and policymakers
                  visit stalls. Scores determine the top winners.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-dark-accent mb-2">
                  Award Ceremony
                </h4>
                <p className="text-gray-700">
                  At the Closing Ceremony, the Shaheed Tanvin Innovation Award
                  is announced as the top prize, awarded to the top three best
                  innovative projects.
                </p>
              </div>
            </div>
          </div>

          {/* Recognition & Value */}
          <div>
            <div className="flex items-start gap-4">
              <Trophy className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-accent mb-3">
                  Recognition & Value
                </h3>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">★</span>
                    <span>Prize Money for the winners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">★</span>
                    <span>
                      Exclusive Crest & Certificate under the Tanvin Award name
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose & Significance Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-dark-accent mb-8 sm:mb-12">
            Purpose & Significance
          </h2>

          <div className="bg-primary-background p-6 sm:p-8 lg:p-10 rounded-lg border-l-4 border-primary">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              The Shaheed Tanvin Innovation Award stands as a beacon of
              inspiration for innovators, highlighting projects that exemplify:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span className="text-gray-700">
                  Creativity and originality in concept
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span className="text-gray-700">
                  Technical rigor and methodological excellence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span className="text-gray-700">
                  Practical feasibility and scalability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span className="text-gray-700">
                  Societal impact and relevance
                </span>
              </li>
            </ul>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              It is a tribute to Tanvin&apos;s legacy, linking his ideals to
              contemporary innovation, and providing a platform where young
              researchers can gain recognition, mentorship, and opportunities to
              bring their projects to life. By naming the award after Shaheed
              Tanvin, the Expo reinforces the values of courage, perseverance,
              and vision-driven innovation, motivating participants to pursue
              excellence with purpose.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">
            Be Part of the Innovation
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Join the Innovation Expo and showcase your groundbreaking ideas
          </p>
          <Link
            href="/expo"
            className="inline-block bg-white transition-all shadow-sm hover:-translate-y-1 text-dark-accent px-6 sm:px-8 py-3 rounded-sm font-semibold"
          >
            Explore the Expo
          </Link>
        </div>
      </div>
    </div>
  );
}
