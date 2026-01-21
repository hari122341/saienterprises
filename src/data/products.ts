export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications?: Record<string, string>;
  features?: string[];
  applications?: string[];
  sizes?: string[];
  image?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'pre-press',
    name: 'Pre-Press',
    slug: 'pre-press',
    description: 'Plate Exposure, Plate Processor, Plate Baking Oven, CTCP & CTP, Large Format Film Separation',
    icon: 'Layers',
    products: [
      {
        id: 'screen-plate-exposure',
        name: 'Screen/Plate Exposure Machine',
        category: 'pre-press',
        description: 'Professional plate exposure systems for accurate image transfer.',
        features: ['Precise UV exposure', 'Consistent results', 'Timer controlled'],
      },
      {
        id: 'ctcp-fully-automatic',
        name: 'Fully Automatic CTCP',
        category: 'pre-press',
        description: 'Computer to Conventional Plate systems for modern pre-press workflows.',
        specifications: {
          'Max Plate Size': '1163 × 940 mm',
          'Min Plate Size': '300 × 300 mm',
        },
      },
      {
        id: 'ctp-system',
        name: 'CTP System',
        category: 'pre-press',
        description: 'Computer to Plate technology for direct digital plate imaging.',
      },
      {
        id: 'plate-processor',
        name: 'Plate Processor',
        category: 'pre-press',
        description: 'Automatic plate processing for consistent development quality.',
      },
    ],
  },
  {
    id: 'press',
    name: 'Press',
    slug: 'press',
    description: 'Baby Offset Machines, Sheet-fed Offset, Digital Printing Presses, Commercial Web Offset, News Paper Web Presses, Business Forms Web Presses',
    icon: 'Printer',
    products: [
      {
        id: 'heidelberg-offset',
        name: 'Heidelberg Offset Presses',
        category: 'press',
        description: 'Premium German engineering for exceptional print quality.',
        features: ['World-class precision', 'Superior color consistency', 'High productivity'],
      },
      {
        id: 'komori-lithrone',
        name: 'Komori Lithrone Series',
        category: 'press',
        description: 'Japanese precision sheet-fed offset technology.',
        features: ['Advanced automation', 'Quick makeready', 'Exceptional register accuracy'],
      },
      {
        id: 'manroland-offset',
        name: 'Manroland Offset Presses',
        category: 'press',
        description: 'German engineering for web and sheet-fed printing excellence.',
      },
      {
        id: 'mitsubishi-presses',
        name: 'Mitsubishi Printing Presses',
        category: 'press',
        description: 'Precision printing systems from Japan.',
      },
      {
        id: 'baby-offset-16x22',
        name: 'Baby Offset Machine 16"×22"',
        category: 'press',
        description: 'Compact offset printing for small format commercial work.',
      },
    ],
  },
  {
    id: 'post-press',
    name: 'Post-Press',
    slug: 'post-press',
    description: 'Programmable Paper Cutting, Hard Cover Making, Perfect Binding, Die Cutting & Creasing, Lamination, UV Coating, Folding, Stitching & Sewing',
    icon: 'Scissors',
    products: [
      {
        id: 'hpm-paper-cutter',
        name: 'HPM Programmable Paper Cutter',
        category: 'post-press',
        description: 'Heavy duty digital programmable paper cutting system with high automation.',
        sizes: ['660mm / 26"'],
        features: ['High automation level', 'Digital programming', 'Heavy duty construction'],
      },
      {
        id: 'three-knife-trimmer',
        name: 'Three Knife Trimmer',
        category: 'post-press',
        description: 'Available in automatic and semi-automatic variants for precision trimming.',
        features: ['Automatic feeding option', 'Precision cutting', 'High throughput'],
      },
      {
        id: 'pile-turner',
        name: 'Pile Turner',
        category: 'post-press',
        description: 'Efficient paper pile handling and turning for production workflows.',
      },
      {
        id: 'perfect-binder',
        name: 'Perfect Binder',
        category: 'post-press',
        description: 'High-quality perfect binding for books and publications.',
        specifications: {
          'Speed': '700 Books/Hour',
          'Thickness': 'Up to 70mm',
        },
        sizes: ['17 inch', '21 inch', '24 inch'],
        features: ['Separate side glue unit', 'High binding quality'],
      },
      {
        id: 'thermal-laminator',
        name: 'Thermal & Water Base Laminator with Sheeter',
        category: 'post-press',
        description: 'Designed for heat lamination with pregummed film.',
        sizes: ['24 inch', '32 inch'],
      },
      {
        id: 'uv-aqua-coater',
        name: 'UV / Aqua Coater with Drier',
        category: 'post-press',
        description: 'Professional coating solutions for enhanced print finishing.',
      },
      {
        id: 'die-punching',
        name: 'Die Punching Machine',
        category: 'post-press',
        description: 'With wrap around safety device, fully covered fly wheel, electromagnetic clutch & brake.',
        sizes: ['22" × 32"', '25" × 37"', '28" × 40"', '58" × 96"'],
        features: ['Available with Hot Foil Stamping'],
      },
      {
        id: 'hot-foil-stamping',
        name: 'Hot Foil Stamping Machine',
        category: 'post-press',
        description: 'Professional foil stamping for premium finishing.',
        specifications: {
          'Stamping Plate Size': '300 × 350 mm',
          'Table Size': '400 × 450 mm',
          'Job Height': '100 mm Max',
          'Foil Width': '10-300 mm',
        },
      },
      {
        id: 'paper-folding',
        name: 'Paper Folding Machine',
        category: 'post-press',
        description: 'Precision paper folding for commercial printing.',
        specifications: {
          'Max Sheet Size': '660 × 1040 mm',
          'Min Sheet Size': '150 × 200 mm',
          'Paper GSM': '40-200',
        },
      },
      {
        id: 'rigid-box-machines',
        name: 'Rigid Box Machines',
        category: 'post-press',
        description: 'Complete rigid box making solutions including corner pasting, box forming, and gluing.',
        features: ['Corner Pasting Machine', 'Box Forming Machine', 'Automatic Gluing Machine'],
      },
      {
        id: 'case-maker',
        name: 'Semi Automatic Case Maker',
        category: 'post-press',
        description: 'For finishing of books, diaries, notebooks and commercial brochures.',
      },
      {
        id: 'wire-o-binding',
        name: 'Automatic Wire O Binding Machine',
        category: 'post-press',
        description: 'Professional wire binding for calendars, notebooks and presentations.',
      },
      {
        id: 'spiral-binding',
        name: 'Automatic Spiral Binding Machine',
        category: 'post-press',
        description: 'Spiral binding solutions for various applications.',
      },
      {
        id: 'passport-sewing',
        name: 'Passport & Book Center Sewing Machine',
        category: 'post-press',
        description: 'Heavy duty sewing for passports and center-sewn books.',
        specifications: {
          'Max Book Size': '560mm × 460mm',
          'Min Book Size': '100mm × 240mm',
          'Book Thickness': '1mm - 6mm',
        },
      },
      {
        id: 'reel-sheeting',
        name: 'Reel to Sheeting Machine',
        category: 'post-press',
        description: 'Convert reel paper to sheet format. Cost effective, reduces waste.',
        sizes: ['36 inch', '48 inch'],
      },
      {
        id: 'slitting-rewinding',
        name: 'Slitting & Rewinding Machine',
        category: 'post-press',
        description: 'Converts jumbo reels into small width reels. Reduces paper cost.',
        sizes: ['24 inch', '42 inch', '62 inch', '80 inch'],
      },
    ],
  },
  {
    id: 'corrugation',
    name: 'Corrugation',
    slug: 'corrugation',
    description: 'Complete corrugation solutions including Flute Laminators, Corrugation Machines, Slitter Scorers, Rotary Die Cutters, and Box Making Equipment',
    icon: 'Box',
    products: [
      {
        id: 'fully-auto-flute-laminator',
        name: 'Fully Automatic Flute Laminator',
        category: 'corrugation',
        description: 'High-speed automatic flute lamination for corrugated board production.',
        specifications: {
          'Size': '1400 × 1100 mm',
        },
      },
      {
        id: 'semi-auto-flute-laminator',
        name: 'Semi Auto Flute Laminator',
        category: 'corrugation',
        description: 'Semi-automatic flute lamination with auto lift feature.',
        specifications: {
          'Size': '1300 × 1100 mm',
        },
      },
      {
        id: 'paper-corrugation',
        name: 'Double Profile Paper Corrugation Machine',
        category: 'corrugation',
        description: 'Available in single profile also. Complete corrugation solutions.',
        sizes: ['42"', '52"', '62"', '72"'],
      },
      {
        id: 'thin-blade-slitter',
        name: 'Thin Blade Slitter Scorer',
        category: 'corrugation',
        description: 'Precision slitting and scoring for corrugated board.',
        sizes: ['2200 mm', '2400 mm'],
      },
      {
        id: 'rotary-cutting-creasing',
        name: 'Four Bar Rotary Cutting & Creasing Machine',
        category: 'corrugation',
        description: 'Rotary die cutting and creasing for corrugated boxes.',
        sizes: ['75"', '85"', '95"', '105"'],
      },
      {
        id: 'eccentric-slotter',
        name: 'Eccentric Slotter',
        category: 'corrugation',
        description: 'Heavy duty slotting for corrugated box production.',
        sizes: ['75"', '85"', '95"', '105"'],
      },
      {
        id: 'box-stitching',
        name: 'Heavy Duty Power Box Stitching Machine',
        category: 'corrugation',
        description: 'Angular box stitching for corrugated boxes.',
        sizes: ['36"', '42"', '48"', '52"', '60"'],
      },
      {
        id: 'sheet-pasting',
        name: 'Sheet Pasting Machine',
        category: 'corrugation',
        description: 'Corrugated sheet pasting for box making.',
        sizes: ['55"', '65"', '75"', '85"', '95"', '105"'],
      },
      {
        id: 'heavy-duty-board-cutter',
        name: 'Heavy Duty Board Cutter',
        category: 'corrugation',
        description: 'Robust board cutting for corrugated materials.',
        sizes: ['52"', '62"', '72"'],
      },
    ],
  },
];

