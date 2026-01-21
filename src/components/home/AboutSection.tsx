import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="border-t border-border bg-background">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Caption */}
          <p className="caption mb-8">About Us</p>

          {/* Main Statement */}
          <h2 className="text-foreground mb-8 text-balance">
            More than machinery suppliers.
          </h2>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              With over 24 years of experience in the graphic and corrugation machinery industry, 
              Sai Enterprises has established itself as a trusted partner for printers across 
              India and East Africa.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We undertake thorough consultancy before every sale, ensuring you get the right 
              machinery for your specific requirements. Our commitment extends beyond the sale — 
              installation, commissioning, and ongoing service support are part of our promise.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground font-medium"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              We believe in long-term relationships — growing together with our clients as their 
              trusted machinery partner.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
