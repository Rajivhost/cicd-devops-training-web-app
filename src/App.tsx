import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Overview } from './pages/Overview';
import { Objectives } from './pages/Objectives';
import { Program } from './pages/Program';
import { Prerequisites } from './pages/Prerequisites';
import { Day1 } from './pages/Day1';
import { Day2 } from './pages/Day2';
import { Day3 } from './pages/Day3';
import { useProgress } from './hooks/useProgress';
import { trainingData } from './data/trainingData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { progress, updateProgress } = useProgress();

  // Filter content based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const results: any[] = [];
    
    trainingData.forEach((day) => {
      day.modules.forEach((module) => {
        if (
          module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          module.content.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({
            type: 'module',
            dayId: day.id,
            dayTitle: day.title,
            moduleTitle: module.title,
            content: module.content.slice(0, 150) + '...'
          });
        }
      });
    });
    
    return results;
  }, [searchQuery]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar progress={progress} />
        
        <div className="flex-1 flex flex-col">
          <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
          
          <main className="flex-1 overflow-y-auto">
            {searchResults && searchResults.length > 0 ? (
              <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Résultats de recherche pour "{searchQuery}"
                  </h2>
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900">{result.moduleTitle}</h3>
                        <p className="text-sm text-gray-600 mb-2">{result.dayTitle}</p>
                        <p className="text-gray-700">{result.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : searchQuery ? (
              <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-600">Aucun résultat trouvé pour "{searchQuery}"</p>
                </div>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/objectives" element={<Objectives />} />
                <Route path="/program" element={<Program />} />
                <Route path="/prerequisites" element={<Prerequisites />} />
                <Route path="/jour1" element={<Day1 onModuleComplete={updateProgress} />} />
                <Route path="/jour2" element={<Day2 onModuleComplete={updateProgress} />} />
                <Route path="/jour3" element={<Day3 onModuleComplete={updateProgress} />} />
                <Route path="/day1" element={<Day1 onModuleComplete={updateProgress} />} />
                <Route path="/day2" element={<Day2 onModuleComplete={updateProgress} />} />
                <Route path="/day3" element={<Day3 onModuleComplete={updateProgress} />} />
              </Routes>
            )}
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;