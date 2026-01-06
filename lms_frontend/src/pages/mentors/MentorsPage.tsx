import { Link } from 'react-router-dom';

const mentors = [
  {
    id: 1,
    name: 'John Anderson',
    role: 'Senior Frontend Engineer',
    company: 'Google',
    students: '12,400',
    courses: 8,
    rating: 4.8,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sophia Williams',
    role: 'Data Scientist',
    company: 'Microsoft',
    students: '9,800',
    courses: 6,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Daniel Lee',
    role: 'Backend Architect',
    company: 'Amazon',
    students: '7,200',
    courses: 5,
    rating: 4.7,
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    id: 4,
    name: 'Emily Carter',
    role: 'UI/UX Designer',
    company: 'Adobe',
    students: '10,100',
    courses: 7,
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

export default function MentorsPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900">Learn from industry experts</h1>
          <p className="mt-4 text-slate-600">
            Our mentors are professionals from top tech companies, guiding thousands of learners
            worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
              <option>All domains</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Data Science</option>
              <option>UI/UX</option>
            </select>

            <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
              <option>Sort by</option>
              <option>Highest rating</option>
              <option>Most students</option>
              <option>Most courses</option>
            </select>
          </div>

          <input
            placeholder="Search mentor..."
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm w-full md:w-64"
          />
        </div>

        {/* Mentor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img src={mentor.image} alt={mentor.name} className="h-56 w-full object-cover" />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{mentor.name}</h3>

                <p className="text-sm text-slate-500">
                  {mentor.role} · {mentor.company}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-xs text-slate-600 pt-2">
                  <span>👨‍🎓 {mentor.students}</span>
                  <span>📚 {mentor.courses} courses</span>
                  <span>⭐ {mentor.rating}</span>
                </div>

                {/* Action */}
                <Link
                  to={`/mentors/${mentor.id}`}
                  className="block mt-4 text-center px-4 py-2 rounded-lg bg-purple-700 text-white text-sm font-medium hover:bg-purple-800"
                >
                  View profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900">Want to become a mentor?</h3>
          <p className="text-slate-600 mt-2">
            Share your knowledge and earn by teaching learners worldwide.
          </p>

          <Link
            to="/teach"
            className="inline-block mt-6 px-8 py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800"
          >
            Become a mentor
          </Link>
        </div>
      </div>
    </section>
  );
}
