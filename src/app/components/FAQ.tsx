import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How can AI solutions help my business grow?',
      answer:
        'AI solutions can automate repetitive tasks, provide data-driven insights, enhance customer experiences through personalization, and unlock new revenue opportunities. From predictive analytics to intelligent chatbots, AI can transform how you operate and compete in your market.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We work with clients across various industries including healthcare, finance, e-commerce, education, and manufacturing. Our versatile team adapts to your industry-specific needs and regulatory requirements to deliver compliant and effective solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while enterprise software or AI solutions can take months. We provide detailed timelines during the planning phase and keep you updated throughout development.',
    },
    {
      question: 'What is your development approach?',
      answer:
        'We follow an Agile methodology with iterative sprints, regular client feedback, and continuous integration. This ensures flexibility, transparency, and the ability to adapt to changing requirements while maintaining high quality standards.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Our support packages are flexible and can be customized to your specific needs and budget.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Common{' '}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to frequently asked questions about our services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
