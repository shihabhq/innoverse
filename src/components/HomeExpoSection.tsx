import Link from "next/link";

const HomeExpoSection = () => {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-balance">
            Innovation Expo & <span className="text-primary">InnoVentures&apos; Vault</span> 2025
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto text-pretty"
            style={{ color: "var(--color-dark-accent)", opacity: 0.7 }}
          >
            Bangladesh&apos;s Next-Gen Changemakers Uniting Ideas, Impact &
            Innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl shadow-md mb-8"
            style={{ backgroundColor: "white" }}
          >
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-dark-accent)" }}
            >
              Bangladesh&apos;s premier innovation hub—where startups,
              researchers, and changemakers converge to showcase groundbreaking
              ideas, inclusive technologies, and GovTech solutions. Experience
              live pitches, the prestigious Shaheed Tanvin Innovation Award, and
              exclusive networking with investors, policymakers, and industry
              leaders—empowering the next generation of innovators driving
              national progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/expo"
                className="px-8 bg-primary text-white py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Explore the Expo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExpoSection;
