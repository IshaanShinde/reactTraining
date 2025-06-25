


const A4Form = () => {
    return (
        <div className="component">
            <form>
                    
                    <label>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                    />

                    <label>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                    />
                    
                    <label>Role</label>
                    <select
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


