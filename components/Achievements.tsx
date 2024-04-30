const achievements = [
  {id: 1, name: '1 достижение'},
  {id: 2, name: '2 достижение'},
]

const Achievements = () => {
  return (
    <div
      className='h-[100vh] flex flex-col items-center justify-center w-auto md:w-[400px] mt-auto scroll-m-6'
      id='achievements'
    >
      <p
        className='
        text-violet-600
        dark:text-violet-400
        text-xl
        font-medium
        border-2
        border-transparent
        border-b-violet-600
        dark:border-b-violet-400
        pb-6
        mb-6
      '
      >
        Мои достижения
      </p>
      <div>
        {achievements.map((a) => {
          return <li key={a.id}>{a.name}</li>
        })}
      </div>
    </div>
  )
}

export default Achievements
