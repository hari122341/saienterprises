import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronLeft, ChevronRight, Zap, Settings, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface MachinePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  categorySlug: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

// Generate placeholder image based on category
const getCategoryImage = (category: string) => {
  const images: Record<string, string> = {
    'pre-press': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    'press': 'https://images.unsplash.com/photo-1581092160607-ee22731e3a0f?w=800&h=600&fit=crop',
    'post-press': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    'corrugation': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
  };
  return images[category] || images['press'];
};

const MachinePreviewModal = ({ 
  isOpen, 
  onClose, 
  product, 
  categorySlug,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}: MachinePreviewModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop with heavy blur */}
          <motion.div 
            className="absolute inset-0 bg-foreground/80"
            style={{ backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-background overflow-hidden rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/90 flex items-center justify-center text-background hover:bg-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Navigation arrows */}
            {hasPrev && onPrev && (
              <motion.button
                onClick={onPrev}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center text-background hover:bg-foreground transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}
            {hasNext && onNext && (
              <motion.button
                onClick={onNext}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center text-background hover:bg-foreground transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            <div className="grid md:grid-cols-2 max-h-[90vh] overflow-auto">
              {/* Image Section */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-secondary overflow-hidden">
                <motion.img 
                  key={product.id}
                  src={product.image || getCategoryImage(product.category)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-transparent" />
                
                {/* Category badge */}
                <motion.div 
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-medium rounded-full">
                    {product.category.replace('-', ' ')}
                  </span>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="flex-1">
                  <motion.h2 
                    className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {product.name}
                  </motion.h2>
                  
                  {product.description && (
                    <motion.p 
                      className="text-muted-foreground mb-8 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {product.description}
                    </motion.p>
                  )}

                  {/* Specifications */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Settings className="w-4 h-4 text-primary" />
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                          Specifications
                        </h4>
                      </div>
                      <div className="space-y-3 bg-secondary/30 p-4 rounded-lg">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{key}</span>
                            <span className="text-foreground font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-primary" />
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                          Key Features
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {product.features.slice(0, 5).map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="text-sm text-foreground flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Maximize className="w-4 h-4 text-primary" />
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                          Available Sizes
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, i) => (
                          <span key={i} className="px-4 py-2 bg-secondary text-sm text-foreground rounded-full border border-border">
                            {size}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <motion.div 
                  className="pt-8 mt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={`/machinery/${categorySlug}/${product.id}`}
                      className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors group w-full justify-center rounded-full"
                      onClick={onClose}
                    >
                      <span className="font-medium">View Full Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MachinePreviewModal;
