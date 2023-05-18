import {useTranslation} from "react-i18next";

export const Header = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div>
         <h1>{t("header.hello-world")}</h1>

        <br></br>
        <br></br>

        <button onClick={() => i18n.changeLanguage("es")}>Es</button>
        <button onClick={() => i18n.changeLanguage("en")}>En</button>
    </div>
  )
}
