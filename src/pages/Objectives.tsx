import React from 'react';
import { objectives } from '../data/trainingData';
import { CheckCircle, Target } from 'lucide-react';

export const Objectives: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Objectifs pédagogiques</h1>
          </div>
          <p className="text-gray-600">Compétences et connaissances que vous allez acquérir</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              À l'issue de cette formation, vous serez capable de mettre en place et gérer 
              des pipelines CI/CD complets, d'appliquer les meilleures pratiques DevOps, 
              et de déployer des applications de manière automatisée et sécurisée.
            </p>
          </div>

          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">{objective}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Compétences transversales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Techniques</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Automatisation des processus</li>
                  <li>• Gestion de la qualité du code</li>
                  <li>• Déploiement sécurisé</li>
                  <li>• Monitoring et observabilité</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Organisationnelles</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Collaboration Dev/Ops</li>
                  <li>• Amélioration continue</li>
                  <li>• Gestion des incidents</li>
                  <li>• Documentation technique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};