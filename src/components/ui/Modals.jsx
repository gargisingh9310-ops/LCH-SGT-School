import React, { useState } from 'react';
import { X, HeartHandshake, Phone, Mail, Building, CheckCircle2, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function CSRModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    interestArea: 'Infrastructure & Facilities',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-white border border-emerald-900/10 shadow-premium p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-charcoal-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-950 font-display">
              Corporate Social Responsibility
            </h3>
            <p className="text-xs text-amber-700 font-semibold">
              Partner With LCH SGT High School
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-emerald-950">Thank You for Your Interest</h4>
            <p className="text-sm text-charcoal-700 leading-relaxed max-w-md mx-auto">
              Your inquiry has been recorded for this prototype review. In the production deployment, our school leadership and Lions Club committee will reach out directly.
            </p>
            <div className="pt-2 text-xs text-charcoal-500">
              Direct Helpline: <a href="tel:+918985914859" className="font-bold text-emerald-900">+91 8985914859</a>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-emerald-900 text-white text-xs font-semibold hover:bg-emerald-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We welcome CSR initiatives in educational resources, sports, labs, and student development. Share your details below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">Company / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Foundation"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">Contact Person</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">Official Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-1">Focus Area</label>
              <select
                value={formData.interestArea}
                onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
              >
                <option>School & Learning Facilities Upgrades</option>
                <option>STEM & Science Laboratory Resources</option>
                <option>Computer Lab & Digital Workstations</option>
                <option>Sports & Physical Fitness Equipment</option>
                <option>Student Welfare & Educational Sponsorship</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-1">Brief Proposal or Note</label>
              <textarea
                rows="3"
                placeholder="Describe how your organization would like to support LCH SGT High School..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-charcoal-500 italic">
                * Draft prototype for client review
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs tracking-wide transition-colors shadow-sm"
              >
                Submit CSR Proposal
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function FacilityModal({ facility, onClose }) {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-emerald-900/10 shadow-premium overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full">
          <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
              {facility.category}
            </span>
            <h3 className="text-2xl font-bold font-display">{facility.title}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-charcoal-700">
          <p className="leading-relaxed">
            {facility.description}
          </p>

          <div className="p-4 rounded-xl bg-sage-50 border border-emerald-900/10 space-y-2">
            <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wider">
              Facility Specifications & Experience
            </h4>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Designed to meet modern educational norms under Lions Club of Hyderabad patron guidelines. In phase 2, this modal will link to a dedicated photo gallery, schedule, and equipment inventory.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-emerald-900 text-white text-xs font-semibold hover:bg-emerald-800"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdmissionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-emerald-900/10 shadow-premium p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-charcoal-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-950 font-display">
              Admissions Inquiries
            </h3>
            <p className="text-xs text-amber-700 font-semibold">
              Academic Year 2025–2026
            </p>
          </div>
        </div>

        <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
          Admissions at LCH SGT High School are structured to provide holistic educational opportunities to every child. Please contact our administrative office directly:
        </p>

        <div className="space-y-3 p-4 rounded-xl bg-ivory border border-emerald-900/10 text-xs">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-emerald-950">Primary Desk:</span>
            <a href="tel:+918985914859" className="font-bold text-amber-700 hover:underline">
              +91 8985914859
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-emerald-950">Secondary Desk:</span>
            <a href="tel:+918977181875" className="font-bold text-amber-700 hover:underline">
              +91 8977181875
            </a>
          </div>
          <div className="flex items-start gap-2 pt-1 border-t border-gray-200/60">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span className="text-charcoal-600 italic">
              Campus Visits: Monday – Saturday, 9:00 AM – 3:30 PM (Hyderabad, Telangana)
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-emerald-900 text-white text-xs font-semibold hover:bg-emerald-800"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
