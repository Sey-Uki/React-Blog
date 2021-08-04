// import { ErrorMessage, Field, Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import React from "react";
import "antd/dist/antd.css";
import "./EditForm.css";
import Modal from "antd/lib/modal/Modal";
import { notification } from "antd";
import {
  validateDescription,
  validateTitle,
} from "../../../shared/validatePost";

export const EditForm = ({
  setIsModalVisible,
  isModalVisible,
  blogArr,
  selectedPostPos,
  setBlogArr,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sendForm = (value, { setSubmitting }) => {
    const temp = [...blogArr];
    temp[selectedPostPos].title = value.title;
    temp[selectedPostPos].description = value.description;
    fetch(
      `https://609012a53847340017020cb2.mockapi.io/MarketCategory/posts/${temp[selectedPostPos].id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(temp[selectedPostPos]),
      }
    );

    setBlogArr(temp);
    setSubmitting(false);
    setIsModalVisible(false);
    openNotificationWithIcon("success");
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
