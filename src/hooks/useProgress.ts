import { useState, useEffect } from 'react';
import { trainingData } from '../data/trainingData';
import { Progress } from '../types';

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>({ totalModules: 0, completedModules: 0, percentage: 0 });

  useEffect(() => {
    const savedProgress = localStorage.getItem('trainingProgress');
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      setProgress(progressData);
    } else {
      calculateInitialProgress();
    }
  }, []);

  const calculateInitialProgress = () => {
    const totalModules = trainingData.reduce((acc, day) => acc + day.modules.length, 0);
    const completedModules = 0;
    const percentage = 0;
    
    const newProgress = { totalModules, completedModules, percentage };
    setProgress(newProgress);
    localStorage.setItem('trainingProgress', JSON.stringify(newProgress));
  };

  const updateProgress = (dayId: string, moduleId: string, completed: boolean) => {
    // Update the training data
    const day = trainingData.find(d => d.id === dayId);
    if (day) {
      const module = day.modules.find(m => m.id === moduleId);
      if (module) {
        module.completed = completed;
        
        // Recalculate progress
        const totalModules = trainingData.reduce((acc, d) => acc + d.modules.length, 0);
        const completedModules = trainingData.reduce((acc, d) => 
          acc + d.modules.filter(m => m.completed).length, 0);
        const percentage = Math.round((completedModules / totalModules) * 100);
        
        const newProgress = { totalModules, completedModules, percentage };
        setProgress(newProgress);
        localStorage.setItem('trainingProgress', JSON.stringify(newProgress));
      }
    }
  };

  return { progress, updateProgress };
};