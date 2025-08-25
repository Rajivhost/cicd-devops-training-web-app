import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award, BookOpen } from 'lucide-react';
import { courseOverview } from '../data/trainingData';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">{courseOverview.title}</h1>
        <p className="text-lg opacity-90 mb-6 max-w-2xl">{courseOverview.subtitle}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>{courseOverview.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Formation interactive</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Certification incluse</span>
          </div>
        </div>
        
        <Link 
          to="/overview"
          className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <span>Commencer la formation</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link to="/day1" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Jour 1</h3>
          </div>
          <p className="text-gray-600 text-sm">Fondamentaux CI/CD et premiers workflows</p>
        </Link>

        <Link to="/day2" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Jour 2</h3>
          </div>
          <p className="text-gray-600 text-sm">CI avancé, Docker Registry et Kubernetes</p>
        </Link>

        <Link to="/day3" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Jour 3</h3>
          </div>
          <p className="text-gray-600 text-sm">GitOps, Infrastructure as Code et pipeline complet</p>
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce que vous allez apprendre</h2>
        <p className="text-gray-600 mb-6">{courseOverview.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Compétences acquises</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Maîtrise des outils CI/CD modernes</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Automatisation des déploiements</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Pratiques DevOps avancées</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Méthode pédagogique</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Modules interactifs</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Quiz de validation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm text-gray-700">Suivi de progression</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};