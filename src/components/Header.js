import React, { Fragment, useContext } from "react";
import Select, { components } from "react-select";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "../helpers/selectStyles";
import options from "../helpers/selectOptions";
import en from "../images/header/en.png";
import de from "../images/header/de.png";
import GlobalContext from "./globalState/globalContext";

const Option = props => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <img
        className="selector-options-lang"
        src={data.value === "en" ? en : de}
        width="14px"
        height="19.3px"
        alt="flag"
      />
      {data.label}
    </components.Option>
  );
};

const formatLang = lang => (
  <Fragment>
    <img className="ph-flag" src={lang === "en" ? en : de} alt="flag"></img>
    {lang === "en" ? "English" : "Deutsch"}
  </Fragment>
);

export default function Header() {
  const globalContext = useContext(GlobalContext);
  const { onChangeLang, language } = globalContext;

  console.log(language);

  return (
    <header id="header" className="slide-in-top">
      <ul>
        <li>
          <a href="/" draggable="false">
            <span>Home</span>
          </a>
        </li>
        <li>
          <AnchorLink href="#gallery" draggable="false">
            <span>Gallery</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#more-info" draggable="false">
            <span>Contact Me</span>
          </AnchorLink>
        </li>
      </ul>
      <div className="language-select">
        <Select
          styles={styles()}
          options={options}
          components={{ Option }}
          isSearchable={false}
          value={language}
          placeholder={formatLang(language)}
          onChange={e => {
            onChangeLang(e);
          }}
        />
      </div>
    </header>
  );
}
