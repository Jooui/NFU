import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from './State';
import {     
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,    
} from '@ionic/react';

import Home from './pages/Home';
import Settings from './pages/settings/Settings';
import Events from './pages/Events';
import Details from './pages/Details.js';
import Comments from './pages/Comments';
import Instalaciones from './pages/Instalaciones'
import Instalacion from './pages/instalacion'
import Create from './pages/create/Create';

import UpdateProfile from './pages/profile/UpdateProfile';
import { home, people, addCircle } from 'ionicons/icons';
import Notifications from './pages/notifications/Notifications';


const Tabs: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/home" component={Home} exact={true} />
          <Route path="/app/settings" component={Settings} exact={true} />
          <Route path="/app/events" component={Events} exact={true} />
          <Route path="/app/create" component={Create} />   
          <Route path = "/app/comments/:id" component = { Comments } />       
          <Route path="/app/event/:id" component={Details} />
          <Route path="/app/create" component={Create} /> 
          <Route path="/app/instalaciones" component={Instalaciones} /> 
          <Route path="/app/notifications" component={Notifications} />   
          <Route path="/app/instalacion/:id" component={Instalacion}/>   
          <Route path="/profile/update" component={UpdateProfile} exact={true} />       
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>

          <IonTabButton tab="events" href="/app/events">
            <IonIcon icon={people} />
            <IonLabel>EVENTS</IonLabel>
          </IonTabButton>

          {
            (state.user)?
              <IonTabButton tab="create" href="/app/create">
                <IonIcon icon={addCircle} />
                <IonLabel>Añadir evento</IonLabel>
              </IonTabButton>
            : <></>
          }

        </IonTabBar>
      </IonTabs>      
    );
};

export default Tabs;