import React from 'react';
import { Form } from '../components/Form';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className='page-content'>
        <p>
          „Jau Dabar” - tai ne pelno siekianti organizacija. Mūsų misija yra
          skleisti informaciją, kuri ne tik įkvėptų, bet ir padėtų Lietuvos
          gyventojams rūpintis psichikos sveikata. Norime, kad gelmių
          psichologijos idėjos, galinčios pagerinti žmonių gyvenimo kokybę, būtų
          pasiekiamos ir suprantamos kiekvienam lietuviui.
        </p>
        <p>
          Šiame puslapyje dalinsimės informacija apie analitinę psichologiją,
          savipagalbą, psichikos sveikatą, emocijų ir kūrybos svarbą,
          priklausomybes, psichoterapiją, teorines ir praktines žinias apie
          psichiką, protą ir jų ryšį su kūnu bei fizine sveikata.
        </p>
        <p>
          Tvirtai tikime, kad tokios problemos kaip aukšti savižudybių skaičiai,
          priklausomybės ar korupcija yra sisteminės problemos. Mūsų nuomone,
          efektyviausias būdas spręsti tokias, seniai įsigalėjusias problemas,
          yra atsigręžiant į pradinį tašką- žmogaus psichiką. Švietimas yra
          įrankis, kuriuo naudodamiesi tikimės padidinti Lietuvos gyventojų norą
          nuosekliai rūpintis savo psichika, ir taip prisidėti prie minėtų
          problemų prevencijos.
        </p>
        <p>
          Ateityje tikimės, jog mūsų organizacija taps vienu esminių elementų
          Lietuvos visuomenės psichologinės sveikatos gerinimo mechanizme ir
          kovos dėl bazinių psichologinių žinių bei savipagalbos paskaitų
          įtraukimo į švietimo sistemą.
        </p>
        <hr />

        <div>
          Mūsų organizacijos vertybės (hover for cool effect):
          <div className='values-list'>
            <div>
              <div className='value'>Altruizmas</div>
              <div className='value'>Strategiškumas</div>
              <div className='value'>Skaidrumas</div>
            </div>
            <div>
              <div className='value'>Sąžiningumas</div>
              <div className='value'>Etinių principų laikymasis</div>
              <div className='value'>Nepriklausomumas</div>
            </div>
            <div>
              <div className='value'>Nuoseklumas</div>
              <div className='value'>Perspektyvizmas</div>
              <div className='value'>Tvarumas</div>
            </div>
          </div>
        </div>
        <hr />
        <p>Čia taip pat galite užsiprenumeruoti mūsų naujienlaiškį:</p>
        <Form />
        <br />
      </div>
    </>
  );
};
