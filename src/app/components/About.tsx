import { Award, Zap, HeadphonesIcon } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Team',
      description: '15+ years of combined experience in cutting-edge technology',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging the latest AI and cloud technologies',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: '24/7 support to ensure your success',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Your Path to{' '}
              <span className="text-primary">Digital Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Astroka, we transform ideas into reality through innovative technology solutions. Our team of expert developers, designers, and AI specialists work together to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We believe in building partnerships with our clients, understanding their unique challenges, and crafting tailored solutions that drive real business value.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/156ecb5a9-fXUaMwQb6xj8Yd9M35cShDWtUSMUaR.png"
                alt="Astroka team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-lg border border-border">
              <div className="text-3xl font-semibold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
