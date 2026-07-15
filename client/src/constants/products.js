// Seravo Life Sciences — Product Detail Data
// Full product specifications for individual product pages

import orthoPlusBottle from '@/assets/images/ortho-plus-bottle.webp';
import jointHealthImage from '@/assets/images/joint-health.webp';
import proteinScoopImage from '@/assets/images/protein-scoop.webp';
import weightPlusBottle from '@/assets/images/weight-plus-bottle.webp';
import heyMomBottle from '@/assets/images/hey-mom-bottle.webp';

// New Product Images
import heyMomTabletsImg from '@/assets/images/hey-mom-tablets.webp';
import slimProImg from '@/assets/images/slim-pro.webp';
import icuPlusImg from '@/assets/images/icu-plus.webp';
import glutathioneImg from '@/assets/images/glutathione-glow.webp';
import orthoPlusTabletsImg from '@/assets/images/ortho-plus-tablets.webp';

import {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineBeaker,
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineFire,
  HiOutlineStar,
} from 'react-icons/hi';

export const PRODUCT_DETAILS = {
  'seravo-ortho-plus': {
    name: 'Seravo Ortho Plus',
    tagline: 'Advanced Bone & Muscle Recovery Nutrition',
    description:
      'A complete nutritional support system engineered for stronger bones, better recovery, and an active life.',
    category: 'Orthopedic Care',
    flavor: 'Vanilla',
    netWeight: '400g',
    servingSize: '1 Scoop (30g)',
    badge: 'Flagship Product',
    heroImage: orthoPlusBottle,
    carouselImages: [
      { id: 0, src: orthoPlusBottle, alt: 'Seravo Ortho Plus Bottle' },
      { id: 1, src: proteinScoopImage, alt: 'Premium Protein Ingredients' },
      { id: 2, src: jointHealthImage, alt: 'Advanced Joint Support' },
    ],
    composition: [
      {
        emoji: '💪',
        title: 'Whey Protein + Collagen',
        desc: 'High-quality protein blend dedicated to repairing tissue and building lean muscle mass efficiently.',
      },
      {
        emoji: '🦴',
        title: 'Calcium + Vitamin D3',
        desc: 'The foundational building blocks for strengthening bones and optimizing bone mineral density.',
      },
      {
        emoji: '🛡️',
        title: 'MSM + Vitamin K2 & K3',
        desc: 'Advanced joint support matrix to improve flexibility, reduce inflammation, and ensure calcium reaches the bones.',
      },
    ],
    benefits: [
      {
        title: 'Supports Bone Healing & Density',
        desc: 'Strengthens bones and improves bone mineral density naturally.',
        icon: HiOutlineShieldCheck,
      },
      {
        title: 'Enhances Muscle Recovery',
        desc: 'High quality protein helps repair and build lean muscles faster.',
        icon: HiOutlineLightningBolt,
      },
      {
        title: 'Post-Surgery Strength',
        desc: 'Clinically designed nutrition to support faster recovery and mobility.',
        icon: HiOutlineCalendar,
      },
      {
        title: 'Supports Joint Health',
        desc: 'Collagen, MSM & Vitamins support cartilage and joint flexibility.',
        icon: HiOutlineBeaker,
      },
    ],
    features: [
      'Fast Absorption',
      'Clinically Designed Formula',
      'Easy to Consume',
      'Ideal for Orthopedic Patients',
    ],
    whyTitle: 'Ortho Plus',
    whyDescription:
      "Trusted by orthopedic surgeons and general physicians across the country, our formulation doesn't just treat symptoms—it provides the fundamental nutrition your body needs to heal itself.",
    gradientFrom: 'from-primary',
    gradientTo: 'to-medical',
  },

  'seravo-weight-plus': {
    name: 'Seravo Weight Plus',
    tagline: 'High Calorie & Protein Formula for Healthy Weight Gain',
    description:
      'Scientifically formulated with Muscle Building Complex, Digestive Enzyme Blend, and Carbohydrate Complex to promote healthy weight gain and lean muscle mass.',
    category: 'Nutraceuticals',
    flavor: 'Caramel Chocolate',
    netWeight: '900g',
    servingSize: '1 Scoop (35g)',
    badge: 'New Launch',
    heroImage: weightPlusBottle,
    carouselImages: [
      { id: 0, src: weightPlusBottle, alt: 'Seravo Weight Plus Bottle' },
    ],
    composition: [
      {
        emoji: '💪',
        title: 'Muscle Building Complex',
        desc: 'Premium protein blend with essential amino acids to stimulate muscle protein synthesis and promote lean mass growth.',
      },
      {
        emoji: '⚡',
        title: 'Carbohydrate Complex',
        desc: 'Multi-source carbohydrate blend providing sustained energy release for optimal caloric surplus and weight gain.',
      },
      {
        emoji: '🧬',
        title: 'Digestive Enzyme Blend',
        desc: 'Advanced enzyme matrix ensuring maximum nutrient absorption and comfortable digestion of high-calorie intake.',
      },
    ],
    benefits: [
      {
        title: 'Promotes Healthy Weight Gain',
        desc: 'Calorie-dense formula designed for consistent, healthy weight gain without excess fat.',
        icon: HiOutlineFire,
      },
      {
        title: 'Builds Lean Muscle Mass',
        desc: 'Premium protein supports muscle protein synthesis for quality muscle development.',
        icon: HiOutlineLightningBolt,
      },
      {
        title: 'Optimizes Energy Metabolism',
        desc: 'Complex carbohydrates provide sustained energy for workouts and daily activities.',
        icon: HiOutlineSparkles,
      },
      {
        title: 'Supports Recovery',
        desc: 'Post-workout recovery support with essential nutrients and amino acids.',
        icon: HiOutlineShieldCheck,
      },
    ],
    features: [
      'High Calorie & Protein Formula',
      'Digestive Enzyme Blend',
      'Caramel Chocolate Flavor',
      'Sugar Free • FSSAI Certified',
    ],
    whyTitle: 'Weight Plus',
    whyDescription:
      'Designed for individuals looking to gain healthy weight and build lean muscle mass. Our scientifically balanced formula provides the perfect caloric surplus with premium ingredients for optimal results.',
    gradientFrom: 'from-[#8B6914]',
    gradientTo: 'to-[#C4963C]',
  },

  'seravo-hey-mom': {
    name: 'Seravo Hey Mom',
    tagline: 'Pregnancy Nutraceutical for Mother & Baby',
    description:
      'Scientifically driven pregnancy nutrition with High Quality Protein, Folic Acid (DHA), Iron, Calcium & Multi-Vitamins. No Added Sugar, Caffeine Free.',
    category: 'Clinical Nutrition',
    flavor: 'Vanilla',
    netWeight: '400g',
    servingSize: '1 Scoop (25g)',
    badge: 'New Launch',
    heroImage: heyMomBottle,
    carouselImages: [
      { id: 0, src: heyMomBottle, alt: 'Seravo Hey Mom Bottle' },
    ],
    composition: [
      {
        emoji: '🤰',
        title: 'Protein + Folic Acid (DHA)',
        desc: 'High quality protein combined with DHA for critical neural tube development and healthy brain growth in the fetus.',
      },
      {
        emoji: '🦴',
        title: 'Iron + Calcium + Multi-Vitamins',
        desc: 'Essential minerals and vitamins to prevent anemia, support bone development, and maintain maternal health throughout pregnancy.',
      },
      {
        emoji: '🛡️',
        title: 'Immunity & Wellness Complex',
        desc: 'A carefully balanced blend of micronutrients to boost maternal immunity and reduce pregnancy-related discomfort.',
      },
    ],
    benefits: [
      {
        title: 'Promotes Fetal Development',
        desc: 'DHA, Folic Acid, and essential nutrients support healthy brain and organ development.',
        icon: HiOutlineHeart,
      },
      {
        title: 'Supports Maternal Wellness & Immunity',
        desc: 'Multi-vitamin complex keeps mothers strong, energized, and resilient.',
        icon: HiOutlineShieldCheck,
      },
      {
        title: 'Reduced Morning Sickness Support',
        desc: 'Gentle, easy-to-digest formula designed to minimize nausea and discomfort.',
        icon: HiOutlineStar,
      },
      {
        title: 'Scientifically Driven',
        desc: 'Every ingredient backed by clinical research for pregnancy nutrition.',
        icon: HiOutlineBeaker,
      },
    ],
    features: [
      'High Quality Protein + DHA',
      'Iron + Calcium + Multi-Vitamins',
      'No Added Sugar • Caffeine Free',
      'FSSAI Certified • Vanilla Flavor',
    ],
    whyTitle: 'Hey Mom',
    whyDescription:
      'A comprehensive pregnancy nutraceutical trusted by gynecologists and obstetricians. Every ingredient is scientifically selected to support both maternal wellness and healthy fetal development.',
    gradientFrom: 'from-[#D4A0A0]',
    gradientTo: 'to-[#E8B4B4]',
  },

  'seravo-hey-mom-tablets': {
    name: 'Seravo Hey Mom Tablets',
    tagline: 'Iron Supplement For Mothers',
    description: 'Essential Iron, Vitamins & Minerals for advanced maternal care.',
    category: 'Maternal Health',
    flavor: 'Unflavored',
    netWeight: '30 Tablets',
    servingSize: '1 Tablet',
    badge: 'New',
    heroImage: heyMomTabletsImg,
    carouselImages: [{ id: 0, src: heyMomTabletsImg, alt: 'Hey Mom Tablets' }],
    composition: [
      { emoji: '🩸', title: 'Iron', desc: 'Crucial for blood formation.' },
      { emoji: '💊', title: 'Folic Acid', desc: 'Prevents neural tube defects.' }
    ],
    benefits: [],
    features: ['High Iron Absorption', 'Maternal Health Support'],
    whyTitle: 'Hey Mom Tablets',
    whyDescription: 'Advanced Iron Supplement for mothers.',
    gradientFrom: 'from-[#D4A0A0]',
    gradientTo: 'to-[#E8B4B4]',
  },

  'seravo-slim-pro': {
    name: 'Seravo Slim Pro',
    tagline: 'Advanced Weight Management Formula',
    description: 'Advanced Protein & Fiber Blend with Green Tea & Garcinia Extracts for weight loss.',
    category: 'Nutraceuticals',
    flavor: 'Chocolate Mocha',
    netWeight: '400g',
    servingSize: '1 Scoop',
    badge: 'Trending',
    heroImage: slimProImg,
    carouselImages: [{ id: 0, src: slimProImg, alt: 'Slim Pro' }],
    composition: [
      { emoji: '🌿', title: 'Green Tea & Garcinia', desc: 'Boosts metabolism and energy.' },
      { emoji: '💪', title: 'High Satiety Formula', desc: 'Helps control cravings.' }
    ],
    benefits: [],
    features: ['Promotes Healthy Weight Loss', 'Boosts Metabolism', 'Supports Lean Muscle Retention'],
    whyTitle: 'Slim Pro',
    whyDescription: 'Your partner for effective and healthy weight management.',
    gradientFrom: 'from-[#006064]',
    gradientTo: 'to-[#0097A7]',
  },

  'seravo-icu-plus': {
    name: 'Seravo ICU Plus',
    tagline: 'Advanced ICU Recovery Formula',
    description: 'Whey Protein Isolate & Casein Complex for critical care recovery.',
    category: 'Clinical Nutrition',
    flavor: 'Vanilla Recovery',
    netWeight: '400g',
    servingSize: '1 Scoop',
    badge: 'Clinical',
    heroImage: icuPlusImg,
    carouselImages: [{ id: 0, src: icuPlusImg, alt: 'ICU Plus' }],
    composition: [
      { emoji: '🧬', title: 'Whey Isolate & Casein', desc: 'Aids muscle retention & immune support.' },
      { emoji: '⚡', title: 'Folic Acid + B12', desc: 'Boosts cellular regeneration & energy.' }
    ],
    benefits: [],
    features: ['Scientifically Formulated for ICU Recovery', 'Gentle on Digestion & Nutrient Absorption'],
    whyTitle: 'ICU Plus',
    whyDescription: 'Dedicated clinical nutrition for patients recovering in intensive care.',
    gradientFrom: 'from-[#1A237E]',
    gradientTo: 'to-[#3949AB]',
  },

  'seravo-glutathione-glow': {
    name: 'Seravo Glutathione Glow Plus',
    tagline: 'Advanced Formula for Luminous Skin',
    description: 'Antioxidant Support for luminous skin.',
    category: 'Dermatology',
    flavor: 'Unflavored',
    netWeight: '200g',
    servingSize: '1 Scoop',
    badge: 'Beauty',
    heroImage: glutathioneImg,
    carouselImages: [{ id: 0, src: glutathioneImg, alt: 'Glutathione Glow Plus' }],
    composition: [
      { emoji: '✨', title: 'Glutathione', desc: 'Master antioxidant for skin brightness.' }
    ],
    benefits: [],
    features: ['Luminous Skin', 'Antioxidant Support'],
    whyTitle: 'Glutathione Glow',
    whyDescription: 'Unlock your natural radiance from within.',
    gradientFrom: 'from-[#F8BBD0]',
    gradientTo: 'to-[#F48FB1]',
  },

  'seravo-ortho-plus-tablets': {
    name: 'Seravo Ortho Plus Tablets',
    tagline: 'Calcium Citrate, Vitamin D3 & Minerals',
    description: 'Calcium + D3 for Joint Support.',
    category: 'Orthopedic Care',
    flavor: 'Unflavored',
    netWeight: '10 x 15 Tablets',
    servingSize: '1 Tablet',
    badge: 'Essential',
    heroImage: orthoPlusTabletsImg,
    carouselImages: [{ id: 0, src: orthoPlusTabletsImg, alt: 'Ortho Plus Tablets' }],
    composition: [
      { emoji: '🦴', title: 'Calcium Citrate', desc: 'High absorption calcium.' },
      { emoji: '☀️', title: 'Vitamin D3', desc: 'Aids in calcium absorption.' }
    ],
    benefits: [],
    features: ['Joint Support', 'Bone Density'],
    whyTitle: 'Ortho Plus Tablets',
    whyDescription: 'The perfect combination of Calcium and Vitamin D3.',
    gradientFrom: 'from-[#E65100]',
    gradientTo: 'to-[#EF6C00]',
  }
};
