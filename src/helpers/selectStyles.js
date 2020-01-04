// Styles to override/upgrade default ones on token selector

export default function styles() {
  return {
    option: () => ({
      color: "white",
      fontSize: "15px",
      display: "flex",
      marginBottom: "8px",
      paddingTop: "5px",
      justifyContent: "space-between",
      paddingRight: "17px",
      "&:hover": {
        cursor: "pointer"
      },
      fontFamily: "'Times New Roman', Times, serif"
    }),
    container: provided => ({
      ...provided,
      background: "none !important",
      width: "26%",
      height: "53px"
    }),
    control: (provided, state) => ({
      ...provided,
      height: "53px",
      boxShadow: "none",
      border: "none",
      background: "none !important",

      "&:hover": {
        cursor: "pointer"
      }
    }),
    dropdownIndicator: provided => ({
      background: "none !important",

      ...provided,
      display: "none"
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: "none"
    }),
    menu: provided => ({
      ...provided,
      marginTop: "0",
      marginLeft: "10px",

      zIndex: "10000000",
      background: "none !important",
      fontFamily: "'Times New Roman', Times, serif"
    }),
    menuList: provided => ({
      ...provided,
      padding: "0"
    }),
    valueContainer: provided => ({
      ...provided,
      justifyContent: "center",
      color: "white"
    }),
    singleValue: provided => ({
      ...provided,
      color: "white"
    }),
    placeholder: provided => ({
      ...provided,
      background: "none !important",
      fontFamily: "'Times New Roman', Times, serif",
      color: "white",
      "& span": {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: "15px",
        fontWeight: "550",
        padding: "0 5px"
      }
    })
  };
}
