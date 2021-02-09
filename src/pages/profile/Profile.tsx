import React, { useContext } from "react";
import "./Profile.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import {
  settings,
  share,
  home,
  create,
  gameController,
} from "ionicons/icons";
import Sports from "./Sports";
import { AppContext } from "../../State";

import {
  IonTitle,
  IonText,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { basketball, person } from "ionicons/icons";
import { Link, Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const Profile: React.FC = () => {
  const { state } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{"Profile"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <div
              className="Content__ProfileImage"
              style={{
                backgroundImage: `url('${"https://img2.freepng.es/20180408/tvw/kisspng-user-computer-icons-gravatar-blog-happy-woman-5aca6d03e6c3f5.6041125615232156199452.jpg"}')`,
              }}
            ></div>
            <Sports sportsList={["tennis", "basket", "football", "cs GO"]} />
            <h1>{state.user.name}</h1>
            <div className="Content__Buttons">
              <div>
                <ButtonLink link="/app/create" text="New" icon={gameController} />
                <ButtonLink link="/app/events" text="Matches" icon={basketball} />
              </div>
              <div>
                <ButtonLink link="/app/notifications" text="Invitaciones" icon={share} />
                <ButtonLink link="/app/settings" text="Settings" icon={settings} />
              </div>
              <ButtonLink
                link="/app/profile/update"
                text="Update"
                icon={person}
              />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
