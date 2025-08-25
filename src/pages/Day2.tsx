import React from 'react';
import { DayTemplate } from './DayTemplate';
import { trainingData } from '../data/trainingData';

interface Day2Props {
  onModuleComplete: (dayId: string, moduleId: string, completed: boolean) => void;
}

export const Day2: React.FC<Day2Props> = ({ onModuleComplete }) => {
  const day2Data = trainingData[1];
  
  return <DayTemplate day={day2Data} onModuleComplete={onModuleComplete} />;
};