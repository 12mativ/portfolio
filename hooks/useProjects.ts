import {create} from 'zustand'
import {v4 as uuidv4} from 'uuid'
import placeholderImage from '../images/1.png'
import airFoodImg from '../images/3.png'
import spotifyCloneImg from '../images/4.png'
import capyforumImg from '../images/5.png'

export interface Project {
  id: string
  name: string
  description: string
  image: {
    src: string
  }
  link: string
}

interface useProjectsReturn {
  projects: Array<Project>
}

const useProjects = create(():useProjectsReturn => ({
  projects: [
    {
      id: uuidv4(),
      name: 'AirFood',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: airFoodImg,
      link: 'https://air-food.vercel.app/'
    },
    {
      id: uuidv4(),
      name: 'Клон Spotify',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: spotifyCloneImg,
      link: 'https://spotify-clone-gamma-six.vercel.app/'
    },
    {
      id: uuidv4(),
      name: 'Капифорум!',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: capyforumImg,
      link: 'https://capyforum.vercel.app/'
    },
    {
      id: uuidv4(),
      name: 'Социальная сеть',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: placeholderImage,
      link: ''
    },
  ],
}))

export default useProjects