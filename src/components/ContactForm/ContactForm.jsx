import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(22, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Неправильний формат номера телефону. Введіть у форматі 123-45-67"
    )
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNumberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label htmlFor={userNameId}>Name</label>
          <Field type="text" name="name" id={userNameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formWrap}>
          <label htmlFor={userNumberId}>Number</label>
          <Field type="tel" name="number" id={userNumberId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
