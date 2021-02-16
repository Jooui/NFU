import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../State";
import toDataURL from '../../utils'
import { useHistory } from "react-router-dom";
import { IonLabel, IonInput, IonLoading, IonButton } from '@ionic/react';
import './LocalOptions.css';
import { useTranslation } from "react-i18next";

const LocalOptions: React.FC<{ action?: Function }> = ({ action }) => {
    const history = useHistory()
    const { dispatch } = useContext(AppContext);
    const [email, setEmail] = useState<React.ReactText | undefined>("");
    const [password, setPassword] = useState<React.ReactText | undefined>("");
    const [, setFormErrors] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const formRef = useRef(null);
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let username = email as string
            let user = {
                email: email,
                username: username.split('@')[0],
                image: ''
            }
            toDataURL('https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png').then(dataUrl => {user.image = dataUrl})
            setShowLoading(true);
            setTimeout(() => dispatch({ type: "SET_USER", value: user }), 5000);
        } catch (e) {
            console.error(e);
            setShowLoading(false);
            setFormErrors(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} className="loginOptionsContainer_form">
            <IonLoading isOpen={showLoading} message={"Logging in"} onDidDismiss={() => setShowLoading(false)} />
            <IonInput type="email" required value={email} className="loginOption loginOption--input inputFieldLogin" onInput={(e) => setEmail(e.currentTarget.value)} placeholder="Email.." />
            <IonInput type="password" value={password} className="loginOption loginOption--input inputFieldLogin" required onInput={(e) => setPassword(e.currentTarget.value)} placeholder={t("login.local_options.password")} />
            <IonButton className="loginOption loginOption--submit" type="submit" id="btnLogin" > {t("login.local_options.login")} </IonButton>
            <div className="login-row">
                <IonLabel className="loginOption loginOption--local loginOption--create" onClick={() => history.push("recover")} >{t("login.local_options.forgotten_password")}</IonLabel>
                <IonLabel className="loginOption loginOption--local loginOption--create" id="createBtnLink" onClick={() => history.push("register")} >{t("login.local_options.create_account")}</IonLabel>
            </div>
            <IonLabel className="loginOption loginOption--local" onClick={() => action('Social')} > {t("login.local_options.social_options")}</IonLabel>
        </form>
    )
}
export default LocalOptions;