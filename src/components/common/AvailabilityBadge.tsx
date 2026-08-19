import React from 'react';
import { ProductAvailability } from '../../types';
import { ShoppingBag, Bell, AlertTriangle, Check } from 'lucide-react';

interface AvailabilityBadgeProps {
  availability: ProductAvailability;
  size?: 'sm' | 'md';
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ availability, size = 'md' }) => {
  const configs = {
    NOT_AVAILABLE: {
      label: "We're building it",
      icon: Bell,
      bg: 'bg-white text-black border-black',
    },
    PREORDER: {
      label: 'Pre-Order Open',
      icon: ShoppingBag,
      bg: 'bg-[#FFDA00] text-black border-black',
    },
    AVAILABLE: {
      label: 'Available Now',
      icon: Check,
      bg: 'bg-[#00A896] text-black border-black',
    },
    SOLD_OUT: {
      label: 'Sold Out · Waitlist',
      icon: AlertTriangle,
      bg: 'bg-[#EF476F] text-white border-black',
    },
  };

  const current = configs[availability] || configs.NOT_AVAILABLE;
  const Icon = current.icon;

  const sizeClasses = size === 'sm' 
    ? 'text-[10px] py-0.5 px-2 gap-1 font-black uppercase' 
    : 'text-xs py-1 px-3 gap-1.5 font-black uppercase';

  return (
    <span 
      className={`inline-flex items-center border-2 shadow-[2px_2px_0_0_#000] whitespace-nowrap shrink-0 ${current.bg} ${sizeClasses}`}
    >
      <Icon className="w-3 h-3 shrink-0" />
      <span>{current.label}</span>
    </span>
  );
};
