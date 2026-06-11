import dynamic from 'next/dynamic';

export const templates = {
  givingli: dynamic(() => import('@/components/templates/GivingliTemplate')),
  apple: dynamic(() => import('@/components/templates/AppleTemplate')),
  technexus: dynamic(() => import('@/components/templates/TechnexusTemplate')),
};