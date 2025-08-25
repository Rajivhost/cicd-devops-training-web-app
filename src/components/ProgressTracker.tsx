import React from 'react';
import { Progress } from '../types';

interface ProgressTrackerProps {
  progress: Progress;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Progression globale</span>
        <span className="text-sm font-bold">{progress.percentage}%</span>
      </div>
      <div className="w-full bg-blue-300 rounded-full h-2">
        <div 
          className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress.percentage}%` }}
        ></div>
      </div>
      <p className="text-xs mt-2 opacity-90">
        {progress.completedModules} / {progress.totalModules} modules terminés
      </p>
    </div>
  );
};