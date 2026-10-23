import ProgressBar from './ProgressBar'

type Props = {
  answered: number
  total: number
  correct: number
}

function QuizHeader({ answered, total, correct }: Props) {
  return (
    <div className="static z-10 mb-6 rounded-[18px] bg-white px-[26px] py-6 shadow-[0_14px_34px_rgba(31,35,51,0.1)] sm:sticky sm:top-4">
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="m-0 mb-1 text-2xl">Quiz Time</h1>
          <p className="m-0 text-sm text-[#666c85]">Madali lang yan</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <span className="rounded-lg bg-[#f4f5fb] px-3 py-2 text-xs font-semibold whitespace-nowrap text-[#666c85]">
            Answered <b className="text-[#1f2333]">{answered}</b> / {total}
          </span>
          <span className="rounded-lg bg-[#ecebff] px-3 py-2 text-xs font-semibold whitespace-nowrap text-[#4f46e5]">
            Score <b>{correct}</b>
          </span>
        </div>
      </div>
      <ProgressBar value={answered} max={total} />
    </div>
  )
}

export default QuizHeader
