import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { type ComplaintItem } from './ComplaintDetailsModal';

interface ComplaintOverviewProps {
  onNavigate: (tab: 'overview' | 'complaints' | 'form') => void;
  complaints: ComplaintItem[];
  onOpenDetails: (complaint: ComplaintItem) => void;
}

const ComplaintOverview: React.FC<ComplaintOverviewProps> = ({
  onNavigate,
  complaints,
  onOpenDetails
}) => {
  const { t } = useLanguage();
  const activeComplaints = complaints.filter(
    (c) => c.status === 'PENDING' || c.status === 'IN PROGRESS'
  );

  return (
    <div className="space-y-8">
      {/* Hero Banner with modern civic gradient styling */}
      <div className="relative h-60 rounded-2xl overflow-hidden bg-gradient-to-r from-[#500c1e] via-[#751124] to-[#8C1538] shadow-md p-8 flex flex-col justify-end">
        {/* Subtle decorative vector motif */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-end pr-8">
          <svg className="w-56 h-56 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div className="relative z-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-xs text-white border border-white/20">
            Divulapitiya Pradeshiya Sabha
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
            {t('complaints.title', 'Citizen Complaints & Civic Redressal')}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl">
            Promptly report municipal issues regarding roads, waste collection, street lamps, and public utilities across Divulapitiya.
          </p>
        </div>
      </div>

      {/* Quick Services */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lodge Complaint */}
          <div className="relative border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <button
              type="button"
              onClick={() => onNavigate('form')}
              className="absolute top-4 right-4 text-xs font-semibold text-gray-500 hover:text-red-800 transition-colors"
            >
              Report Online
            </button>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-800 flex items-center justify-center text-white mb-4 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">Report an Issue</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Submit problems regarding water, waste, roads, or street lights.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('form')}
              className="mt-2 text-xs font-bold text-red-800 text-left hover:underline cursor-pointer"
            >
              Get Started &rarr;
            </button>
          </div>

          {/* Card 2: Road & Infrastructure */}
          <div className="border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <div>
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">Public Works &amp; Waste</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Emergency drainage clearing, road repairs, and garbage dispatch.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('form')}
              className="text-xs font-bold text-red-800 text-left hover:underline cursor-pointer"
            >
              Lodge Request &rarr;
            </button>
          </div>

          {/* Card 3: My Complaints */}
          <div className="border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">My Complaints</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Track status and field inspector remediation reports.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('complaints')}
              className="text-xs font-bold text-red-800 text-left hover:underline cursor-pointer"
            >
              View Complaints &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Active & Recent Complaints Strip */}
      <div className="border border-gray-100 bg-white rounded-xl p-6 shadow-xs">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Active Complaints &amp; Inquiries</h3>
          <button
            type="button"
            onClick={() => onNavigate('complaints')}
            className="text-xs font-bold text-gray-500 hover:text-red-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            VIEW ALL
          </button>
        </div>

        {activeComplaints.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
            No active complaints. Get started by reporting an issue.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeComplaints.map((c) => (
              <button
                key={c.id}
                type="button"
                className="w-full flex items-start justify-between border border-gray-150 rounded-xl p-5 bg-white relative hover:border-gray-300 transition-colors cursor-pointer text-left"
                onClick={() => onOpenDetails(c)}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                    c.status === 'IN PROGRESS' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {c.category.includes('Water')
                      ? '🚰'
                      : c.category.includes('Waste')
                      ? '🚛'
                      : c.category.includes('Road')
                      ? '🚧'
                      : c.category.includes('Light')
                      ? '💡'
                      : '🏗️'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">
                      {c.title || c.category}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {c.date} • {c.category}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 truncate max-w-xs">
                      📍 {c.address}
                    </p>
                  </div>
                </div>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider border ${
                  c.status === 'IN PROGRESS'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {c.status}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintOverview;
