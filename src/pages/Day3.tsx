import React from 'react';
import { DayTemplate } from './DayTemplate';
import { trainingData } from '../data/trainingData';

interface Day3Props {
  onModuleComplete: (dayId: string, moduleId: string, completed: boolean) => void;
}

export const Day3: React.FC<Day3Props> = ({ onModuleComplete }) => {
  const day3Data = trainingData[2];
  
  return <DayTemplate day={day3Data} onModuleComplete={onModuleComplete} />;
};