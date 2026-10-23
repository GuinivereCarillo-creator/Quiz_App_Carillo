type Props = {
  value: number
  max: number
}

function ProgressBar({ value, max }: Props) {
  const percent = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div className="h-2.5 overflow-hidden rounded-[20px] bg-[#eceef6]">
      <div
        className="h-full rounded-[20px] bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-[width] duration-[400ms] ease-out"
        style={{ width: percent + '%' }}
      />
    </div>
  )
}

export default ProgressBar
