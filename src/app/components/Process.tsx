import { CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'Meet with our team and discuss your project goals',
    },
    {
      number: '2',
      title: 'Requirements Analysis',
      description: 'Identify your unique needs and technical challenges',
    },
    {
      number: '3',
      title: 'Custom Solution Design',
      description: 'Receive a tailored plan integrating the best technologies',
    },
    {
      number: '4',
      title: 'Agile Development',
      description: 'Engage in iterative development with continuous feedback',
    },
    {
      number: '5',
      title: 'Launch & Support',
      description: 'Deploy your solution and receive ongoing support',
    },
  ];

  const checklistItems = [
    'Schedule a free consultation call',
    'Receive a detailed project proposal',
    'Review and approve the development plan',
    'Begin your digital transformation journey',
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">How We Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Your Path to{' '}
            <span className="text-primary">Success</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          Astroka offers a streamlined approach to software development. Our process is designed to deliver quality solutions efficiently and transparently.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Checklist */}
          <div className="bg-muted/30 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Getting Started</h3>
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="mt-8 px-6 py-3 text-primary-foreground bg-primary rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Begin Your Project
            </button>
          </div>

          {/* Right side - Steps */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Our Experience</h3>
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary text-primary font-semibold flex items-center justify-center flex-shrink-0 text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
