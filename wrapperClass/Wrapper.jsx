

const Wrapper = ({ children,
    display = "flex",
    justifyContent = "flex-start",
    width = "100%",
    height = "auto",
    backgroundColor = "#fff",
    color = "#000",
    padding = "10px",
    margin = "10px",
    border = "2px solid black",
    borderRadius = "8px",
    style = {}
}) => {
    return (
        <div style={{
            display,
            justifyContent,
            width,
            height,
            backgroundColor,
            color,
            padding,
            margin,
            border,
            borderRadius,
            boxSizing: "border-box",
            ...style,
        }}>

            <h1>{children}</h1>
        </div>
    );
}


export default Wrapper; 