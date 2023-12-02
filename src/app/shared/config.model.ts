export const CONFIG = {
  api: 'http://localhost:5000/api'
}

export function yourTokenGetterFunction() {
  return localStorage.getItem('TOKEN');
}
