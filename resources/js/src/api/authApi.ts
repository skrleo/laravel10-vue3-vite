import request from '@/utils/http'

export const login = (data: any) => {
  return request.post('user/login', data || {})
}
