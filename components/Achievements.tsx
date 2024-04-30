const achievements = [
  {id: 1, name: 'Поучаствовал в полуфинале Yandex Cup'},
  {id: 2, name: 'Принимал участие и выигрывал в большом количестве хакатонов'},
]

const Achievements = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center
         w-auto md:w-[400px] h-[100vh] mt-auto scroll-m-6'
         id='achievements'
    >
      <p className='
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
      '>
        Мои достижения
      </p>
      <div>
        {achievements.map((a) => {
          return <li key={a.id}>{a.name}</li>
        })}
      </div>
      <div>
        <a
          className='text-violet-600 dark:text-violet-400 underline'
          href='#'
        >
          Ссылка на архив с сертификатами хакатонов
        </a>
      </div>
    </div>
  )
}

export default Achievements