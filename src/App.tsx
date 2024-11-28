import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Battery from './pages/Battery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'battery':
        return <Battery />;
      default:
        return <div className="text-center text-gray-400 mt-8">Coming Soon</div>;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-navy-950 text-white">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <TopBar />
        
        <main className="ml-20 pt-16 p-6">
          {renderContent()}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;