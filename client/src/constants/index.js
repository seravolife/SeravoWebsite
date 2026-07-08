// Seravo Life Sciences — Constants
// Company data, navigation, product categories, and static content

export const COMPANY = {
  name: 'Seravo Life Sciences Pvt. Ltd.',
  shortName: 'Seravo',
  tagline: 'Where Science Meets Integrity.',
  description:
    'Leading manufacturer of research-driven nutraceuticals, clinical nutrition, and pharmaceutical products. Committed to advancing healthcare through scientific innovation and uncompromising quality.',
  email: 'seravolifesciences@gmail.com',
  phone: '+91 93599 61811',
  address: {
    line1: 'Seravo Life Sciences Pvt. Ltd.',
    line2: 'Plot No. 42, Pharma City',
    city: 'Pune',
    state: 'Maharashtra',
    zip: '411001',
    country: 'India',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/seravo-life-sciences/',
    twitter: 'https://twitter.com/seravolife',
    facebook: 'https://facebook.com/seravolifesciences',
    instagram: 'https://www.instagram.com/seravo_lifesciences_pvt_ltd?utm_source=qr&igsh=MWwydXRkNngzZGw1Ng==',
    youtube: 'https://youtube.com/@seravolifesciences',
  },
  businessHours: {
    weekdays: '9:00 AM – 6:00 PM',
    saturday: '9:00 AM – 2:00 PM',
    sunday: 'Closed',
  },
  founded: '2018',
  certifications: ['WHO-GMP', 'ISO 9001:2015', 'FSSAI', 'GLP', 'NABL'],
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Research', path: '/research' },
  { name: 'Healthcare', path: '/healthcare-professionals' },

  { name: 'Contact', path: '/contact' },
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    description: 'Science-backed supplements for optimal health and wellness.',
    icon: '💊',
  },
  {
    id: 'clinical-nutrition',
    name: 'Clinical Nutrition',
    description: 'Specialized nutritional support for clinical care.',
    icon: '🏥',
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Care',
    description: 'Advanced formulations for bone and joint health.',
    icon: '🦴',
  },
  {
    id: 'gastro',
    name: 'Gastro Care',
    description: 'Targeted solutions for digestive health.',
    icon: '🫁',
  },
  {
    id: 'cardiac',
    name: 'Cardiac Care',
    description: 'Heart health supplements backed by clinical research.',
    icon: '❤️',
  },
  {
    id: 'general-wellness',
    name: 'General Wellness',
    description: 'Daily essentials for a healthier, active lifestyle.',
    icon: '🌿',
  },
];

export const CORE_VALUES = [
  {
    title: 'Scientific Excellence',
    description: 'Every product is rooted in rigorous scientific research and clinical evidence.',
    icon: 'microscope',
  },
  {
    title: 'Uncompromising Quality',
    description: 'WHO-GMP certified manufacturing with multi-stage quality controls.',
    icon: 'shield',
  },
  {
    title: 'Patient-Centric',
    description: 'Formulations designed with patient outcomes as the primary objective.',
    icon: 'heart',
  },
  {
    title: 'Innovation',
    description: 'Continuously advancing formulations with the latest pharmaceutical research.',
    icon: 'lightbulb',
  },
  {
    title: 'Integrity',
    description: 'Transparent practices and ethical standards in everything we do.',
    icon: 'award',
  },
  {
    title: 'Accessibility',
    description: 'Making premium healthcare products accessible to all who need them.',
    icon: 'globe',
  },
];

export const STATS = [
  { value: '500+', label: 'Products' },
  { value: '10,000+', label: 'Healthcare Partners' },
  { value: '25+', label: 'States Covered' },
  { value: '50M+', label: 'Lives Impacted' },
];

export const WHY_CHOOSE = [
  {
    title: 'WHO-GMP Certified',
    description: 'Manufacturing facilities adhering to the highest global standards.',
  },
  {
    title: 'Research-Driven',
    description: 'Every formulation backed by peer-reviewed clinical research.',
  },
  {
    title: 'Doctor Recommended',
    description: 'Trusted by over 10,000 healthcare professionals across India.',
  },
  {
    title: 'Premium Ingredients',
    description: 'Sourcing the finest raw materials with complete traceability.',
  },
  {
    title: 'Pan-India Reach',
    description: 'Strong distribution network covering 25+ states and growing.',
  },
  {
    title: 'Dedicated Support',
    description: 'Expert medical representatives and responsive customer service.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    title: 'Orthopedic Surgeon',
    location: 'Delhi',
    quote:
      'Seravo\'s orthopedic range has shown remarkable results in my patients. The calcium and vitamin D formulation is one of the best I\'ve prescribed.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    title: 'General Physician',
    location: 'Mumbai',
    quote:
      'I trust Seravo for their consistent quality and scientific approach. Their multivitamin range is my go-to recommendation for patients.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Healthcare',
    title: 'Distributor',
    location: 'Bangalore',
    quote:
      'Partnering with Seravo has been a game-changer for our business. Excellent product quality and outstanding company support.',
    rating: 5,
  },
];

