let BASE_URL = ''
let BASE_URL_NAME = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'development'
  BASE_URL_NAME = 'development'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'production'
  BASE_URL_NAME = 'production'
} else {
  BASE_URL = 'text'
  BASE_URL_NAME = 'text'
}
