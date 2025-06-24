interface A2InputBoxProps {
    value: string,
    onChange: (text: string) => void;
}

const A2InputBox: React.FC<A2InputBoxProps> = ( { value, onChange } ) => {
    return(
            <input
                className='component'
                type='text'
                value={value}
                placeholder='Type Something'
                onChange={ (e) => onChange(e.target.value) }
            />
    );
};

export default A2InputBox;