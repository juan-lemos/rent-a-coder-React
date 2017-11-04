/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  email: {
    id: 'app.components.LoginForm.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.components.LoginForm.password',
    defaultMessage: 'Contraseña',
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
