'use client';

import { useState } from 'react';

// Simple SVG icons as components
const RainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
    <line x1="8" y1="19" x2="8" y2="21"/>
    <line x1="8" y1="13" x2="8" y2="15"/>
    <line x1="16" y1="19" x2="16" y2="21"/>
    <line x1="16" y1="13" x2="16" y2="15"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="12" y1="15" x2="12" y2="17"/>
  </svg>
);

const CafeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const FireIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const ForestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L8 8h8l-4-6z"/>
    <path d="M10 6L6 12h12l-4-6"/>
    <path d="M8 10L4 16h16l-4-6"/>
    <rect x="11" y="16" width="2" height="6"/>
  </svg>
);

const LeaveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16,17 21,12 16,7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23,7 16,12 23,17"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

interface User {
  id: string;
  name: string;
  isOnline: boolean;
  isMuted: boolean;
  hasVideo: boolean;
}

export default function ZenDashboard() {
  const [selectedAmbiance, setSelectedAmbiance] = useState('rain');
  const [isAmbiancePlaying, setIsAmbiancePlaying] = useState(false);

  // Mock users data
  const users: User[] = [
    { id: '1', name: 'Sarah', isOnline: true, isMuted: false, hasVideo: true },
    { id: '2', name: 'Alex', isOnline: true, isMuted: true, hasVideo: true },
    { id: '3', name: 'Emma', isOnline: true, isMuted: false, hasVideo: false },
    { id: '4', name: 'You', isOnline: true, isMuted: false, hasVideo: true },
  ];

  const ambianceSounds = [
    { id: 'rain', name: 'Rain', icon: RainIcon },
    { id: 'cafe', name: 'Café', icon: CafeIcon },
    { id: 'campfire', name: 'Campfire', icon: FireIcon },
    { id: 'forest', name: 'Forest', icon: ForestIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-sage-400 to-sage-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-700 tracking-tight">Zen Den</h1>
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2.5 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <LeaveIcon />
          <span className="font-medium">Leave Room</span>
        </button>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 px-6 pb-6">
        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          {/* Video Grid */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-stone-700 mb-4">Study Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user, index) => (
                <div key={user.id} className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    {user.hasVideo ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
                        <div className="text-stone-600 text-lg font-medium">{user.name}'s Video</div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                        <div className="w-16 h-16 bg-stone-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl font-bold">{user.name[0]}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* User info overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                        {user.name}
                      </div>
                      <div className="flex space-x-2">
                        <div className={`p-1.5 rounded-lg ${user.isMuted ? 'bg-red-500/80' : 'bg-green-500/80'}`}>
                          <MicIcon />
                        </div>
                        <div className={`p-1.5 rounded-lg ${user.hasVideo ? 'bg-green-500/80' : 'bg-red-500/80'}`}>
                          <VideoIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ambiance Control Panel */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-stone-700">Ambient Sounds</h2>
              <button
                onClick={() => setIsAmbiancePlaying(!isAmbiancePlaying)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isAmbiancePlaying 
                    ? 'bg-sage-500 text-white shadow-md hover:bg-sage-600' 
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {isAmbiancePlaying ? 'Playing' : 'Paused'}
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ambianceSounds.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => setSelectedAmbiance(sound.id)}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                    selectedAmbiance === sound.id
                      ? 'bg-sage-100 border-2 border-sage-300 shadow-lg'
                      : 'bg-stone-100 hover:bg-stone-200 border-2 border-transparent shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${
                    selectedAmbiance === sound.id ? 'bg-sage-200 text-sage-700' : 'bg-stone-200 text-stone-600'
                  }`}>
                    <sound.icon />
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedAmbiance === sound.id ? 'text-sage-700' : 'text-stone-600'
                  }`}>
                    {sound.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Online Users */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-stone-700 mb-4">In This Room</h3>
            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors duration-200">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{user.name[0]}</span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      user.isOnline ? 'bg-green-400' : 'bg-stone-300'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-stone-700">{user.name}</div>
                    <div className="text-xs text-stone-500 flex items-center space-x-2">
                      <span className={user.isMuted ? 'text-red-500' : 'text-green-500'}>
                        {user.isMuted ? 'Muted' : 'Unmuted'}
                      </span>
                      <span>•</span>
                      <span className={user.hasVideo ? 'text-green-500' : 'text-red-500'}>
                        {user.hasVideo ? 'Video On' : 'Video Off'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Room Info */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-stone-700 mb-4">Room Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-600">Room Name:</span>
                <span className="font-medium text-stone-700">Cozy Study Hall</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Current Vibe:</span>
                <span className="font-medium text-stone-700 capitalize">{selectedAmbiance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Study Time:</span>
                <span className="font-medium text-stone-700">1h 23m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
