const mentors = [
  {
    id: 1,
    name: "Shoo Thar Mein",
    role: "Senior UX Designer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    students: 4200,
    rating: 4.8,
    skills: ["UX Design", "Figma", "Product"],
  },
  {
    id: 2,
    name: "Cristian Doru Barin",
    role: "Photoshop Instructor",
    company: "Adobe",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    students: 3100,
    rating: 4.7,
    skills: ["Photoshop", "Branding", "UI"],
  },
  {
    id: 3,
    name: "Tanzeel Ur Rehman",
    role: "SEO Expert",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    students: 2800,
    rating: 4.9,
    skills: ["SEO", "Marketing", "Growth"],
  },
];

export default function Mentors() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Meet our mentors
            </h2>
            <p className="mt-2 text-slate-500">
              Learn directly from experienced industry professionals
            </p>
          </div>

          <button className="px-5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-100 transition">
            Explore mentors
          </button>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-mentor-marquee hover:[animation-play-state:paused]">
            {/* Loop 1 */}
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}

            {/* Loop 2 (duplicate) */}
            {mentors.map((mentor) => (
              <MentorCard
                key={`${mentor.id}-duplicate`}
                mentor={mentor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorCard({ mentor }: { mentor: any }) {
  return (
    <div className="w-[300px] shrink-0 bg-slate-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition">
      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full rounded-full object-cover"
        />

        {/* Rating */}
        <div className="absolute -bottom-2 right-1 bg-white rounded-full px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          ⭐ {mentor.rating}
        </div>
      </div>

      {/* Info */}
      <h3 className="mt-6 text-lg font-bold text-slate-900">
        {mentor.name}
      </h3>
      <p className="text-sm text-slate-500">
        {mentor.role} · {mentor.company}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {mentor.skills.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Students */}
      <div className="mt-5 text-xs text-slate-500">
        {mentor.students.toLocaleString()} students taught
      </div>
    </div>
  );
}
