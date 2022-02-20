import { axiosInstance } from './api'
import { Health } from '../types/api'

document.getElementById('ping')!.addEventListener('click', () => {
  axiosInstance.get<Health>('/ping').then(({ data }) => {
    const counter = document.getElementById('count')!
    counter!.innerHTML = `${data.counter}`
  })
})

if (module.hot) {
  module.hot.accept()
}
