// import { ErrorMessage, Field, Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import React from "react";
import "antd/dist/antd.css";
import "./EditForm.css";
import Modal from "antd/lib/modal/Modal";
import { notification } from "antd";
import { validateDescription, validateTitle } from "./validatePost";

export const EditForm = ({
  setIsModalVisible,
  selectedPost,
  isModalVisible,
  blogArr,
  selectedPostPos,
  setBlogArr,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sendForm = (value, { setSubmitting }) => {
    setTimeout(() => {
      const temp = [...blogArr];

      temp[selectedPostPos].title = value.title;
      temp[selectedPostPos].description = value.description;

      setBlogArr(temp);
      localStorage.setItem("blogPosts", JSON.stringify(temp));
      setSubmitting(false);
      setIsModalVisible(false);
      openNotificationWithIcon("success");
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
    <div className="editForm">
      <Modal
        title="Изменить пост"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            title: blogArr[selectedPostPos].title,
            description: blogArr[selectedPostPos].description,
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
