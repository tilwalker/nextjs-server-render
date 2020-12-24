const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  page: 'index',
  pattern: '/',
}, {
  page: 'about',
  pattern: '/about'
}, {
  page: 'auth',
  pattern: '/auth',
}, {
  page: 'auth',
  pattern: '/auth/login',
}, {
  page: 'auth',
  pattern: '/auth/register',
}, {
  page: 'auth',
  pattern: '/auth/forgot-password',
}]

APP_ROUTES.forEach(route => routes.add(route))
