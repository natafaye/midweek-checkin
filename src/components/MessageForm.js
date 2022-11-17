import React from 'react'
import { Formik, Form, Field } from 'formik'

export default function MessageForm({ onSubmit, userId }) {

    const handleSubmit = (values, { resetForm }) => {
        const messageData = {
            receiverUserId: userId,
            ...values
        }
        onSubmit(messageData)

        resetForm()
    }

    return (
        <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
            <Form>
                <Field as="textarea" name="text" className="form-control" />
                <button className='btn btn-primary mt-3' type="submit">Send</button>
            </Form>
        </Formik>
    )
}
