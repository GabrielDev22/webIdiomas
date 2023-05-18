import {useTranslation} from "react-i18next";


export const Inicio = () =>{

    const [t] = useTranslation("global");

    return(
        <div>
           <h3>{t("start.startLanguage")}</h3>
        </div>
    )
}
