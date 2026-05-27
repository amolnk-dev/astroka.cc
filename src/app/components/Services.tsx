import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Link,
  Palette,
  Mic,
  MessageSquare,
  Users,
  CreditCard,
  BookOpen,
  Server,
  GitBranch,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'CRM Development',
      description:
        'Enterprise-grade customer relationship management systems built to streamline sales pipelines, automate workflows, and enhance client engagement for scalable business growth.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'High-performance, SEO-optimized web applications with modern frameworks, responsive design, and seamless user experiences that drive conversions and engagement.',
    },
    {
      icon: Smartphone,
      title: 'MobileApp Development',
      description:
        'Native iOS and Android apps plus cross-platform solutions using React Native and Flutter, delivering engaging mobile experiences that users love.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description:
        'Scalable cloud infrastructure on AWS, Azure, and GCP with CI/CD pipelines, containerization, and infrastructure-as-code for optimal performance and cost efficiency.',
    },
    {
      icon: Link,
      title: 'API Development & Integration',
      description:
        'RESTful and GraphQL API development with secure third-party integrations, enabling seamless data flow between systems and unlocking new business capabilities.',
    },
    {
      icon: Palette,
      title: 'Designing',
      description:
        'User-centered design with intuitive interfaces, accessibility compliance, and conversion-optimized layouts that elevate brand identity and user satisfaction.',
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description:
        'Robust data pipelines, ETL processes, and business intelligence dashboards that transform raw data into actionable insights for data-driven decision making.',
    },
  ];

  const aiAgents = [
    {
      icon: Mic,
      title: 'Voice Agent',
      description:
        'Intelligent voice-powered AI assistants for customer support, appointment scheduling, and hands-free interactions using advanced speech recognition and natural language processing.',
    },
    {
      icon: MessageSquare,
      title: 'Chat Agent',
      description:
        'Conversational AI chatbots for 24/7 customer engagement, lead qualification, and instant support across websites, messaging apps, and enterprise platforms.',
    },
    {
      icon: Users,
      title: 'LeadGen Agent',
      description:
        'AI-powered lead generation agents that identify, qualify, and nurture prospects automatically, integrating with your CRM to accelerate sales pipeline growth.',
    },
    {
      icon: CreditCard,
      title: 'CreditOps Agent',
      description:
        'Automated credit operations agents for underwriting, risk assessment, collections optimization, and compliance workflows in financial services.',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Agent',
      description:
        'Enterprise knowledge management AI that indexes, retrieves, and synthesizes information from documents, databases, and internal systems for instant answers.',
    },
    {
      icon: Server,
      title: 'SRE Agent',
      description:
        'Site reliability engineering agents that monitor infrastructure, detect anomalies, auto-remediate incidents, and optimize system performance proactively.',
    },
    {
      icon: GitBranch,
      title: 'SDLC Agent',
      description:
        'Software development lifecycle agents that assist with code reviews, automated testing, documentation generation, and deployment orchestration.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Main Services Section */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What is <span className="text-primary">Astroka</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Astroka is a full-service technology partner delivering custom software development, AI-powered automation, cloud solutions, and digital transformation services for startups, SMBs, and enterprises worldwide.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>

        {/* Generative AI Agents Section */}
        <div className="bg-muted/30 rounded-3xl p-8 sm:p-12">
          <header className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
              <Brain className="mr-2" size={16} />
              Generative AI Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              AI Agents for <span className="text-primary">Business Automation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deploy intelligent AI agents powered by large language models, retrieval-augmented generation (RAG), and agentic workflows to automate complex business processes, reduce operational costs, and scale customer interactions.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <article
                  key={index}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
