type Props = {
  text: string
  name: string
  selected: boolean
  correct: boolean
  revealed: boolean
  disabled: boolean
  onSelect: () => void
}

const styles = {
  correct: {
    option: 'border-[#22c55e] bg-[#f0fdf4]',
    dot: 'border-[#22c55e]',
    fill: 'bg-[#22c55e]',
  },
  wrong: {
    option: 'border-[#ef4444] bg-[#fef2f2]',
    dot: 'border-[#ef4444]',
    fill: 'bg-[#ef4444]',
  },
  selected: {
    option: 'border-[#4f46e5] bg-[#f4f4ff]',
    dot: 'border-[#4f46e5]',
    fill: 'bg-[#4f46e5]',
  },
  idle: {
    option: 'border-[#e6e8f2] bg-white hover:border-[#a5b4fc] hover:bg-[#f8f8ff]',
    dot: 'border-[#c7cad9]',
    fill: '',
  },
}

function AnswerOption({ text, name, selected, correct, revealed, disabled, onSelect }: Props) {
  let state = 'idle'
  if (revealed && correct) {
    state = 'correct'
  } else if (revealed && selected) {
    state = 'wrong'
  } else if (selected) {
    state = 'selected'
  }

  const style = styles[state as keyof typeof styles]

  return (
    <label
      className={`flex items-center gap-3 rounded-[10px] border-2 px-4 py-[13px] transition duration-200 ${style.option} ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <input
        className="sr-only"
        type="radio"
        name={name}
        checked={selected}
        disabled={disabled}
        onChange={onSelect}
      />
      <span
        className={`relative h-5 w-5 shrink-0 rounded-full border-2 transition duration-200 ${style.dot}`}
      >
        {style.fill && <span className={`absolute inset-[3px] rounded-full ${style.fill}`} />}
      </span>
      <span className="text-[15px] text-[#2a2f45]">{text}</span>
    </label>
  )
}

export default AnswerOption
