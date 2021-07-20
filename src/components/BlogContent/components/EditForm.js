import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";

export const EditForm = ({ setShowEditForm, selectedPost }) => {
  return (
    <div className="editForm">
      <Formik
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
      </Formik>
    </div>
  );
};
