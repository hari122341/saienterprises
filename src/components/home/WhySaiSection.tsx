import { motion } from 'framer-motion';

const reasons = [
  {
    title: '24+ Years of Experience',
    description: 'Established trust and deep industry expertise since our founding.',
  },
  {
    title: 'Consultancy Before Selling',
    description: 'We understand your needs first, then recommend the right machinery.',
  },
  {
    title: 'New & Refurbished Options',
    description: 'Quality machinery at various price points to suit your budget.',
  },
  {
    title: 'Installation & Service Support',
    description: 'Complete installation, commissioning, and ongoing technical support.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We grow with our clients, building relationships that last decades.',
  },
  {
    title: 'Genuine Brand Products',
    description: 'Only authentic products from globally renowned manufacturers.',
  },
];

const WhySaiSection = () => {
  return (
    <section className="border-t border-border bg-background">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption */}
          <p className="caption mb-8">Why Sai Enterprises</p>

          {/* Heading */}
          <h2 className="text-foreground mb-16 max-w-xl">
            Your trusted partner in print excellence.
          </h2>

          {/* Reasons - Two column editorial layout */}
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 max-w-4xl">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                {/* Number */}
                <span className="inline-block text-xs text-muted-foreground/50 font-medium mb-3">
                  0{index + 1}
                </span>

                {/* Title */}
                <h4 
                  className="text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {reason.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySaiSection;
