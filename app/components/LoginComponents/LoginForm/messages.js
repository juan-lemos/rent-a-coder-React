/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  email: {
    id: 'app.components.LoginComponents.LoginForm.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.components.LoginComponents.LoginForm.password',
    defaultMessage: 'Contraseña',
  },
  singin: {
    id: 'app.components.LoginComponents.LoginForm.singin',
    defaultMessage: 'Ingresar',
  },
  error: {
    id: 'app.components.LoginComponents.LoginForm.error',
    defaultMessage: 'Error verifique su contraseña o email.',
  },
  signUp: {
    id: 'app.components.LoginComponents.LoginForm.signUp',
    defaultMessage: 'Registrarse',
  },
});
