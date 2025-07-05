
const Wrapper = ({ children,
    border = "2px solid black",
    borderRadius = "6px",
    style = {}
}) => {
    return (
        <div style={{
            border,
            borderRadius,
            ...style
        }}>
            {children}
        </div>
    );
}


export default Wrapper; 