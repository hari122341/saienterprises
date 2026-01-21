import { motion } from 'framer-motion';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const allLocations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      region: companyInfo.locations.headquarters.state,
      country: 'India',
      type: 'Head Office',
      isHQ: true,
      coordinates: { x: 72, y: 45 }
    },
    ...companyInfo.locations.branches.map((b, i) => ({ 
      city: b.city, 
      region: b.state || 'India',
      country: 'India',
      type: 'Branch',
      isHQ: false,
      coordinates: { x: 68 + i * 4, y: 38 + i * 8 }
    })),
    { 
      city: companyInfo.locations.overseas.city, 
      region: companyInfo.locations.overseas.country,
      country: 'Kenya',
      type: 'Overseas',
      isHQ: false,
      coordinates: { x: 55, y: 52 }
    },
  ];

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative map grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-6">
              Global Presence
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-8">
              Serving clients across<br />
              <span className="text-primary-foreground/70">two continents.</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-lg">
              From our headquarters in Hyderabad, we've expanded our reach across India and into East Africa, 
              building lasting partnerships wherever print thrives.
            </p>

            {/* Location Cards - Stacked */}
            <div className="space-y-4">
              {allLocations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    flex items-center justify-between p-5 border transition-colors duration-300
                    ${location.isHQ 
                      ? 'border-primary-foreground/30 bg-primary-foreground/5' 
                      : 'border-primary-foreground/10 hover:border-primary-foreground/20'
                    }
                  `}
                >
                  <div className="flex items-center gap-5">
                    {/* Ping dot */}
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${location.isHQ ? 'bg-primary-foreground' : 'bg-primary-foreground/40'}`} />
                      {location.isHQ && (
                        <motion.div
                          animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 w-3 h-3 rounded-full bg-primary-foreground"
                        />
                      )}
                    </div>

                    <div>
                      <h4 className="font-serif text-xl text-primary-foreground">
                        {location.city}
                      </h4>
                      <span className="text-xs text-primary-foreground/50">
                        {location.region}
                      </span>
                    </div>
                  </div>

                  {location.isHQ && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70 border border-primary-foreground/20 px-3 py-1">
                      HQ
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Map Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
          >
            {/* Abstract map container */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* India to Kenya arc */}
                <motion.path
                  d="M 72 45 Q 60 40 55 52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-primary-foreground/20"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Internal India connections */}
                <motion.path
                  d="M 72 45 L 68 38 L 72 46 L 76 54"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-primary-foreground/15"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>

              {/* Location points */}
              {allLocations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.15,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="absolute"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative group cursor-default">
                    {/* Outer glow for HQ */}
                    {location.isHQ && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 w-8 h-8 -m-2 rounded-full bg-primary-foreground/20"
                      />
                    )}
                    
                    {/* Point */}
                    <div className={`
                      w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-150
                      ${location.isHQ 
                        ? 'bg-primary-foreground border-primary-foreground' 
                        : 'bg-transparent border-primary-foreground/40 group-hover:border-primary-foreground'
                      }
                    `} />

                    {/* Label */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-primary-foreground bg-primary px-2 py-1">
                        {location.city}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Region labels */}
              <div className="absolute right-4 top-1/4 text-right">
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/30">
                  India
                </span>
              </div>
              <div className="absolute left-1/4 bottom-1/3">
                <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/30">
                  Kenya
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
