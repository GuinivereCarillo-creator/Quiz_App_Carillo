import { useEffect, useRef } from 'react'
import AnswerOption from './AnswerOption'
import type { Question } from './quizData'

type Props = {
  question: Question
  index: number
  unlocked: boolean
  selected?: string
  onSelect: (choice: string) => void
}

function QuestionCard({ question, index, unlocked, selected, onSelect }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  const wasUnlocked = useRef(unlocked)
  const revealed = selected !== undefined
  const isRight = selected === question.answer

  useEffect(() => {
    if (unlocked && !wasUnlocked.current) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    wasUnlocked.current = unlocked
  }, [unlocked])

  return (
    <section
      ref={cardRef}
      className={`animate-rise rounded-2xl border-2 bg-white px-6 py-[22px] transition duration-[250ms] ${
        unlocked
          ? 'border-transparent shadow-[0_8px_22px_rgba(31,35,51,0.08)] hover:border-[#dfe2ff]'
          : 'border-transparent opacity-50 grayscale-[0.6]'
      }`}
    >
      <header className="mb-3 flex items-center gap-2.5">
        <span className="text-xs font-bold tracking-[1px] text-[#8b8fa8] uppercase">
          Question {index + 1}
        </span>
        {!unlocked && (
          <span className="ml-auto rounded-[20px] bg-[#f1f2f7] px-2.5 py-1 text-[11px] font-bold text-[#a2a6ba]">
            Locked
          </span>
        )}
        {revealed && (
          <span
            className={`ml-auto rounded-[20px] px-3 py-1 text-xs font-bold ${
              isRight ? 'bg-[#dcfce7] text-[#15803d]' : 'bg-[#fee2e2] text-[#b91c1c]'
            }`}
          >
            {isRight ? 'Correct' : 'Incorrect'}
          </span>
        )}
      </header>
      <h3 className="m-0 mb-4 text-lg leading-[1.4]">{question.question}</h3>
      <div className="flex flex-col gap-2.5">
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            text={choice}
            name={'q' + question.id}
            selected={selected === choice}
            correct={choice === question.answer}
            revealed={revealed}
            disabled={!unlocked || revealed}
            onSelect={() => onSelect(choice)}
          />
        ))}
      </div>
      {revealed && !isRight && (
        <p className="mt-3.5 mb-0 text-sm font-semibold text-[#b91c1c]">
          The correct answer is {question.answer}.
        </p>
      )}
    </section>
  )
}

export default QuestionCard
