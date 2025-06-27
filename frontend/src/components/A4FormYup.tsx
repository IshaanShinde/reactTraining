import * as Yup from 'yup';
import { useFormik } from "formik";

export interface A4FormYupValues {
    firstName: string;
    lastName: string;
    role: string;
}

interface A4FormYupProps {
    onSubmit: (values: A4FormYupValues) => void;
}

const A4FormYup = ( { onSubmit }: A4FormYupProps) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        role: ''
    }

    // const onSubmit = (values: A4FormYupValues) => {
    //     console.log(values)
    // }
    
    const validationSchema = Yup.object({ 
        firstName: Yup.string().required('First Name Required'),
        lastName: Yup.string().required('Last Name Required'),
        role: Yup.string().required('Role Required')
    });

    const formik = useFormik<A4FormYupValues> ({ 
        initialValues,
        onSubmit,
        // validate,
        validationSchema,
        validateOnBlur: true,
        validateOnChange: false
    });

    return (
        <div className="component">
            <form id='A4FormYup' onSubmit={formik.handleSubmit}>

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
                <button className="button" type='submit' form='A4FormYup'>Submit</button>
            </div>
        </div>
    );
};

export default A4FormYup;