import { Checkbox, Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import "antd/dist/antd.css";
import "./Login.css";
import { validatePassword, validateUsername } from "../../shared/validatePost";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/userSlice";

export const Login = () => {
  const dispatch = useDispatch();

  const submitLogin = (value, { setSubmitting }) => {
    console.log(value);
    setSubmitting(false);
    dispatch(logIn({ keepLoggedIn: value.remember, userName: value.username }));
  };
  return (
    <div className="Login">
      <h1>Пожалуйста, авторизуйтесь</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          remember: true,
        }}
        onSubmit={submitLogin}
      >
        {() => (
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
          >
            <Form.Item label="Имя" name="username" validate={validateUsername}>
              <Input name="username" />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              validate={validatePassword}
            >
              <Input.Password name="password" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 0,
                span: 0,
              }}
            >
              <Checkbox name="remember">Запомнить меня</Checkbox>
            </Form.Item>

            <SubmitButton>Войти</SubmitButton>
            {/* <div className="register">
              Еще не зарегистрированы?{" "}
              <Link exact to="/register">
                Зарегистрироваться
              </Link>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
