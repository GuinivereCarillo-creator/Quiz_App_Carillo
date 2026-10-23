import { useState } from 'react'
import type { Question } from './quizData'

type ReviewItem = {
  question: Question
  userAnswer?: string
  correct: boolean
}

type Props = {
  total: number
  correct: number
  incorrect: number
  percentage: number
  items: ReviewItem[]
  onRetake: () => void
  onHome: () => void
}

const primaryButton =
  'rounded-[10px] bg-[#4f46e5] px-[26px] py-[13px] text-[15px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]'

const ghostButton =
  'rounded-[10px] border-2 border-[#4f46e5] bg-transparent px-[22px] py-[11px] text-[15px] font-bold text-[#4f46e5] transition duration-200 hover:bg-[#4f46e5] hover:text-white'

function ResultCard({
  total,
  correct,
  incorrect,
  percentage,
  items,
  onRetake,
  onHome,
}: Props) {
  const [showReview, setShowReview] = useState(false)

  let message = 'Keep going, you will get there.'
  if (percentage >= 90) {
    message = 'Outstanding work!'
  } else if (percentage >= 70) {
    message = 'Great job!'
  } else if (percentage >= 50) {
    message = 'Not bad, keep practicing.'
  }

  return (
    <div className="mx-auto mt-6 max-w-[640px] animate-rise rounded-[22px] bg-white px-[22px] py-9 text-center shadow-[0_24px_60px_rgba(31,35,51,0.12)] sm:mt-10 sm:px-11 sm:py-12">
      <h1 className="m-0 mb-2 text-3xl sm:text-[34px]">Quiz Results</h1>
      <p className="m-0 mb-7 text-base text-[#666c85]">{message}</p>
      <div
        className="relative mx-auto mb-8 flex h-40 w-40 flex-col items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(#6366f1 0deg, #8b5cf6 ${percentage * 3.6}deg, #eceef6 ${percentage * 3.6}deg)`,
        }}
      >
        <span className="absolute inset-3 rounded-full bg-white" />
        <span className="relative text-[38px] font-extrabold text-[#4f46e5]">{percentage}%</span>
        <span className="relative text-xs tracking-[2px] text-[#8b8fa8] uppercase">Score</span>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="flex flex-col gap-1.5 rounded-xl bg-[#f7f8fc] px-2.5 py-[18px]">
          <strong className="text-[22px]">{total}</strong>
          <span className="text-xs text-[#7c819a]">Total Questions</span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-xl bg-[#f7f8fc] px-2.5 py-[18px]">
          <strong className="text-[22px] text-[#15803d]">{correct}</strong>
          <span className="text-xs text-[#7c819a]">Correct Answers</span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-xl bg-[#f7f8fc] px-2.5 py-[18px]">
          <strong className="text-[22px] text-[#b91c1c]">{incorrect}</strong>
          <span className="text-xs text-[#7c819a]">Incorrect Answers</span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-xl bg-[#f7f8fc] px-2.5 py-[18px]">
          <strong className="text-[22px]">
            {correct} / {total}
          </strong>
          <span className="text-xs text-[#7c819a]">Final Score</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button className={primaryButton} onClick={onRetake}>
          Retake Quiz
        </button>
        <button className={ghostButton} onClick={() => setShowReview(!showReview)}>
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>
        <button className={ghostButton} onClick={onHome}>
          Return Home
        </button>
      </div>

      {showReview && (
        <div className="mt-9 animate-rise text-left">
          <h2 className="m-0 mb-4 border-t-2 border-[#eef0f7] pt-6 text-xl">Review Answers</h2>
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <div
                className={`rounded-xl border-l-4 bg-[#f7f8fc] px-[18px] py-4 ${
                  item.correct ? 'border-l-[#22c55e]' : 'border-l-[#ef4444]'
                }`}
                key={item.question.id}
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="text-xs font-bold tracking-[1px] text-[#8b8fa8] uppercase">
                    Question {index + 1}
                  </span>
                  <span
                    className={`ml-auto rounded-[20px] px-3 py-1 text-xs font-bold ${
                      item.correct ? 'bg-[#dcfce7] text-[#15803d]' : 'bg-[#fee2e2] text-[#b91c1c]'
                    }`}
                  >
                    {item.correct ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <h4 className="m-0 mb-2.5 text-[15px] leading-[1.4]">{item.question.question}</h4>
                <p className="mt-1 mb-0 text-sm text-[#666c85]">
                  Your answer:{' '}
                  <strong className={item.correct ? 'text-[#15803d]' : 'text-[#b91c1c]'}>
                    {item.userAnswer ?? 'No answer'}
                  </strong>
                </p>
                {!item.correct && (
                  <p className="mt-1 mb-0 text-sm text-[#666c85]">
                    Correct answer: <strong className="text-[#15803d]">{item.question.answer}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultCard
