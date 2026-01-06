import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Text Machine Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
    ],
    correct: 0,
  },
  {
    id: 2,
    question: 'Which tag is used for headings?',
    options: ['<div>', '<p>', '<h1>', '<span>'],
    correct: 2,
  },
  {
    id: 3,
    question: 'HTML files have which extension?',
    options: ['.css', '.js', '.html', '.php'],
    correct: 2,
  },
];

export default function QuizPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const score = answers.reduce((acc, ans, i) => {
        return ans === questions[i].correct ? acc + 1 : acc;
      }, 0);

      navigate('/quiz-result', {
        state: {
          score,
          total: questions.length,
        },
      });
    }
  };

  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-md p-8">
        {/* Progress */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">
            Question {current + 1} of {questions.length}
          </p>
          <div className="h-2 bg-slate-200 rounded-full mt-2">
            <div
              className="h-2 bg-purple-700 rounded-full transition-all"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-slate-900 mb-6">{questions[current].question}</h2>

        {/* Options */}
        <div className="space-y-4">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full text-left px-5 py-4 rounded-lg border transition ${
                answers[current] === index
                  ? 'border-purple-700 bg-purple-50'
                  : 'border-slate-300 hover:border-purple-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={nextQuestion}
            className="px-6 py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800"
          >
            {current === questions.length - 1 ? 'Submit Quiz' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
}
