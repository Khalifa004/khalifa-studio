import React from 'react';

interface CardData {
  title: string;
  subtitle?: string;
  icon?: string;
  items: string[];
}

interface DashboardProps {
  cards: CardData[];
}

const Card: React.FC<CardData> = ({ title, subtitle, icon, items }) => (
  <div className="bg-[#1A1A1A] rounded-2xl p-4 sm:p-6">
    {subtitle && (
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        {icon && <div className={`bg-[${icon}] w-3 h-3 sm:w-4 sm:h-4 rounded-sm`} />}
        <span className="text-white text-xs sm:text-sm">{subtitle}</span>
      </div>
    )}
    <h2 className={`text-${subtitle ? 'white text-xl sm:text-2xl' : ' text-white sm:text-lg'} mb-3 sm:mb-4`}>{title}</h2>
    <div className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <p key={index} className="text-gray-400 text-sm sm:text-base">{item}</p>
      ))}
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ cards }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Dashboard;