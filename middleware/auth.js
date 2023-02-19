export default function ({ store, redirect, route }) {
  if (!store.getters['auth/token'] && !/login/i.test(route.name) && !/register/i.test(route.name)) {
    return redirect({ name: 'login' })
  } else if (store.getters['auth/token'] && /login/i.test(route.name)) {
    return redirect({ name: 'index' })
  }
}