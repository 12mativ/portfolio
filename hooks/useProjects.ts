import {create} from 'zustand'
import {v4 as uuidv4} from 'uuid'
import placeholderImage from '../images/1.png'

export interface Project {
  id: uuidv4
  name: string
  description: string
  image: string
}

interface useProjectsReturn {
  projects: Array<Project>
}

const useProjects = create(():useProjectsReturn => ({
  projects: [
    {
      id: uuidv4(),
      name: 'Социальная сеть',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: placeholderImage
    },

    {
      id: uuidv4(),
      name: 'Социальная сеть',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: placeholderImage
    },

    {
      id: uuidv4(),
      name: 'Социальная сеть',
      description:
        'Социальная сеть выполнена с помощью фреймворка React. Для работы с данными был выбран Redux, Redux-toolkit.\n' +
        'Для обмена сообщениями используется технология websocket.',
      image: placeholderImage
    },
  ],
}))

export default useProjects