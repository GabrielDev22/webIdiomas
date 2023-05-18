import {useTranslation} from "react-i18next";


export const Descripcion = () => {

    const [t] = useTranslation("description");

    return(
        <div>
            <h2>{t("description.descriptionText")}</h2>
        </div>
    )
}