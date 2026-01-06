export default function LessonContent() {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Title */}
      <h1>What is HTML?</h1>

      {/* Highlighted Question */}
      <div className="not-prose my-6 rounded-xl border-l-4 border-purple-600 bg-purple-50 p-5">
        <p className="font-semibold text-purple-800">❓ What does HTML stand for?</p>
        <p className="mt-2 text-slate-700">
          HTML stands for <strong>Hyper Text Markup Language</strong>.
        </p>
      </div>

      <p>
        HTML is the standard markup language for creating web pages. It describes the structure of a
        webpage using elements and tags.
      </p>

      {/* Section */}
      <h2>Why Learn HTML?</h2>

      {/* Important Points */}
      <div className="not-prose my-6 rounded-xl bg-yellow-50 border border-yellow-200 p-5">
        <p className="font-semibold text-yellow-800 mb-2">⭐ Why HTML is important</p>
        <ul className="list-disc ml-5 text-slate-700 space-y-1">
          <li>HTML is the foundation of all websites</li>
          <li>It works together with CSS and JavaScript</li>
          <li>It is easy to learn and beginner-friendly</li>
        </ul>
      </div>

      {/* Example */}
      <h2>Basic HTML Example</h2>

      <pre>
        <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}</code>
      </pre>

      {/* Inline Explanation */}
      <div className="not-prose my-6 rounded-xl bg-slate-100 p-5">
        <p className="font-semibold text-slate-800 mb-2">💡 Explanation</p>
        <p className="text-slate-700">
          The <code>&lt;h1&gt;</code> tag defines a heading, and the <code>&lt;p&gt;</code> tag
          defines a paragraph.
        </p>
      </div>

      {/* Quote */}
      <blockquote>HTML is the skeleton of every website.</blockquote>

      {/* Summary */}
      <div className="not-prose my-8 rounded-xl bg-green-50 border border-green-200 p-5">
        <p className="font-semibold text-green-800 mb-2">✅ Key takeaway</p>
        <p className="text-slate-700">
          HTML provides the basic structure of a webpage and is the first technology you should
          learn in web development.
        </p>
      </div>
    </article>
  );
}
