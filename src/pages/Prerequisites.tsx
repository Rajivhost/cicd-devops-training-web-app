import React from 'react';
import { prerequisites } from '../data/trainingData';
import { Settings, CheckCircle, AlertTriangle } from 'lucide-react';

export const Prerequisites: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-2">
            <Settings className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Prérequis & Setup</h1>
          </div>
          <p className="text-gray-600">Préparez votre environnement de formation</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 mb-1">Important</h3>
                  <p className="text-sm text-yellow-700">
                    Avant de commencer, consultez cette section pour préparer votre environnement 
                    de formation et vous assurer d'avoir tous les outils nécessaires.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Connaissances requises</h2>
            <div className="space-y-3">
              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{prerequisite}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Environnement recommandé</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Système d'exploitation : Linux, macOS ou Windows avec WSL</li>
                <li>• RAM : 8GB minimum (16GB recommandé)</li>
                <li>• Espace disque : 20GB libres</li>
                <li>• Connexion Internet stable</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-900 mb-4">Outils à installer</h3>
              <ul className="space-y-2 text-sm text-teal-800">
                <li>• Git (version 2.30+)</li>
                <li>• Docker & Docker Compose</li>
                <li>• kubectl (client Kubernetes)</li>
                <li>• Éditeur de code (VS Code recommandé)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vérification de l'environnement</h3>
            <p className="text-gray-700 mb-4">
              Avant de commencer la formation, assurez-vous que votre environnement est correctement configuré 
              en exécutant ces commandes dans votre terminal :
            </p>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm space-y-2">
              <div>git --version</div>
              <div>docker --version</div>
              <div>docker-compose --version</div>
              <div>kubectl version --client</div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              Si toutes ces commandes s'exécutent sans erreur, votre environnement est prêt !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};