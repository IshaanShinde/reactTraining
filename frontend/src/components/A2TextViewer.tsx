interface A2TextiewerProps {
    value: string
}

const A2Textiewer: React.FC<A2TextiewerProps> = ( { value } ) => {
    return(
            <div className='component fill'>
                <p>{ value || 'Your text will appear here as you type.' }</p>
            </div>
    );
};

export default A2Textiewer;