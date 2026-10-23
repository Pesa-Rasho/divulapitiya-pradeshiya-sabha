import React, { useState } from 'react';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import { useLanguage } from '../../context/LanguageContext';

const AuthPortal = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

  return (
    <div className="flex-grow w-full bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gray-100">
        
        {/* Left Panel - Rich Maroon Banner with Civic Vectors & Text */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#540716] via-[#751124] to-[#8C1538] relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 text-white min-h-[380px] lg:min-h-full">
          {/* Subtle geometric civic background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="1.5" strokeDasharray="4 6" />
              <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" />
              <path d="M40 200 H360 M200 40 V360" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
            </svg>
          </div>
          {/* Ambient lighting glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/40 rounded-full blur-3xl pointer-events-none" />

          {/* Top Crest / Emblem */}
          <div className="relative z-20 flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A1.333 1.333 0 0019.167 9H4.833A1.333 1.333 0 003.5 10.333V21h17z" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/80 block">
                Citizen Portal
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                Divulapitiya Pradeshiya Sabha
              </span>
            </div>
          </div>

          {/* Foreground Mission Content */}
          <div className="relative z-20 space-y-4 mt-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-xs text-white border border-white/20">
              Official Digital Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {t('auth.title', 'Empowering Divulapitiya')}
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
              {t('auth.subtitle', 'Welcome to our Unified Digital Gateway. Celebrating one year of digital transformation, we are committed to providing a seamless, transparent, and efficient administrative experience for all our citizens.')}
            </p>
          </div>
        </div>

        {/* Right Panel - Dynamic Login & Registration Card */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
          {/* Top Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className={`pb-3 px-6 text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'border-b-2 border-[#8C1538] text-[#8C1538]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {t('auth.civilianLogin', 'Civilian Login')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('register')}
              className={`pb-3 px-6 text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'border-b-2 border-[#8C1538] text-[#8C1538]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {t('auth.civilianRegister', 'Civilian Register')}
            </button>
          </div>

          {/* Active View Container */}
          <div className="w-full">
            {activeTab === 'login' ? (
              <LoginView />
            ) : (
              <RegisterView onCancel={() => setActiveTab('login')} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPortal;
