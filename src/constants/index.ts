import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Cortos AI',
    description:
      'Cortos AI helps you create short videos from scripts or ideas with AI-generated visuals, narration, and subtitles—perfect for TikTok, Reels, and Shorts.',
    website: 'https://cortosai.com',
    mainImage: { asset: { url: '/images/cortos-hero.jpg' } },
    technologies: ['Next.js', 'Stripe', 'Coolify', 'TypeScript', 'Go'],
  },
  {
    title: 'Swagify',
    description:
      'Transform your brand merchandise with AI-powered photoshoots. Upload your logo and get stunning product images in seconds.',
    website: 'https://swagify.pro',
    mainImage: { asset: { url: '/images/swagify.jpg' } },
    technologies: ['Next.js', 'Stripe', 'Coolify', 'TypeScript'],
  },
];
