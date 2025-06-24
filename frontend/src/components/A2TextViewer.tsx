interface A2TextiewerProps {
    value: string
}

const A2Textiewer: React.FC<A2TextiewerProps> = ( { value } ) => {
    return(
            <div className='component fill'>
                <p>{ value || 'Type Something' }</p>
            </div>
    );
};

export default A2Textiewer;