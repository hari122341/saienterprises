import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const allLocations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      region: companyInfo.locations.headquarters.state,
      type: 'Head Office',
      isHQ: true 
    },
    ...companyInfo.locations.branches.map(b => ({ 
      city: b.city, 
      region: b.state || 'India',
      type: 'Branch',
      isHQ: false 
    })),
    { 
      city: companyInfo.locations.overseas.city, 
      region: companyInfo.locations.overseas.country,
      type: 'Overseas',
      isHQ: false 
    },
  ];

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption */}
          <p className="caption mb-8">Global Presence</p>

          {/* Heading */}
          <h2 className="text-foreground mb-12 max-w-xl">
            Serving clients across India and East Africa.
          </h2>

          {/* Location Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {allLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${location.isHQ ? 'md:col-span-1' : ''}`}
              >
                {/* Pin Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                    location.isHQ 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>

                {/* City Name */}
                <h4 
                  className={`text-lg md:text-xl mb-1 ${
                    location.isHQ ? 'text-primary' : 'text-foreground'
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {location.city}
                </h4>

                {/* Region */}
                <p className="text-xs text-muted-foreground">
                  {location.region}
                </p>

                {/* Type Badge - only for HQ */}
                {location.isHQ && (
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-primary font-medium">
                    {location.type}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map visualization placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 relative h-48 md:h-64 rounded-lg bg-secondary/50 overflow-hidden"
          >
            {/* Minimal map representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* India dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full"
                />
                {/* Kenya dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute left-20 top-4 w-2 h-2 bg-primary/60 rounded-full"
                />
                {/* Connection line */}
                <div className="absolute left-1.5 top-1.5 w-20 h-px bg-primary/20 origin-left rotate-6" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
              India · Kenya
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
