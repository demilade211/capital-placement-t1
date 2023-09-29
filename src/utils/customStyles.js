export const selectStyle = {
    control: (base) => ({
        ...base,
        height: "56px",
        borderRadius: "5px",
        border: "1px solid #000",
        background: "none", 
        '&:hover': {
            border: "1px solid #000",
        },
        boxShadow: 'none',
        outline: "none",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "#979797",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "#000",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#000",
    }),
};