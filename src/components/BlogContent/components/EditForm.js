// import { ErrorMessage, Field, Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import React from "react";
import "antd/dist/antd.css";
import "./EditForm.css";
import Modal from "antd/lib/modal/Modal";

export const EditForm = ({
  setIsModalVisible,
  selectedPost,
  isModalVisible,
}) => {
  function validateTitle(value) {
    let error;
    var pattern = new RegExp(/^\d/);
    if (!value) {
      error = "Поле не должно быть пустым!";
    } else if (value.length < 3) {
      error = "Название поста слишком короткое!";
    }
    if (pattern.test(value)) {
      error = "Текст не может начинаться с цифры";
    }
    return error;
  }

  function validateDescription(value) {
    let error;
    if (!value) {
      error = "Поле не должно быть пустым!";
    } else if (value.length < 150) {
      error = "Текст должен содержать более 150 символов!";
    }
    return error;
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="editForm">
      <Modal
        title="Изменить пост"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={{
            title: selectedPost.title,
            description: selectedPost.description,
          }}
          validateOnChange={validateTitle}
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
                <Input name="title" />
              </Form.Item>

              <Form.Item
                label="Описание"
                name="description"
                validate={validateDescription}
              >
                <Input.TextArea name="description" rows="6" />
              </Form.Item>

              <SubmitButton>Сохранить изменения</SubmitButton>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
