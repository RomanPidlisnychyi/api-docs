export default {
  apiName: 'Health',
  endpoints: [
    {
      title: 'auth',
      items: [
        {
          method: 'post',
          path: '/register',
          label: 'Register',
          req: `{
          name: String,
          email: String,
          password: String,
          params:{age: Number...}
        } params - not required fild`,
        },
        {
          method: 'put',
          path: '/login',
          label: 'Login',
          req: `{
          email: String,
          password: String,
        }`,
        },
        {
          method: 'patch',
          path: '/logout',
          label: 'Logout',
          req: `headers: {
            Authorization: 'Bearer accessToken',
          }`,
        },
      ],
    },
    {
      title: 'users',
      items: [
        {
          method: 'get',
          path: '/infobyday',
          label: 'Infobyday',
          req: '',
        },
        {
          method: 'get',
          path: '/current',
          label: 'Current',
          req: `headers: {
            Authorization: 'Bearer accessToken',
          }`,
        },
        {
          method: 'get',
          path: '/refresh',
          label: 'UpdateRefreshToken',
          req: `headers: {
            Authorization: 'Bearer refreshToken',
          }`,
        },
        {
          method: 'patch',
          path: '/params',
          label: 'Params',
          req: `{
          height: Number,
          age: Number,
          currentWeight: Number,
          desiredWeight: Number,
          bloodGroup: Number,
        }`,
        },
      ],
    },
    {
      title: 'products',
      items: [
        {
          method: 'get',
          path: '/?сыр',
          label: 'TitlesByQuery',
          req: 'Поиск продуктов по квери строке',
        },
        {
          method: 'get',
          path: '/titles',
          label: 'AllTitles',
          req:
            'Квери параметр не обьязателен по умолчанию ?lg=ru еще можно ?lg=ua',
        },
      ],
    },
    {
      title: 'rations',
      items: [
        {
          method: 'post',
          path: '',
          label: 'Update',
          req: `{
          date: String,
          productTitle: String,
          weight: Number,
        }`,
        },
        {
          method: 'delete',
          path: '/:id',
          label: 'Delete',
          req: `{
            date: String,
          }`,
        },
      ],
    },
    {
      title: 'notrecomendedproducts',
      items: [
        {
          method: 'post',
          path: '',
          label: 'GetListNotRecomendedProductsAndCalories',
          req: `{
          height: Number,
          age: Number,
          currentWeight: Number,
          desiredWeight: Number,
          bloodGroup: Number,
        }`,
        },
        {
          method: 'get',
          path: '/:category/:bloodGroup',
          label: 'GetListNotRecomendedProductsByCategory',
          req: 'exaple /notrecomendedproducts/зерновые/4',
        },
      ],
    },
  ],
};
