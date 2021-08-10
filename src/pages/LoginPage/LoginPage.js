import { Checkbox, Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import "antd/dist/antd.css";

export const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.username);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const submitLogin = (value, { setSubmitting }) => {
    console.log(value.username);

    setSubmitting(false);
  };
  return (
    <div className="LoginPage">
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
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Имя" name="username">
            <Input name="usename" />
          </Form.Item>

          <Form.Item label="Пароль" name="password">
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

          <SubmitButton>Отправить</SubmitButton>
        </Form>
         )}
      </Formik>
    </div>
  );
};
