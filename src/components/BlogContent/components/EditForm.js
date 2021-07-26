// import { ErrorMessage, Field, Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import React from "react";
import "antd/dist/antd.css";
import "./EditForm.css";
import Modal from "antd/lib/modal/Modal";

export const EditForm = ({ setIsModalVisible, selectedPost, isModalVisible }) => {

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="editForm">
      {/* <Formik
        initialValues={{ title: selectedPost.title, description: selectedPost.description }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.description, values.title)
          setTimeout(() => setSubmitting(false), 3000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field type="textarea" name="description" />
            <ErrorMessage name="description" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Сохранить изменения
            </button>
            <button onClick={() => setShowEditForm(false)}>x</button>
          </Form>
        )}
      </Formik> */}
    
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
          render={() => (
            <Form
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
            >
              <Form.Item label="Title" name="title">
                <Input name="title" />
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea name="description" />
              </Form.Item>

              <SubmitButton>Сохранить изменения</SubmitButton>
            </Form>
          )}
        />
      </Modal>
    </div>
  );
};
