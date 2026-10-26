import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function FacilitiesGrid({ onFacilityClick }) {
  const facilities = [
    {
      id: 'building',
      title: 'School Building',
      category: 'Campus Infrastructure',
      description: 'An architectural campus blending classic arches, green foliage, and secure, welcoming learning corridors.',
      image: '/assets/images/school_building.jpg',
      link: '#',
      isLead: true, // Lead card spanning 2 columns on desktop
    },
    {
      id: 'classrooms',
      title: 'Class Rooms',
      category: 'Academic Spaces',
      description: 'Sunlit, ventilated classrooms with ergonomic wooden desks and teacher chalkboards designed for focused learning.',
      image: '/assets/images/class_rooms.jpg',
      link: '#',
    },
    {
      id: 'labs',
      title: 'School Labs',
      category: 'Practical Sciences',
      description: 'Fully equipped physics, chemistry, and biology stations encouraging observational experiments.',
      image: '/assets/images/science_lab.jpg',
      link: '#',
    },
    {
      id: 'library',
      title: 'School Library',
      category: 'Knowledge Hub',
      description: 'Quiet sanctuary filled with diverse reference volumes, literature, journals, and dedicated reading carrels.',
      image: '/assets/images/school_library.jpg',
      link: '#',
    },
    {
      id: 'playground',
      title: 'School Play Ground',
      category: 'Sports & Athletics',
      description: 'Expansive open-air sports field accommodating volleyball, track, and team athletics under shaded canopies.',
      image: '/assets/images/playground.jpg',
      link: '#',
    },
    {
      id: 'music-dance',
      title: 'Music & Dance Room',
      category: 'Performing Arts',
      description: 'Dedicated acoustic cultural studio equipped with traditional instruments, tabla, harmonium, and dance mirrors.',
      image: '/assets/images/music_dance.jpg',
      link: '#',
    },
    {
      id: 'transport',
      title: 'Transport',
      category: 'Student Safety',
      description: 'Reliable and safe fleet of dedicated school buses covering all major student residential routes in the city.',
      image: '/assets/images/transport.jpg',
      link: '#',
    },
    {
      id: 'art-room',
      title: 'Art Room',
      category: 'Creative Expression',
      description: 'Vibrant studio supporting pottery, watercolor painting, sketch easels, and student art exhibition walls.',
      image: '/assets/images/art_room.jpg',
      link: '#',
    },
    {
      id: 'indoor-sports',
      title: 'Indoor Sports',
      category: 'Fitness & Agility',
      description: 'Multi-court indoor sports arena supporting badminton, table tennis, yoga, and gymnastics year-round.',
      image: '/assets/images/indoor_sports.jpg',
      link: '#',
    },
    {
      id: 'computer-lab',
      title: 'Computer Lab',
      category: 'Digital Literacy',
      description: 'High-speed desktop workstations facilitating coding, computer science fundamentals, and interactive learning.',
      image: '/assets/images/computer_lab.jpg',
      link: '#',
    },
  ];

  const handleClick = (e, item) => {
    e.preventDefault();
    if (onFacilityClick) {
      onFacilityClick(item);
    }
  };

  return (
    <section id="facilities" className="py-14 sm:py-20 md:py-24 bg-ivory-50 relative overflow-hidden border-t border-b border-emerald-900/10">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>10 Interactive Campus Facilities</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 font-display tracking-tight leading-tight">
              A Campus That Inspires Learning
            </h2>
            
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-charcoal-700 font-sans leading-relaxed">
              Explore the spaces and experiences that support learning, creativity, wellbeing, and growth.
            </p>
          </div>

          <div className="hidden sm:block">
            <span className="text-xs font-mono text-emerald-900/70 uppercase tracking-widest bg-white px-3.5 py-2 rounded-lg border border-emerald-900/10 shadow-sm">
              Phase 1 Prototype · Click to View Details
            </span>
          </div>
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((fac, idx) => {
            const isLead = fac.isLead;
            return (
              <a
                key={fac.id}
                href={fac.link}
                onClick={(e) => handleClick(e, fac)}
                className={`group relative rounded-2xl overflow-hidden bg-emerald-950 border border-emerald-900/20 shadow-elevated transition-all duration-500 hover:shadow-premium hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isLead ? 'sm:col-span-2 lg:col-span-2 min-h-[280px] sm:min-h-0 aspect-[16/12] sm:aspect-[16/9]' : 'min-h-[250px] sm:min-h-0 aspect-[4/3.4] sm:aspect-[4/3.2]'
                }`}
              >
                {/* Image with Zoom Transition */}
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Layered Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/40 transition-colors duration-300" />

                {/* Card Content */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-7 flex flex-col justify-between z-10">
                  
                  {/* Top Bar: Category Tag & Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wide border border-white/20 shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      {fac.category}
                    </span>

                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-amber-500 text-white group-hover:text-charcoal-950 flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 transform group-hover:rotate-45 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="text-[10px] sm:text-[11px] font-mono text-amber-400/90 tracking-widest uppercase">
                      Facility 0{idx + 1}
                    </div>

                    <h3 className={`font-bold text-white font-display tracking-tight group-hover:text-amber-300 transition-colors ${
                      isLead ? 'text-lg sm:text-2xl md:text-3xl' : 'text-base sm:text-xl md:text-2xl'
                    }`}>
                      {fac.title}
                    </h3>

                    <p className={`text-sage-100/90 font-sans leading-relaxed transition-all duration-300 ${
                      isLead ? 'text-xs sm:text-sm line-clamp-3' : 'text-xs line-clamp-2'
                    }`}>
                      {fac.description}
                    </p>

                    <div className="pt-1.5 sm:pt-2 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-amber-400 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all duration-300">
                      <span>View facility preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs text-charcoal-600 font-sans italic">
            * All 10 campus facilities are linked to individual preview data objects for phase 2 expansion.
          </p>
        </div>

      </div>
    </section>
  );
}
