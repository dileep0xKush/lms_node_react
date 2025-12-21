const reviews = [
  {
    id: 1,
    name: "Tanzeel Rehman",
    role: "Backend Developer",
    company: "Tech Solutions",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    message:
      "Very practical learning experience. The hands-on projects made a huge difference in my confidence.",
  },
  {
    id: 2,
    name: "Andrew Williams",
    role: "Frontend Engineer",
    company: "Startup Inc.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "The mentorship and projects helped me transition into a real-world engineering role.",
  },
  {
    id: 3,
    name: "Cristina Doru",
    role: "UX Designer",
    company: "Design Studio",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Clean content, great structure, and very helpful instructors. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#faf6ef] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            What our students <br /> are saying
          </h2>
          <p className="mt-4 text-slate-600">
            Real feedback from learners who upgraded their careers with us.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-review-marquee hover:[animation-play-state:paused]">
            {/* Loop 1 */}
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

            {/* Loop 2 (duplicate for infinite scroll) */}
            {reviews.map((review) => (
              <ReviewCard key={`${review.id}-duplicate`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-[340px] shrink-0 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
      {/* Quote */}
      <div className="text-4xl text-purple-200 mb-4">“</div>

      {/* Message */}
      <p className="text-slate-600 leading-relaxed mb-6">{review.message}</p>

      {/* Rating */}
      <div className="flex gap-1 text-yellow-400 mb-6">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-slate-900">{review.name}</h4>
          <p className="text-sm text-slate-500">
            {review.role} · {review.company}
          </p>
        </div>
      </div>
    </div>
  );
}
