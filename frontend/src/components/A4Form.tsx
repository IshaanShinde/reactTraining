import { useFormik } from "formik";

interface A4FormValues {
    firstName: string;
    lastName: string;
    role: string;
}

const A4Form = () => {

    const formik = useFormik<A4FormValues> ({ 
        initialValues: {
            firstName: '',
            lastName: '',
            role: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <div className="component">
            <form id='A4Form' onSubmit={formik.handleSubmit}>

                    <label>First Name</label>
                    <input type='text' id='firstName' name='firstName' placeholder='First Name' 
                    onChange={formik.handleChange} 
                    value={formik.values.firstName}/>

                    <label>Last Name</label>
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name' 
                    onChange={formik.handleChange} 
                    value={formik.values.lastName}/>
                    
                    <label>Role</label>
                    <select id='role' name='role' 
                    onChange={formik.handleChange} 
                    value={formik.values.role}>
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