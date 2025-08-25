import React from 'react';
import { DayTemplate } from './DayTemplate';
import { trainingData } from '../data/trainingData';

interface Day1Props {
  onModuleComplete: (dayId: string, moduleId: string, completed: boolean) => void;
}

export const Day1: React.FC<Day1Props> = ({ onModuleComplete }) => {
  const day1Data = trainingData[0];
  
  return <DayTemplate day={day1Data} onModuleComplete={onModuleComplete} />;
};