import React, { useState } from 'react';
import { Day } from '../types';
import { ChevronDown, ChevronRight, CheckCircle, Circle } from 'lucide-react';
import { Quiz } from '../components/Quiz';

interface DayTemplateProps {
  day: Day;
  onModuleComplete: (dayId: string, moduleId: string, completed: boolean) => void;
}

export const DayTemplate: React.FC<DayTemplateProps> = ({ day, onModuleComplete }) => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const handleModuleComplete = (moduleId: string, completed: boolean) => {
    onModuleComplete(day.id, moduleId, completed);
  };

  const completedModules = day.modules.filter(m => m.completed).length;
  const progressPercentage = Math.round((completedModules / day.modules.length) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{day.title}</h1>
          <p className="text-gray-600 mb-4">{day.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progression du jour</span>
              <span className="text-sm font-bold text-gray-900">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {completedModules} / {day.modules.length} modules terminés
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {day.modules.map((module) => {
          const isExpanded = expandedModules.has(module.id);
          
          return (
            <div key={module.id} className="bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="flex items-center space-x-3 flex-1 text-left"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                    <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                  </button>
                  
                  <button
                    onClick={() => handleModuleComplete(module.id, !module.completed)}
                    className="flex items-center space-x-2 ml-4"
                  >
                    {module.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <Circle className="h-6 w-6 text-gray-400" />
                    )}
                    <span className={`text-sm font-medium ${
                      module.completed ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      {module.completed ? 'Terminé' : 'Marquer comme terminé'}
                    </span>
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="mt-4 pl-8 pr-4">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">{module.content}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {completedModules === day.modules.length && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Modules terminés !</h3>
            <p className="text-gray-600">Testez vos connaissances avec le quiz du jour</p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {showQuiz ? 'Masquer le quiz' : 'Commencer le quiz'}
            </button>
          </div>
        </div>
      )}

      {showQuiz && <Quiz quiz={day.quiz} />}
    </div>
  );
};