import orthoPlusBottle from '@/assets/images/ortho-plus-bottle.png';
import weightPlusBottle from '@/assets/images/weight-plus-bottle.png';
import heyMomBottle from '@/assets/images/hey-mom-bottle.png';

// New Product Images
import heyMomTabletsImg from '@/assets/images/hey-mom-tablets.jpg';
import slimProImg from '@/assets/images/slim-pro.jpg';
import icuPlusImg from '@/assets/images/icu-plus.jpg';
import glutathioneImg from '@/assets/images/glutathione-glow.jpg';
import orthoPlusTabletsImg from '@/assets/images/ortho-plus-tablets.jpg';

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Seravo Ortho Plus',
    slug: 'seravo-ortho-plus',
    category: 'Orthopedic Care',
    shortDescription: 'Advanced Bone & Muscle Recovery Nutrition with Whey Protein, Collagen & Calcium.',
    benefits: ['Supports Bone Healing', 'Enhances Muscle Recovery', 'Supports Joint Health'],
    flavor: 'Vanilla',
    netWeight: '400g',
    image: orthoPlusBottle,
    featured: true,
  },
  {
    id: 2,
    name: 'Seravo Weight Plus',
    slug: 'seravo-weight-plus',
    category: 'Nutraceuticals',
    shortDescription: 'High Calorie & Protein Formula with Muscle Building Complex, Digestive Enzymes & Carbohydrate Complex.',
    benefits: [
      'Promotes Healthy Weight Gain',
      'Builds Lean Muscle Mass',
      'Optimizes Energy Metabolism',
      'Supports Recovery',
    ],
    flavor: 'Caramel Chocolate',
    netWeight: '900g',
    image: weightPlusBottle,
    featured: true,
  },
  {
    id: 3,
    name: 'Seravo Hey Mom',
    slug: 'seravo-hey-mom',
    category: 'Clinical Nutrition',
    shortDescription: 'Pregnancy Nutraceutical with High Quality Protein, Folic Acid (DHA), Iron, Calcium & Multi-Vitamins.',
    benefits: [
      'Promotes Fetal Development',
      'Supports Maternal Wellness & Immunity',
      'Reduced Morning Sickness Support',
      'Scientifically Driven',
    ],
    flavor: 'Vanilla',
    netWeight: '400g',
    image: heyMomBottle,
    featured: true,
  },
  {
    id: 4,
    name: 'Seravo Hey Mom Tablets',
    slug: 'seravo-hey-mom-tablets',
    category: 'Maternal Health',
    shortDescription: 'Essential Iron, Vitamins & Minerals for advanced maternal care.',
    benefits: ['High Iron Absorption', 'Maternal Health Support'],
    flavor: 'Unflavored',
    netWeight: '30 Tablets',
    image: heyMomTabletsImg,
    featured: true,
  },
  {
    id: 5,
    name: 'Seravo Slim Pro',
    slug: 'seravo-slim-pro',
    category: 'Nutraceuticals',
    shortDescription: 'Advanced Protein & Fiber Blend with Green Tea & Garcinia Extracts for weight loss.',
    benefits: ['Promotes Healthy Weight Loss', 'Boosts Metabolism', 'Supports Lean Muscle Retention'],
    flavor: 'Chocolate Mocha',
    netWeight: '400g',
    image: slimProImg,
    featured: true,
  },
  {
    id: 6,
    name: 'Seravo ICU Plus',
    slug: 'seravo-icu-plus',
    category: 'Clinical Nutrition',
    shortDescription: 'Whey Protein Isolate & Casein Complex for critical care recovery.',
    benefits: ['Scientifically Formulated for ICU Recovery', 'Gentle on Digestion & Nutrient Absorption'],
    flavor: 'Vanilla Recovery',
    netWeight: '400g',
    image: icuPlusImg,
    featured: true,
  },
  {
    id: 7,
    name: 'Seravo Glutathione Glow Plus',
    slug: 'seravo-glutathione-glow',
    category: 'Dermatology',
    shortDescription: 'Antioxidant Support for luminous skin.',
    benefits: ['Luminous Skin', 'Antioxidant Support'],
    flavor: 'Unflavored',
    netWeight: '200g',
    image: glutathioneImg,
    featured: true,
  },
  {
    id: 8,
    name: 'Seravo Ortho Plus Tablets',
    slug: 'seravo-ortho-plus-tablets',
    category: 'Orthopedic Care',
    shortDescription: 'Calcium + D3 for Joint Support.',
    benefits: ['Joint Support', 'Bone Density'],
    flavor: 'Unflavored',
    netWeight: '10 x 15 Tablets',
    image: orthoPlusTabletsImg,
    featured: true,
  }
];

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
