import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage } from './UserForm.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';


const UserSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/)
        .required('Required')
});


const UserForm = ({ onSave }) => {

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
                onSave({
                ...values,
                id: nanoid(),
                });
                actions.resetForm();
            }}
        >

            <Form>
                <FormField>
                    Name
                    <Field name="name" />
                    <ErrorMessage name="name" component="span" />
                </FormField>
                <FormField>
                    Tel
                    <Field name="number" />
                    <ErrorMessage name="number" component="span" />
                </FormField>
                <button type="submit">Add Contact</button>
            </Form>
    
        </Formik>
    );
    
}

export default UserForm;