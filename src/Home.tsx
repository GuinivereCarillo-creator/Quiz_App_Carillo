type Props = {
  name: string
  onNameChange: (value: string) => void
  onStart: () => void
}

function Home({ onStart }: Props) {
  return (
    <div className="mx-auto mt-6 max-w-[640px] animate-rise rounded-[22px] bg-white px-6 py-10 text-center shadow-[0_24px_60px_rgba(31,35,51,0.12)] sm:mt-[60px] sm:px-11 sm:py-14">
      <span className="mb-[18px] inline-block rounded-[20px] bg-[#ecebff] px-3.5 py-1.5 text-xs font-bold tracking-[2px] text-[#4f46e5] uppercase">
        System Integration and Architecture
      </span>
      <h1 className="m-0 mb-4 text-3xl leading-[1.15] sm:text-[50px]">Quiz App</h1>
      <p className="mx-auto mb-7 max-w-[460px] text-base leading-[1.7] text-[#666c85]">
        Made by Guinivere Carillo
      </p>

      <button
        className="rounded-[10px] bg-[#4f46e5] px-11 py-[15px] text-[17px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]"
        onClick={onStart}
      >
        Start Quiz
      </button>
    </div>
  )
}

export default Home
