import { createApp } from 'vue'
import App from './App.vue'
import '.././style-dark.css'
import translatePlugin from './translatePlugin'

const app = createApp(App)

const ru = {
  app: {
    title: "Работа смены языков во vue 3",
    changeBtn: "Переключить язык",
    text: 'Передача параметров',
    modalTile: 'Заголовок Модального окна',
    modalSubTitle: 'Обращаю внимание !!!!!',
    modalMessage: 'На обращение вашего внимания!',
    btnModal: 'Открыть модальное окно'
  }
}
const en = {
  app: {
    title: "works cange language in vue 3",
    changeBtn: "Change langugage",
    text: 'Passing parameters',
    modalTile: 'Title of the modal window',
    modalSubTitle: 'Paying attention !!!!!',
    modalMessage: 'For your attention!',
    btnModal: 'Open modal window',
  }
}
const fr = {
  app: {
    title: "France works cange language in vue 3",
    changeBtn: "Changenguo langugua",
    text: 'Passiego parameteanto',
    modalTile: 'Titleego of the modaleichen window',
    modalSubTitle: 'Paying attentiono !!!!!',
    modalMessage: 'For your attention!',
    btnModal: 'Open modal window',
  }
}
const ch = {
  app: {
    title: "Vue 3 中的工作語言更改 ",
    changeBtn: "切換語言",
    text: '傳遞參數',
    modalTile: '模態窗口的標題',
    modalSubTitle: '關注！！！！',
    modalMessage: '供您注意！',
    btnModal: '打開模態窗口'
  }
}

app.use(translatePlugin, {ru, en, fr, ch})
app.mount('#app')
