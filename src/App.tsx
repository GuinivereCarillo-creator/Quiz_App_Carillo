import { useState } from 'react'
import Home from './Home'
import QuizHeader from './QuizHeader'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import { questions } from './quizData'

const primaryButton =
  'bg-[#4f46e5] text-white rounded-[10px] px-[26px] py-[13px] text-[15px] font-bold transition duration-200 hover:enabled:bg-[#4338ca] hover:enabled:-translate-y-0.5 hover:enabled:shadow-[0_10px_20px_rgba(79,70,229,0.3)] disabled:bg-[#c3c6d6] disabled:cursor-not-allowed'

function App() {
  const [screen, setScreen] = useState('home')
  const [name, setName] = useState('')
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const total = questions.length
  const answered = Object.keys(answers).length
  const correct = questions.filter((q) => answers[q.id] === q.answer).length
  const incorrect = total - correct
  const percentage = Math.round((correct / total) * 100)

  const reviewItems = questions.map((question) => ({
    question,
    userAnswer: answers[question.id],
    correct: answers[question.id] === question.answer,
  }))

  const isUnlocked = (index: number) =>
    questions.slice(0, index).every((q) => answers[q.id] !== undefined)

  const selectAnswer = (id: number, choice: string) => {
    setAnswers((prev) => ({ ...prev, [id]: choice }))
  }

  const startQuiz = () => {
    setAnswers({})
    setScreen('quiz')
  }

  const renderScreen = () => {
    switch (screen) {
      case 'quiz':
        return (
          <div className="mx-auto max-w-[760px]">
            <QuizHeader answered={answered} total={total} correct={correct} />
            <div className="flex flex-col gap-[18px]">
              {questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  unlocked={isUnlocked(index)}
                  selected={answers[question.id]}
                  onSelect={(choice) => selectAnswer(question.id, choice)}
                />
              ))}
            </div>
            <div className="mt-7 rounded-2xl bg-white p-[26px] text-center shadow-[0_8px_22px_rgba(31,35,51,0.08)]">
              <p className="m-0 mb-4 text-[#666c85]">
                {answered === total
                  ? 'Done answering.'
                  : 'You must answer all the questions first.'}
              </p>
              <button
                className={primaryButton}
                disabled={answered < total}
                onClick={() => setScreen('result')}
              >
                Finish Quiz
              </button>
            </div>
          </div>
        )
      case 'result':
        return (
          <ResultCard
            total={total}
            correct={correct}
            incorrect={incorrect}
            percentage={percentage}
            items={reviewItems}
            onRetake={startQuiz}
            onHome={() => setScreen('home')}
          />
        )
      default:
        return <Home name={name} onNameChange={setName} onStart={startQuiz} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#cf42eb] from-10% to-[#ec4b66] px-3.5 pt-5 pb-[60px] sm:px-5 sm:pt-10 sm:pb-20">
      {renderScreen()}
    </div>
  )
}

export default App
