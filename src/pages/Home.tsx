import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForwardOutline, link, lockClosedOutline, lockOpenOutline, logIn, mailOutline, personAdd, refreshCircle } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
      <IonGrid class="ion-padding" style={{maxWidth: '375px'}}>
            <IonRow>
                <IonCol>
                    <IonLabel>Email Address</IonLabel>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>

                    <IonItem className="loginItem" lines="none">
                        <IonInput type="email"
                        placeholder="Email" 
                        onIonChange={e => setEmail(e.detail.value!)}
                        value={email} className="loginInputBoxWithIcon">
                        <IonIcon className="inputIcon" icon={mailOutline} slot="start" size="large" color="medium"></IonIcon>
                        </IonInput>
                    </IonItem>

                </IonCol>
            </IonRow>
            {!validateEmail(email) && email.length > 0 && 
                <IonRow>
                    <IonCol>
                        <IonLabel color="danger"><b>Invalid email format</b></IonLabel>
                    </IonCol>
                </IonRow>
            }
            <IonRow>
                <IonCol>
                    <IonLabel>Password</IonLabel>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem className="loginItem" lines="none">
                        <IonInput type="password" 
                        placeholder="Password" 
                        onIonChange={e => setPassword(e.detail.value!)}
                        value={password} className="loginInputBoxWithIcon">
                        <IonIcon className="inputIcon" 
                        icon={password.length ? lockOpenOutline: lockClosedOutline} 
                        slot="start" size="large" color="medium"></IonIcon>
                        </IonInput> 
                    </IonItem>
                    <div onClick={() => { console.log('forgotPassword here...')}} className="ion-text-right" style={{paddingTop:'10px'}}>
                        <IonLabel><b>Forgot password?</b></IonLabel>
                    </div>
                </IonCol>
            </IonRow>
            {password.length > 0 && password.length < 6 && 
                <IonRow>
                    <IonCol>
                        <IonLabel color="danger"><b>Password too short</b></IonLabel>
                    </IonCol>
                </IonRow>
            }
                <IonRow>
                    <IonCol>
                        <IonButton expand="block" color="primary"
                        disabled={!validateEmail(email) || password.length < 6}
                        onClick={() => {console.log('signin with email')}}>
                            <IonIcon icon={arrowForwardOutline} size="large" />&nbsp;&nbsp;
                            <b>Sign in with email</b>
                        </IonButton>
                        <div onClick={() => {console.log('toggle signup mode')}} className="ion-text-center" style={{paddingTop:'10px'}}>
                            <IonLabel>Don't have an account? <b>Sign Up</b></IonLabel>
                        </div>
                    </IonCol>
                </IonRow>
            <IonRow>
                <IonCol>
                    <div className="ion-text-center" style={{marginBottom: '10px'}}>
                        <IonLabel><b>or</b></IonLabel>
                    </div>
                    <IonButton expand="block" 
                    disabled={!validateEmail(email) || password.length > 0}
                    onClick={() => {console.log('send sign in link...')}}>
                    <IonIcon icon={link} size="large" />&nbsp;&nbsp;
                    <b>Send Sign In Link</b></IonButton>                    
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
