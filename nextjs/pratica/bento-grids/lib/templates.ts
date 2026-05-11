import dynamic from 'next/dynamic';

export const templates = {
  givingli: dynamic(() => import('@/components/templates/GivingliTemplate')),
};