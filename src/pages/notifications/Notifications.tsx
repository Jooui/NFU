import React, { useContext } from "react";
import "./Notifications.css";
import { useTranslation } from "react-i18next";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonItemSliding,
  IonIcon,
  IonItemOption,
  IonItemOptions,
  IonList,
} from "@ionic/react";

import Header from "../../components/header/HeaderComponent";
import { checkmark, close } from "ionicons/icons";
import { AppContext } from "../../State";
import EventsPreview from "../../components/Event/EventsPreview";

const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);

  return (
    <IonPage>
      <Header page={t("pages.notifications")} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList className="eventsList">
          {Object.values(state.events).map((event, index) => (
            <IonItemSliding
              key={"item" + index}
              className="fit  ion-no-padding  primary--bg"
            >
              <IonItem className="ion-no-padding  primary--bg">
                <EventsPreview key={"event_" + index} event={event as any} />
              </IonItem>
              <IonItemOptions
                className="ion-no-padding  primary--bg"
                side="end"
              >
                <IonItemOption color="primary" onClick={() => alert("Accept")}>
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={checkmark}
                  />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions className="danger--bg" side="start">
                <IonItemOption color="danger" onClick={() => alert("Deny")}>
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={close}
                  />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