export const partnerBrands = [
  { name: 'Heidelberg', country: 'Germany', specialty: 'Premium Offset Presses' },
  { name: 'Komori', country: 'Japan', specialty: 'Sheet-fed Offset Technology' },
  { name: 'Manroland', country: 'Germany', specialty: 'Web & Sheet-fed Presses' },
  { name: 'Mitsubishi', country: 'Japan', specialty: 'Precision Printing Systems' },
  { name: 'Müller Martini', country: 'Switzerland', specialty: 'Post-Press & Binding' },
  { name: 'MBO', country: 'Germany', specialty: 'Folding Technology' },
  { name: 'HPM', country: 'Taiwan', specialty: 'Paper Cutting Systems' },
  { name: 'Kanefusa', country: 'Japan', specialty: 'Industrial Cutting Knives' },
];

export const companyInfo = {
  name: 'Sai Enterprises',
  tagline: 'Graphic Machinery Suppliers',
  motto: 'We Believe in Long-Term Relationships',
  experience: '24+ Years',
  phones: ['+91 931 217 5513', '+91 939 767 8950'],
  emails: ['msrao@saienterprises.info', 'venkat@saienterprises.info'],
  facebook: 'www.facebook.com/saienterprises2003',
  locations: {
    headquarters: {
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
      type: 'Head Office',
    },
    branches: [
      { city: 'New Delhi', country: 'India' },
      { city: 'Pune', country: 'India' },
      { city: 'Vijayawada', state: 'Andhra Pradesh', country: 'India' },
    ],
    overseas: {
      city: 'Nairobi',
      country: 'Kenya',
      type: 'Overseas Branch',
    },
  },
  services: [
    'Consultancy for Printing Machines',
    'Installation & Commissioning',
    'Service & Support',
    'Pre-owned Machinery',
    'New Equipment Supply',
    'Complete Print Solutions',
  ],
};

export const consumables = [
  { name: 'Rigid Box Materials', category: 'Packaging' },
  { name: 'Thermal Tape', category: 'Binding' },
  { name: 'Jelly Glue', category: 'Adhesives' },
  { name: 'Kanefusa Knives (Japanese)', category: 'Cutting', description: 'All Paper Cutter and Three Knife Trimmer Knives' },
];
