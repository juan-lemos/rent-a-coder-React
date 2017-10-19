/*
 * RegisterForm Messages
 *
 * This contains all the text for the RegisterForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'app.components.RegisterComponents.Form.name',
    defaultMessage: 'Nombre',
  },
  userName: {
    id: 'app.components.RegisterComponents.Form.userName',
    defaultMessage: 'Nombre de usuario',
  },
  password: {
    id: 'app.components.RegisterComponents.Form.password',
    defaultMessage: 'Contraseña',
  },
  country: {
    id: 'app.components.RegisterComponents.Form.country',
    defaultMessage: 'País',
  },
  city: {
    id: 'app.components.RegisterComponents.Form.city',
    defaultMessage: 'Ciudad',
  },
  email: {
    id: 'app.components.RegisterComponents.Form.email',
    defaultMessage: 'E-mail',
  },
  tel: {
    id: 'app.components.RegisterComponents.Form.tel',
    defaultMessage: 'Tel.',
  },
  web: {
    id: 'app.components.RegisterComponents.Form.web',
    defaultMessage: 'Web',
  },

  singin: {
    id: 'app.components.LoginForm.singin',
    defaultMessage: 'Ingresar',
  },
  error: {
    id: 'app.components.LoginForm.error',
    defaultMessage: 'Error verifique su contraseña o email.',
  },
});
