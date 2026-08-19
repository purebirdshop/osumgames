import React from 'react';
import { ProductReadiness } from '../../types';
import { Sparkles, Hammer, Clock, CheckCircle2, Archive } from 'lucide-react';

interface ReadinessBadgeProps {
  readiness: ProductReadiness;
  size?: 'sm' | 'md';
}

export const ReadinessBadge: React.FC<ReadinessBadgeProps> = ({ readiness, size = 'md' }) => {
  const configs = {
    IDEA: {
      label: 'Idea Stage',
      icon: Sparkles,
      bg: 'bg-[#4834D4] text-white border-black',
      dot: 'bg-white',
    },
    DEVELOPMENT: {
      label: 'In Development',
      icon: Hammer,
      bg: 'bg-[#00A896] text-black border-black',
      dot: 'bg-black animate-pulse',
    },
    PRE_RELEASE: {
      label: 'Pre-Release',
      icon: Clock,
      bg: 'bg-[#FF6B35] text-white border-black',
      dot: 'bg-white animate-ping',
    },
    LAUNCHED: {
      label: 'Launched',
      icon: CheckCircle2,
      bg: 'bg-[#10b981] text-black border-black',
      dot: 'bg-black',
    },
    ARCHIVED: {
      label: 'Vaulted',
      icon: Archive,
      bg: 'bg-slate-200 text-slate-800 border-black',
      dot: 'bg-slate-600',
    },
  };

  const current = configs[readiness] || configs.DEVELOPMENT;
  const Icon = current.icon;

  const sizeClasses = size === 'sm' 
    ? 'text-[10px] py-0.5 px-2 gap-1 font-black uppercase' 
    : 'text-xs py-1 px-3 gap-1.5 font-black uppercase';

  return (
    <span 
      className={`inline-flex items-center border-2 shadow-[2px_2px_0_0_#000] whitespace-nowrap shrink-0 ${current.bg} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${current.dot}`} />
      <Icon className="w-3 h-3 shrink-0" />
      <span>{current.label}</span>
    </span>
  );
};
