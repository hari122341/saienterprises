import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  {
    number: '24+',
    unit: 'Years',
    title: 'Industry Experience',
    description: 'Established trust and expertise since 2000.',
  },
  {
    number: '500+',
    unit: 'Clients',
    title: 'Successful Partnerships',
    description: 'Printers across India and East Africa trust us.',
  },
  {
    number: '100%',
    unit: 'Genuine',
    title: 'Authentic Products',
    description: 'Only original machinery from renowned brands.',
  },
  {
    number: '2',
    unit: 'Continents',
    title: 'Global Reach',
    description: 'Serving clients in India and Kenya.',
  },
];

const commitments = [
  'Consultancy before every sale',
  'New & refurbished machinery options',
  'Complete installation support',
  'Ongoing technical maintenance',
  'Long-term partnership approach',
  'Exclusive HPM sole agency',
];

const WhySaiSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Why Choose Us
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Your trusted partner in<br />print excellence.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Every partnership begins with trust. Here's why leading printers choose Sai Enterprises.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 md:p-8 bg-card border border-border hover:border-primary/30 transition-colors text-center"
              >
                {/* Number */}
                <div className="mb-4">
                  <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
                    {reason.number}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {reason.unit}
                  </span>
                </div>

                {/* Title & Description */}
                <h4 className="font-serif text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Commitments Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/50 border border-border p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Title */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Our commitment to you
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just sell machinery. We build partnerships through genuine service, 
                  expert guidance, and unwavering support at every step.
                </p>
              </div>

              {/* Right - Checklist */}
              <div className="grid sm:grid-cols-2 gap-3">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-sm text-foreground">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySaiSection;
