import React from 'react';
import { Activity, Sparkles, Heart } from 'lucide-react';
import FlexCarousel from '../reactbits/FlexCarousel';

export default function ActivitiesCarousel() {
  const activities = [
    {
      id: 'yoga',
      title: 'Yoga & Mindfulness',
      tag: 'Mind & Body Balance',
      description: 'Daily morning yoga sessions instill focus, calmness, deep breathing, and self-discipline from an early age.',
      image: '/assets/images/yoga_mindfulness.jpg',
      highlights: ['Morning Asanas', 'Breathing Exercises', 'Mental Discipline'],
    },
    {
      id: 'fitness',
      title: 'Physical Fitness & Athletics',
      tag: 'Strength & Agility',
      description: 'Structured drills, team sports, and outdoor exercises fostering stamina, healthy physical habits, and sportsmanship.',
      image: '/assets/images/physical_fitness.jpg',
      highlights: ['Team Coordination', 'Outdoor Drills', 'Endurance Building'],
    },
    {
      id: 'computer',
      title: 'Computer Classes & Digital Skills',
      tag: 'Digital Literacy',
      description: 'Hands-on practical training in computing, typing, logic, and early digital skills in our dedicated workstation lab.',
      image: '/assets/images/computer_lab.jpg',
      highlights: ['Interactive Software', 'Digital Foundations', 'Computer Literacy'],
    },
    {
      id: 'classroom',
      title: 'Engaging Classroom Learning',
      tag: 'Intellectual Growth',
      description: 'Interactive pedagogy where inquiry is celebrated, questions are welcomed, and concepts are mastered through dialogue.',
      image: '/assets/images/class_rooms.jpg',
      highlights: ['Conceptual Clarity', 'Inquiry-Based', 'Peer Collaboration'],
    },
    {
      id: 'music-dance',
      title: 'Music, Dance & Cultural Arts',
      tag: 'Creative Expression',
      description: 'Nurturing rhythm, classical arts, vocal training, and cultural heritage on stage and in our music studios.',
      image: '/assets/images/music_dance.jpg',
      highlights: ['Classical Instruments', 'Vocal Choirs', 'Stage Presence'],
    },
    {
      id: 'teamwork',
      title: 'Teamwork & Extracurriculars',
      tag: 'Social Intelligence',
      description: 'Inter-house competitions, debates, science exhibits, and civic service activities building confident communication.',
      image: '/assets/images/cultural_stage.jpg',
      highlights: ['Inter-House Meets', 'Leadership Roles', 'Civic Care'],
    },
  ];

  return (
    <section id="activities" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-sage-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4 text-amber-600" />
            <span>Campus Life & Student Development</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-emerald-950 font-display tracking-tight">
            Learning Comes Alive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">
              Beyond the Classroom
            </span>
          </h2>

          <p className="mt-4 text-base text-charcoal-700/90 leading-relaxed font-sans">
            Through engaging activities, children develop mindfulness, discipline, physical fitness, teamwork, and confidence.
          </p>
        </div>

        {/* React Bits FlexCarousel Component */}
        <div className="w-full">
          <FlexCarousel items={activities} autoPlayInterval={4500} />
        </div>

        {/* Core Value Tags Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-emerald-950">
          <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-emerald-900/10">
            🌱 Mindfulness & Discipline
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-emerald-900/10">
            🏃 Physical Fitness
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-emerald-900/10">
            🤝 Teamwork & Cooperation
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-emerald-900/10">
            🎤 Confidence & Communication
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-emerald-900/10">
            ✨ Holistic Development
          </span>
        </div>

      </div>
    </section>
  );
}
