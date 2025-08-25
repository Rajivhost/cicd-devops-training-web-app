import React from 'react';
import { courseOverview } from '../data/trainingData';
import { Clock, Target, Users } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vue d'ensemble</h1>
          <p className="text-gray-600">Découvrez le contenu et l'organisation de cette formation CI/CD DevOps</p>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos de cette formation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{courseOverview.subtitle}</p>
            <p className="text-gray-700 leading-relaxed">{courseOverview.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Clock className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Durée</h3>
              <p className="text-gray-700">{courseOverview.duration} de formation intensive</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <Target className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Objectif</h3>
              <p className="text-gray-700">Maîtrise complète du CI/CD et DevOps</p>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <Users className="h-8 w-8 text-cyan-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-700">Formation interactive avec quizz</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progression recommandée</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <p className="text-gray-700">Commencez par les <strong>fondamentaux CI/CD</strong> pour établir une base solide</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <p className="text-gray-700">Approfondissez avec les <strong>techniques avancées</strong> et la conteneurisation</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <p className="text-gray-700">Maîtrisez les <strong>pratiques GitOps</strong> et l'infrastructure as code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};