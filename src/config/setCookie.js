import Cookie from 'js-cookie'

const setCookie = (cookiesname,jwt) => {
  Cookie.set(cookiesname,jwt,{
    expires : 30,
    sameSite:'strict',
    path:'/'
  });
}

export default setCookie
