// Seravo Life Sciences — Product Detail Data
// Full product specifications for individual product pages

import orthoPlusBottle from '@/assets/images/ortho-plus-bottle.png';
import jointHealthImage from '@/assets/images/joint-health.png';
import proteinScoopImage from '@/assets/images/protein-scoop.png';
import weightPlusBottle from '@/assets/images/weight-plus-bottle.png';
import heyMomBottle from '@/assets/images/hey-mom-bottle.png';

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
};
