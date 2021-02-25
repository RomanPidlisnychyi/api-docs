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
        }`,
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
            Authorization: 'Bearer userToken',
          }`,
        },
      ],
    },
    {
      title: 'users',
      items: [
        {
          method: 'get',
          path: '/products',
          label: 'Products',
          req: '',
        },
        {
          method: 'get',
          path: '/infobyday',
          label: 'Infobyday',
          req: '',
        },
        {
          method: 'get',
          path: '/titles',
          label: 'Titles',
          req: '',
        },
        {
          method: 'get',
          path: '/current',
          label: 'Current',
          req: '',
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
          req: '',
        },
      ],
    },
    {
      title: 'notrecomendedproducts',
      items: [
        {
          method: 'post',
          path: '',
          label: 'GetListNotRecomendedProducts',
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
  ],
};
