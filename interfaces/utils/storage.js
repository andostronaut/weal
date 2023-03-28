const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const setLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const getSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

const setSessionStorage = (key, val) => {
  sessionStorage.setItem(key, JSON.stringify(val))
}

module.exports = { getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage }
