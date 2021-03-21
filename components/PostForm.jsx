import { Formik, Form, Field } from "formik"

const PostForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="title">Title</label>
          <br />
          <Field name="title" id="title" />
          <br />

          <label htmlFor="content">Content</label>
          <br />
          <Field name="content" id="content" as="textarea" />
          <br />

          <button disabled={isSubmitting}>Save changes</button>
        </Form>
      )}
    </Formik>
  )
}

export default PostForm
