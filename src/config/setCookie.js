import Cookie from 'js-cookie'

const setCookie = (cookiesname,value) => {
  Cookie.set(cookiesname,value,{
    expires : 30,
    sameSite:'strict',
    path:'/'
  });
}

export default setCookie
