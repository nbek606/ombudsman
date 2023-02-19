export default function ({ store, redirec, route }) {
  if (route.name === null) {
    return redirect ({ name: 'index'})
  }
}