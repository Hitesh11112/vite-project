
const Wrapper = ({ children,
    width = "100%",
    height = "100px",
    border = "2px solid black",
    borderRadius = "10px"
}) => {
    return (
        <div style={{
            width,
            height,
            border,
            borderRadius
        }}>
            {children}
        </div>
    );
}


export default Wrapper; 