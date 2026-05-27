import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 via-primary/3 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center px-4 py-1.5 mb-8 text-sm bg-secondary text-primary rounded-full border border-primary/10">
          <span className="ml-1">Your Search Ends Here</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
          Build Your{' '}
          <span className="text-primary">Digital</span>{' '}
          Future
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          We help ambitious founders build intelligent, scalable products with strong, production ready engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-primary-foreground bg-primary rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-foreground bg-background border border-border rounded-full font-medium hover:bg-muted transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
