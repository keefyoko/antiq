import { sendEvent } from './ws.js'
import { normId } from '../utils.js'
import g from '../g.js'

// строим граф
// подписываемся на изменение сущностей

// рекурсий нет
// !(сделать и удалить) может придти id

// отношения родитель-потомок по normId

// сохраняем значение до put
// удаляем его на success бэка
// подставляем при ошибке после revert ивента

// каждый ивент создаёт симулированный мир изменений
// изменения, которые он несёт + предыдущее до него состояние (для отладки, отмены и пр)
// предыдущее состояние может быть из симулированного мира другого ивента

// эти изменения пополняются в начале ивента
// и заполняются до конца и применяются на ответ сервера
// есть очередь ивентов, у них есть загрузка
// ивент имеет полную информацию в момент ответа от сервера
// очередь ивентов очищается

// на put мы смотрим связанные сущности
// в симулированном мире, к которому подключены хуки, их изменяем

// первым делом, проверяем есть ли у сущности id
// если нет, то создаём

// computed массив по флагу(условию)
// сервер смотрит, нужно ли уведомлять
// фронт смотрит, может ли показать изменения без отправки на сервер

export async function put(name, diff, opts) {
  const { eventId } = opts

  let id = diff.id || Math.random()
  const hasNoId = !diff.id

  // идём по diff и меняем фронтовый стор
  // смотрим desc и перезаписываем relations

  const nId = normId(name, diff.id)

  const result = await sendEvent({
    event: {},
    onSuccess() {},
  })

  // если сущность новая id нет, генерируем его на фронте
  // после подставляем полученный с бэка и везде замещаем
}
