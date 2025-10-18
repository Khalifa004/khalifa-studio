'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Award, MapPin } from 'lucide-react';

interface Position {
  title: string;
  name: string;
}

interface OrganizationLevel {
  id: string;
  title: string;
  subtitle?: string;
  positions: Position[];
  color: string;
  icon: React.ReactNode;
  level: number;
}

const organizationData: OrganizationLevel[] = [
  {
    id: 'club',
    title: 'Notre Club',
    subtitle: 'ASC Kouly (Association Sportive et Culturelle Kouly)',
    positions: [
      { title: 'Président(e)', name: '[Nom]' },
      { title: 'Manager Général', name: '[Nom]' },
      { title: 'Entraîneur', name: '[Nom]' },
      { title: 'Capitaine', name: '[Nom]' }
    ],
    color: 'from-green-500 to-emerald-600',
    icon: <Users className="w-5 h-5" />,
    level: 1
  },
  {
    id: 'zac',
    title: 'Zone d\'Animation et de Coordination (ZAC)',
    subtitle: 'ZAC [Nom de la Zone]',
    positions: [
      { title: 'Président(e) de Zone', name: '[Nom]' },
      { title: 'Vice-président(e)', name: '[Nom]' },
      { title: 'Secrétaire Général(e)', name: '[Nom]' }
    ],
    color: 'from-blue-500 to-cyan-600',
    icon: <MapPin className="w-5 h-5" />,
    level: 2
  },
  {
    id: 'odecav',
    title: 'Organisation Départementale (ODECAV)',
    subtitle: 'ODECAV [Nom du Département, ex. Tivaouane]',
    positions: [
      { title: 'Président(e) de l\'ODECAV', name: '[Nom]' },
      { title: 'Vice-président(e)', name: '[Nom]' },
      { title: 'Secrétaire Général(e)', name: '[Nom]' }
    ],
    color: 'from-purple-500 to-violet-600',
    icon: <Award className="w-5 h-5" />,
    level: 3
  },
  {
    id: 'orcav',
    title: 'Organisation Régionale (ORCAV)',
    subtitle: 'ORCAV [Nom de la Région, ex. Thiès]',
    positions: [
      { title: 'Président(e) de l\'ORCAV', name: '[Nom]' },
      { title: 'Vice-président(e)', name: '[Nom]' },
      { title: 'Secrétaire Général(e)', name: '[Nom]' }
    ],
    color: 'from-orange-500 to-red-600',
    icon: <MapPin className="w-5 h-5" />,
    level: 4
  },
  {
    id: 'oncav',
    title: 'Organisation Nationale (ONCAV)',
    subtitle: 'ONCAV – Organisation Nationale de Coordination des Activités de Vacances',
    positions: [
      { title: 'Président(e) National(e)', name: '[Nom]' },
      { title: 'Vice-président(e) National(e)', name: '[Nom]' },
      { title: 'Secrétaire Général(e) National(e)', name: '[Nom]' }
    ],
    color: 'from-amber-500 to-yellow-600',
    icon: <Award className="w-5 h-5" />,
    level: 5
  }
];

export default function RecognitionTree() {
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set(['club']));

  const toggleLevel = (levelId: string) => {
    const newExpanded = new Set(expandedLevels);
    if (newExpanded.has(levelId)) {
      newExpanded.delete(levelId);
    } else {
      newExpanded.add(levelId);
    }
    setExpandedLevels(newExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
          🌳 <span>Arbre de Reconnaissance</span>
        </h1>
        <p className="text-xl text-gray-600 font-medium">ASC Kouly</p>
      </div>

      {/* Organization Tree */}
      <div className="space-y-6">
        {organizationData.map((level, index) => {
          const isExpanded = expandedLevels.has(level.id);
          const isLast = index === organizationData.length - 1;

          return (
            <div key={level.id} className="relative">
              {/* Connection Line */}
              {!isLast && (
                <div className="absolute left-8 top-16 w-0.5 h-6 bg-gray-300 z-0"></div>
              )}

              {/* Level Card */}
              <div className="relative z-10">
                <button
                  onClick={() => toggleLevel(level.id)}
                  className="w-full text-left transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className={`bg-gradient-to-r ${level.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          {level.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{level.title}</h3>
                          {level.subtitle && (
                            <p className="text-sm opacity-90 mt-1">{level.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {isExpanded ? (
                          <ChevronDown className="w-6 h-6" />
                        ) : (
                          <ChevronRight className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-4 ml-8 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                    <div className="grid gap-3">
                      {level.positions.map((position, posIndex) => (
                        <div key={posIndex} className="flex justify-between items-center py-2 px-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                          <span className="font-medium text-gray-700">{position.title}</span>
                          <span className="text-gray-500 font-medium">{position.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {!isLast && (
                <div className="flex justify-center my-8">
                  <div className="w-12 h-0.5 bg-gray-300 rounded"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Message */}
      <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Texte PR d'accompagnement</h4>
            <p className="text-gray-700 leading-relaxed">
              L'ASC Kouly est fière d'évoluer dans une grande famille sportive et culturelle, 
              encadrée par l'ONCAV et ses différentes branches (ORCAV, ODECAV, ZAC). 
              Nous saluons le travail, le dévouement et l'engagement de toutes celles et ceux qui, 
              à chaque niveau, rendent possible la magie des compétitions communautaires. 
              Cet arbre est un hommage à l'unité et à la passion qui nous rassemblent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
