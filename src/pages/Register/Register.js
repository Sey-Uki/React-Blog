import { Form, Input, InputNumber, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import "antd/dist/antd.css";
import "./Register.css";
import {
  validateAge,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../shared/validatePost";

export const Register = () => {
  const submitLogin = (value, { setSubmitting }) => {
    console.log(value.password);
    if (value.password !== value.confirmPassword) {
      console.log("Error");
    } else {
      setSubmitting(false);
    }
  };

  return (
    <div className="Register">
      <Formik
        initialValues={{
          username: "",
          age: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        onSubmit={submitLogin}
        validate={values => {
            const errors = {};
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Пароль должен совпадать";
              } 
            return errors;
          }}
      >
        {({
         values,
         errors,
         touched,}) => {
          return (
            <Form
              labelCol={{
                span: 9,
              }}
              wrapperCol={{
                span: 7,
              }}
            >
              <Form.Item
                label="Имя"
                name="username"
                validate={validateUsername}
              >
                <Input name="username" />
              </Form.Item>

              <Form.Item
                name="age"
                label="Возраст"
                wrapperCol={{
                  span: 1,
                }}
                validate={validateAge}
              >
                <InputNumber name="age" />
              </Form.Item>

              <Form.Item name="email" label="Email" validate={validateEmail}>
                <Input name="email" />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                validate={validatePassword}
              >
                <Input.Password name="password" />
              </Form.Item>

              <Form.Item label="Повторите пароль" name="confirmPassword">
                <Input.Password
                  name="confirmPassword"
                />
              </Form.Item>
              <SubmitButton>Зарегистрироваться</SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
