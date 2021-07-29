import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import "./AddPost.css";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { notification } from "antd";
import { validateDescription, validateTitle } from "./validatePost";

export const AddPost = ({ blogArr, setBlogArr }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sendForm = (value, { setSubmitting }) => {
    setTimeout(() => {
      const temp = [...blogArr];

      const newPost = {
        id: temp.length + 1,
        title: value.title,
        description: value.description,
        liked: false,
      };

      temp.push(newPost);

      setBlogArr(temp);
      localStorage.setItem("blogPosts", JSON.stringify(temp));
      setSubmitting(false);
      setIsModalVisible(false);
      openNotificationWithIcon("success");
      value.title = "";
      value.description = "";
    }, 2000);
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Изменения сохранены",
      // description:
      //   '',
    });
  };

  return (
    <div className="AddPost">
      <Button type="primary" onClick={showModal}>
        Добавить пост
      </Button>
      <Modal
        title="Добавить пост"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={sendForm}
        >
          {() => (
            <Form
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 17,
              }}
            >
              <Form.Item label="Название" name="title" validate={validateTitle}>
                <Input name="title" autoComplete="off" />
              </Form.Item>

              <Form.Item
                label="Описание"
                name="description"
                validate={validateDescription}
              >
                <Input.TextArea name="description" rows="6" />
              </Form.Item>

              <SubmitButton ghost="true">Сохранить изменения</SubmitButton>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
