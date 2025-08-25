import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Eye, 
  Target, 
  Calendar, 
  Settings, 
  Play,
  ChevronRight 
} from 'lucide-react';
import { ProgressTracker } from './ProgressTracker';
import { Progress } from '../types';

interface SidebarProps {
  progress: Progress;
}

export const Sidebar: React.FC<SidebarProps> = ({ progress }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/overview', label: 'Vue d\'ensemble', icon: Eye },
    { path: '/objectives', label: 'Objectifs pédagogiques', icon: Target },
    { path: '/program', label: 'Programme', icon: Calendar },
    { path: '/prerequisites', label: 'Prérequis', icon: Settings },
  ];

  const dayItems = [
    { path: '/day1', label: 'Jour 1: Fondamentaux', icon: Play },
    { path: '/day2', label: 'Jour 2: CI Avancé', icon: Play },
    { path: '/day3', label: 'Jour 3: GitOps', icon: Play },
  ];

  return (
    <div className="w-80 bg-white h-screen shadow-lg border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <ProgressTracker progress={progress} />
        
        <nav className="space-y-2">
          <div className="pb-4 border-b border-gray-200">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="h-3 w-3 ml-auto" />}
                </Link>
              );
            })}
          </div>
          
          <div className="pt-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Formation par jour
            </h3>
            {dayItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-teal-100 text-teal-700 border border-teal-200' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="h-3 w-3 ml-auto" />}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};