import React from 'react';
import { Link } from 'react-router-dom';
import { trainingData } from '../data/trainingData';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const Program: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-2">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Programme</h1>
          </div>
          <p className="text-gray-600">Détail de la formation jour par jour</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {trainingData.map((day, index) => {
              const colors = [
                { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
                { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'text-teal-600' },
                { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', icon: 'text-cyan-600' }
              ];
              const color = colors[index] || colors[0];
              
              return (
                <div key={day.id} className={`${color.bg} p-6 rounded-lg border ${color.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className={`h-6 w-6 ${color.icon}`} />
                      <h2 className={`text-xl font-semibold ${color.text}`}>{day.title}</h2>
                    </div>
                    <Link 
                      to={`/${day.id}`}
                      className={`inline-flex items-center space-x-2 px-4 py-2 bg-white ${color.text} rounded-lg font-medium hover:bg-gray-50 transition-colors border ${color.border}`}
                    >
                      <span>Accéder</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <p className={`${color.text} mb-4`}>{day.description}</p>
                  
                  <div className="space-y-2">
                    <h3 className={`font-medium ${color.text}`}>Modules inclus :</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {day.modules.map((module) => (
                        <li key={module.id} className={`flex items-center space-x-2 text-sm ${color.text}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${color.icon.replace('text-', 'bg-')}`}></div>
                          <span>{module.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`mt-4 pt-4 border-t ${color.border}`}>
                    <p className={`text-sm ${color.text} flex items-center space-x-2`}>
                      <span className="font-medium">Quiz inclus :</span>
                      <span>{day.quiz.title}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Approche pédagogique</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1</div>
                <h4 className="font-medium text-gray-900 mb-1">Théorie</h4>
                <p className="text-sm text-gray-600">Concepts fondamentaux</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2</div>
                <h4 className="font-medium text-gray-900 mb-1">Pratique</h4>
                <p className="text-sm text-gray-600">Exercices guidés</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3</div>
                <h4 className="font-medium text-gray-900 mb-1">Validation</h4>
                <p className="text-sm text-gray-600">Quiz et évaluation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};