import decode from 'jwt-decode'
import request from './request'

export async function signIn (email, password) {
  const { token } = await request('POST', '/authenticate', {
    email,
    password,
  })
  localStorage.set('auth', token)
}

export function signOut () {
  localStorage.removeItem('auth')
}

export function isSignedIn () {
  const token = localStorage.getItem('auth')

  if (!token) {
    return false
  }
  try {
    const { exp: expiration } = decode(token)
    const isExpired = !!expiration && Date.now() > expiration * 1000

    if (isExpired) {
      return false
    }
    return true
  } catch (_) {
    return false
  }
}

export function isIntegrated () {
  const tokenShopify = localStorage.getItem('tokenShopify')
  if (tokenShopify === 'null') {
    return false
  } else {
    return true
  }
}
