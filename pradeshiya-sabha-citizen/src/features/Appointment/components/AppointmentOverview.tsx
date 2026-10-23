import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const AppointmentOverview = ({ onNavigate, bookings }) => {
  const { t } = useLanguage();
  // Only get upcoming/active bookings (e.g. CONFIRMED, RESERVED, or PENDING)
  const upcomingBookings = bookings.filter(b => b.status === 'CONFIRMED' || b.status === 'RESERVED');

  return ( 
    <div className="space-y-8">
      {/* Hero Banner with modern civic gradient styling */}
      <div className="relative h-60 rounded-2xl overflow-hidden bg-gradient-to-r from-[#500c1e] via-[#751124] to-[#8C1538] shadow-md p-8 flex flex-col justify-end">
        {/* Subtle decorative vector motif */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-end pr-8">
          <svg className="w-56 h-56 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <div className="relative z-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-xs text-white border border-white/20">
            Divulapitiya Pradeshiya Sabha
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
            {t('appointments.title', 'Citizen Appointment Portal')}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl">
            Book one-on-one appointments with the Chairman, Secretary, and divisional department officers of Divulapitiya Pradeshiya Sabha.
          </p>
        </div>
      </div>

      {/* Quick Services */}
      <div> 
        <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Book Appointment */}
          <div className="relative border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <button 
              type="button"
              onClick={() => onNavigate('schedule')}
              className="absolute top-4 right-4 text-xs font-semibold text-gray-500 hover:text-red-800 transition-colors"
            >
              View Availability
            </button>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-800 flex items-center justify-center text-white mb-4 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">Book Appointment</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Schedule time with the Chairman or departmental officers.
              </p>
            </div>
            <button 
              type="button"
              onClick={() => onNavigate('schedule')}
              className="mt-2 text-xs font-bold text-red-800 text-left hover:underline"
            >
              Get Started &rarr;
            </button>
          </div>

          {/* Card 2: Reserve Facility */}
          <div className="border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <div>
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">Reserve Facility</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Book community halls, grounds, or council equipment.
              </p>
            </div>
            <button 
              type="button"
              onClick={() => onNavigate('facility')}
              className="text-xs font-bold text-red-800 text-left hover:underline"
            >
              Reserve Now &rarr;
            </button>
          </div>

          {/* Card 3: My Bookings */}
          <div className="border border-gray-150 rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between h-48">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">My Bookings</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Check your booking appointments and reservations.
              </p>
            </div>
            <button 
              type="button"
              onClick={() => onNavigate('bookings')}
              className="text-xs font-bold text-red-800 text-left hover:underline"
            >
              View Bookings &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="border border-gray-100 bg-white rounded-xl p-6 shadow-xs">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Upcoming Bookings & Reservations</h3>
          <button 
            type="button"
            onClick={() => onNavigate('bookings')}
            className="text-xs font-bold text-gray-500 hover:text-red-800 transition-colors uppercase tracking-wider"
          >
            VIEW ALL
          </button>
        </div>

        {/* Keep the empty state visible so citizens always have a clear next action. */}
        {upcomingBookings.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
            No upcoming bookings. Get started by booking an appointment or facility.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingBookings.map(b => (
              // Both appointment and facility records share this card, so choose labels
              // and accent colors from the booking type rather than duplicating markup.
              <button 
                key={b.id} 
                type="button"
                className="w-full flex items-start justify-between border border-gray-150 rounded-xl p-5 bg-white relative hover:border-gray-300 transition-colors cursor-pointer text-left"
                onClick={() => onNavigate('bookings')}
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg ${
                    b.type === 'appointment' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-800'
                  }`}>
                    {b.type === 'appointment' ? '📅' : '🏢'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">
                      {b.type === 'appointment' ? `Appointment with ${b.officialName}` : b.facilityName}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {b.date} {b.time ? `• ${b.time}` : ''}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {b.type === 'appointment' ? b.office : b.location}
                    </p>
                  </div>
                </div>
                <div>
                  {/* Reserved bookings use an outlined badge; confirmed bookings use a filled badge. */}
                  <span className={`inline-block text-[10px] font-extrabold px-2.5 py-1 rounded-sm uppercase tracking-wider ${
                    b.status === 'CONFIRMED' 
                      ? 'bg-green-100 text-green-700' 
                      : 'border border-green-200 text-green-700 font-bold'
                  }`}>
                    {b.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentOverview;
