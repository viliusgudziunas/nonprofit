import React from 'react';
import { Form } from '../components/Form';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className='content'>
        <p>
          ‘Kita Perspektyva’- tai ne pelno siekianti organizacija. Mūsų misija
          yra skleisti tarpdisciplininę informaciją, potencialiai gerinančią
          Lietuvos gyventojų psichologinį gerbuvį.
        </p>
        <p>
          Ateityje tikimės, jog mūsų organizacija ne tik taps vienu esminių
          elementų Lietuvos visuomenės psichologinės sveikatos gerinimo
          mechanizme, bet taip pat ir prisidės prie bazinių psichologinių žinių
          ir savipagalbos paskaitų įtraukimo į švietimo sistemą.
        </p>
        <p>
          Šiame puslapyje dalinsimės informacija apie emocijų ir kūrybos svarbą,
          priklausomybes, psichoterapiją, savipagalbą bei teorines ir praktines
          žinias apie psichiką, protą ir jų ryšį su kūnu.
        </p>
        <p>Jei norite užsiprenumeruoti mūsų naujienlaiškį spauskite čia.</p>
      </div>
      <hr />
      <Form />
    </>
  );
};
