


const A4Form = () => {
    return (
        <div className="component">
            <form className="formGroup">
                    
                    <label className="label">First Name</label>
                    <input
                        className="formComponent"
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                    />

                    <label className="label">Last Name</label>
                    <input
                        className="formComponent"
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                    />
                    
                    <label className="label">Role</label>
                    <select
                        className="formComponent"
                        id='role'
                        name='role'
                    >
                        <option value='Owner'>Owner</option>
                        <option value='User'>User</option>
                        <option value='Admin'>Admin</option>

                    </select>

            </form>

            <div className="buttonGroup">
                <button className="button">Submit</button>
            </div>
        </div>
    );
};

export default A4Form;


