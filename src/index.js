import React from 'react'
import ReactDOM from 'react-dom/client'
import hotel from './hotel.js'
import { open } from './front/ws.js'

function App() {
  // useD(bookD.one, 17)
  // useA(bookD.one)

  return <div className="App"></div>
}

const { bookD } = open(hotel)

// если мы вызываем извне реакта
// в useD с теми же аргументами должны оказываться сущности без отправки запроса
// а useA должен отправлять запрос

// методы с put/rm невозможно использовать в useD, ошибка
// методы с put/rm можно вызвать без useA, door.method()
// при этом подключение к сущностям не происходит
// но если задействованы новые поля, к ним подключаем

// сохраняем сущности из всех get-методов
// при изменении пересчитываем

// подключение определяется наличием полей сущности/get-аргументов в фронтовом сторе

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// запускаем метод
// на первом экшне делаем запрос
// на первом get останавливаемся, если результата нет
// на сервере выполняем метод полностью
// отправляем на фронт массив с результатами всех экшнов
// если не встретилось put/rm, добавляем к sessionId поля всех сущностей из get
// при изменении этих сущностей, отправляем на фронт [{ t: 'get', ... }, { ... }] и выполняем с ними метод
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// bookD.x().then((res) => {
//   console.log(res)
//
//   bookD.x().then((res) => console.log(res))
// })
// bookD.x().then((res) => console.log(res))
// bookD.y().then((res) => console.log(res))

// bookD.upd({ id: 17, team_member: 8 }).then((e) => {
//   console.log('upd', e)
// })
// bookD.one(17).then((e) => {
//   console.log('one', e)
// })

window.p = () => {
  bookD.upd({ team_member: 8 })
}

// upd пока не пришел ответ от предыдущего
// загрузка
// очередь промисов
// два выполнения метода
// отмена ошибки
// первый запрос успешно, второй ошибка
// во время выполнения, после выполнения
// отмена при ошибке в window
// ререндер использующих метод хуков
// пересчёт использующих сущность get-методов

// bookD.x().then((res) => console.log(res))

// bookD.upd({
//   name: 'oki',
//   team_member: null,
//   authors: [],
//   deep: {
//     ea: 'oki',
//     very: {
//       ea: 'doki',
//     },
//   },
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
