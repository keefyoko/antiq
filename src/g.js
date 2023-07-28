export const openingPromiseResolver = {
  exec: () => {},
}

// normId нужен для массивов? да, потому что с сервера они приходят в нормализованном состоянии []
// в каком виде нужен граф?
const g = {
  orm: {}, // name: () => ...pathToChild[]
  desc: {}, // { name: desc },
  door: {}, // name: door
  methods: {},
  currentEvent: {
    id: null,
    doorName: '',
    method: '',
    args: [],
    results: [],
    prevValues: [],
    count: -1,
  },

  // front
  values: {}, // normId: item
  showedValues: {},
  openingPromise: new Promise((r) => {
    openingPromiseResolver.exec = r
  }),
  opened: false,
  listner: {},
  promises: {},
  events: {}, // door: method: args: promise/result
  loaders: {}, // eventId | methodId: bool

  // back
  queries: {
    createTable: [],
  },
}

export default g
