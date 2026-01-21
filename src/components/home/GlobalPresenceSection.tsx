import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { companyInfo } from '@/data/products';

const GlobalPresenceSection = () => {
  const locations = [
    { 
      city: companyInfo.locations.headquarters.city, 
      region: companyInfo.locations.headquarters.state,
      country: 'India',
      isHQ: true,
      lat: 17.385,
      lng: 78.486
    },
    { city: 'New Delhi', region: 'Delhi', country: 'India', isHQ: false, lat: 28.613, lng: 77.209 },
    { city: 'Pune', region: 'Maharashtra', country: 'India', isHQ: false, lat: 18.520, lng: 73.856 },
    { city: 'Vijayawada', region: 'Andhra Pradesh', country: 'India', isHQ: false, lat: 16.506, lng: 80.648 },
    { 
      city: companyInfo.locations.overseas.city, 
      region: companyInfo.locations.overseas.country,
      country: 'Kenya',
      isHQ: false,
      lat: -1.286,
      lng: 36.817
    },
  ];

  // Convert lat/lng to SVG coordinates (simple mercator-like projection)
  const toSvgCoords = (lat: number, lng: number) => {
    // Focusing on India-Africa region
    const x = ((lng - 30) / 70) * 100; // 30-100 degrees longitude
    const y = ((35 - lat) / 50) * 100; // 35 to -15 degrees latitude
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) };
  };

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              Global Presence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Serving clients across<br />two continents.
            </h2>
            <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed">
              From our headquarters in Hyderabad, we've expanded across India and into East Africa.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 relative bg-card border border-border rounded-sm overflow-hidden"
            >
              {/* SVG Map */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full aspect-[4/3]"
                style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--card)) 100%)' }}
              >
                {/* Grid pattern */}
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Simplified continent outlines */}
                {/* India outline (simplified) */}
                <motion.path
                  d="M 65 25 Q 72 28 75 35 Q 78 42 76 52 Q 72 58 68 55 Q 64 50 62 42 Q 60 35 65 25"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.2 }}
                />
                
                {/* Africa outline (simplified - East Africa focus) */}
                <motion.path
                  d="M 15 35 Q 25 30 35 38 Q 40 50 35 65 Q 25 75 20 70 Q 12 60 15 35"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.4 }}
                />

                {/* Connection lines between locations */}
                {locations.filter(l => !l.isHQ).map((location, index) => {
                  const hq = locations.find(l => l.isHQ)!;
                  const from = toSvgCoords(hq.lat, hq.lng);
                  const to = toSvgCoords(location.lat, location.lng);
                  
                  return (
                    <motion.path
                      key={location.city}
                      d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 10} ${to.x} ${to.y}`}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.3"
                      strokeDasharray="2,2"
                      opacity="0.4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.15 }}
                    />
                  );
                })}

                {/* Location markers */}
                {locations.map((location, index) => {
                  const coords = toSvgCoords(location.lat, location.lng);
                  
                  return (
                    <g key={location.city}>
                      {/* Pulse ring for HQ */}
                      {location.isHQ && (
                        <motion.circle
                          cx={coords.x}
                          cy={coords.y}
                          r="4"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="0.5"
                          initial={{ r: 2, opacity: 0.8 }}
                          animate={{ r: 8, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      )}
                      
                      {/* Marker dot */}
                      <motion.circle
                        cx={coords.x}
                        cy={coords.y}
                        r={location.isHQ ? 2.5 : 1.5}
                        fill={location.isHQ ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                      />

                      {/* City label */}
                      <motion.text
                        x={coords.x}
                        y={coords.y - 4}
                        textAnchor="middle"
                        className="text-[2.5px] fill-foreground font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        {location.city}
                      </motion.text>
                    </g>
                  );
                })}

                {/* Region labels */}
                <text x="70" y="15" className="text-[3px] fill-muted-foreground uppercase tracking-widest">India</text>
                <text x="20" y="80" className="text-[3px] fill-muted-foreground uppercase tracking-widest">Kenya</text>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Head Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span>Branch</span>
                </div>
              </div>
            </motion.div>

            {/* Location Cards */}
            <div className="lg:col-span-2 space-y-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    group flex items-center gap-4 p-4 border transition-all duration-300
                    ${location.isHQ 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-card border-border hover:border-primary/30'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${location.isHQ 
                      ? 'bg-primary-foreground/10' 
                      : 'bg-secondary group-hover:bg-primary/10'
                    }
                  `}>
                    <MapPin className={`w-4 h-4 ${location.isHQ ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-serif text-lg truncate ${location.isHQ ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {location.city}
                    </h4>
                    <p className={`text-xs truncate ${location.isHQ ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {location.region}, {location.country}
                    </p>
                  </div>

                  {location.isHQ && (
                    <span className="text-[9px] uppercase tracking-wider text-primary-foreground/80 bg-primary-foreground/10 px-2 py-1 shrink-0">
                      HQ
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
