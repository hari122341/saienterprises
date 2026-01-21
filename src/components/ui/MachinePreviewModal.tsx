import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-foreground/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-background overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation arrows */}
            {hasPrev && onPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && onNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-secondary">
                <img 
                  src={product.image || getCategoryImage(product.category)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.15em] font-medium">
                    {product.category.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                <div className="flex-1">
                  <motion.h2 
                    className="font-serif text-2xl sm:text-3xl text-foreground mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {product.name}
                  </motion.h2>
                  
                  {product.description && (
                    <motion.p 
                      className="text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {product.description}
                    </motion.p>
                  )}

                  {/* Specifications */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        Specifications
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm border-b border-border pb-2">
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
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <h4 className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        Available Sizes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full">
                            {size}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <motion.div 
                  className="pt-6 mt-6 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    to={`/machinery/${categorySlug}/${product.id}`}
                    className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors group w-full justify-center"
                    onClick={onClose}
                  >
                    <span className="font-medium">View Full Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
