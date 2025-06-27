import { useFormik } from "formik";

export interface A4FormValues {
    firstName: string;
    lastName: string;
    role: string;
}

interface A4FormErrors {
    firstName?: string;
    lastName?: string;
    role?: string;
}

interface A4FormProps { 
    onSubmit: (values: A4FormValues) => void;
}

const A4Form = ( { onSubmit }: A4FormProps ) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        role: ''
    }
    // const onSubmit = (values: A4FormValues) => {
    //     console.log(values)
    // }
    const validate = (values: A4FormValues) => {
        let errors: A4FormErrors = {}

        if (!values.firstName) errors.firstName = 'First Name Required';
        if (!values.lastName) errors.lastName = 'Last Name Required';
        if (!values.role) errors.role = 'Role Required';

        return errors
    }

    const formik = useFormik<A4FormValues> ({ 
        initialValues,
        onSubmit,
        validate,
        validateOnBlur: true,
        validateOnChange: false
    });

    return (
        <div className="component">
            <form id='A4Form' onSubmit={formik.handleSubmit}>

                    <label>First Name
                    { formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null }</label>
                    <input type='text' id='firstName' name='firstName' placeholder='First Name' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}/>

                    <label>Last Name{ formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null }</label>
                    
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}/>
                    
                    <label>Role
                    { formik.touched.role && formik.errors.role ? <div className="error">{formik.errors.role}</div> : null }</label>
                    <select id='role' name='role'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.role}>
                        <option value=''>Select</option>
                        <option value='Owner'>Owner</option>
                        <option value='User'>User</option>
                        <option value='Admin'>Admin</option>
                    </select>

            </form>

            <div className="buttonGroup">
                <button className="button" type='submit' form='A4Form'>Submit</button>
            </div>
        </div>
    );
};

export default A4Form;