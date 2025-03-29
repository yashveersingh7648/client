// components/StatsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ value, suffix = '+', label }: { value: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount(prev => {
          const increment = Math.ceil(value / 20);
          return prev + increment > value ? value : prev + increment;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-5xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <h3 className="text-lg font-medium text-gray-700 uppercase tracking-wider">
        {label}
      </h3>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem value={1500} label="Dealers in India" />
          <StatItem value={5200} label="Served Clients" />
          <StatItem value={748} label="Products" />
          <StatItem value={22} suffix="" label="Years of Trust" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;