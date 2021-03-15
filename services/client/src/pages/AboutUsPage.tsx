import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className='page-content'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='reasons'
            id='reasonsAccordionSummary'
            className='accordion-summary'
          >
            Kodėl „Jau Dabar”?
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p className='accordion-paragraph'>
              Šių dienų statistika demaskuoja skaudžią tiesą – Lietuvos
              gyventojų emocinė sveikata yra trapi, dažnai apleista ir
              stigmatizuota. Prieš trejus metus Pasaulio sveikatos organizacijos
              paskelbti duomenys atskleidė, kad pirmaujame pagal savižudybių
              skaičių
              <sup className='reference'>1</sup>. Be to, spręsdami problemas ar
              jų vengdami dažnai griebiamės ir specialistų nepatvirtintų
              priemonių – alkoholio. 2016 metais Lietuva buvo antra pasaulyje
              pagal suvartojamo alkoholio kiekį
              <sup className='reference'>2</sup>. Vis dar didelė, atvira žaizda
              šalyje – smurtas. Anot 2017 m. Lietuvos Statistikos departamento
              duomenų, šalyje kasdien užfiksuojama 30 smurto artimoje aplinkoje
              atvejų<sup className='reference'>3</sup>.
            </p>
            <p className='accordion-paragraph'>
              Aukšti savižudybių, priklausomybių ir emocinį nestabilumą
              reprezentuojantys skaičiai parodo galimas spragas mūsų švietimo,
              sveikatos ar net ekonomikos sistemose. Mūsų, „Jau Dabar“ komandos,
              tikslas yra padėti žmonėms ar net valstybei emocinės sveikatos
              gerinimo kelyje.
            </p>
            <p className='accordion-paragraph'>
              Vertiname Vyriausybės, kitų organizacijų ir aktyvistų pastangas,
              tad stengiamės dalintis kuo unikalesne informacija ir žiniomis.
              Nesiekiame būti geriausiais ar konkuruoti. Priešingai – norime
              koja kojon dirbti su kitais, siekiančiais pagerinti visuomenės
              emocinę sveikatą ir padėti žmonėms.
            </p>
            <p className='accordion-paragraph'>
              Informacija šiame puslapyje, yra žvilgsnis iš gelmių psichologijos
              perspektyvos iš Jungistinės psichologijos pakraipos. Žinoma, čia
              rasite ir kitų psichologijos mokyklų idėjų – mes neprioretizuojame
              dogmų, greičiau teikiame pirmenybę veiksmingiems ir ilgalaikiams
              sprendimo būdams.
            </p>
            <p className='accordion-paragraph'>
              Dalindamiesi gelmių psichologijos įžvalgomis mes nesiekiame
              sumenkinti neuromokslų, kognityvinės psichologijos ar
              psichiatrijos įžvalgų. Priešingai, norime, kad žmonės turėtų
              galimybę pažinti visas įmanomas teorijas ir požiūrius, susijusius
              su jų psichika. Siekiame, kad žmonės turėtų galimybę rinktis iš
              įvairių metodų ir skirtingų prieigos būdų tam, kad pažintų savo
              psichiką bei atrastų sau tinkamiausias mokyklas ar praktikas.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='team'
            id='teamAccordionSummary'
            className='accordion-summary'
          >
            Komanda
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p>
              <div className='accordion-details-strong'>Dominyka Bodrije</div>
              <div>
                <i>Steigėja | Vadovė</i>
              </div>
              <div>
                <i>
                  Bakalauras: Politika ir žmogaus teisės, Esekso universitetas
                </i>
              </div>
              <div>
                <i>
                  Magistras: Jungistinės ir post-Jungistinės studijos, Esekso
                  universitetas
                </i>
              </div>
            </p>
            <p className='accordion-paragraph'>
              <div>
                Su didele vaikiška svajone pakeisti pasaulį išvažiavau mokytis į
                Jungtinę Karalystę. Nuo pat pirmo kurso rinkausi
                psichoanalitikos fakulteto siūlomus modulius, kol galiausiai
                apsisprendžiau, kad studijuosiu Jungistinės psichologijos
                magistrą.
              </div>
              <div>
                Visą magistrą su malonumu maudžiausi man be galo įdomiose temose
                apie žmogaus psichiką, psichoterapijos praktiką, pasąmonę,
                religijas, visuomenės, meno, politikos ir filosofijos
                psichologiją. Taip pat jau ne vienerius metus skiriu laiko
                įvairioms asmenybės tobulėjimo praktikomis, savarankiškai
                domiuosi asmeniniu tobulėjimu ir norėčiau paraginti domėtis ir
                kitus. Mano pagrindinis tikslas yra pritaikyti įgytas žinias ir
                išmoktus įgūdžius Lietuvos visuomenės kontekste.
              </div>
            </p>
            <p className='accordion-paragraph'>
              Laisvalaikiu daug tapau, rašau, mokausi groti gitara. Temos
              priverčiančios suklusti mano smalsumui: menai, žmogaus ir sociumo
              psichika, struktūralizmas, joga, metafizika, sisteminis mąstymas,
              įv. asmenybės raidos teorijos, epistemologija, mirtis, religija ir
              dvasingumas, muzika.
            </p>

            <p>
              <div>Marius Vaitaitis</div>
              <div>
                <i>Steigėjas | Plėtros koordinatorius</i>
              </div>
              <div>
                <i>
                  Bakalauras: Buhalterinė apskaita ir finansai, Esekso
                  universitetas
                </i>
              </div>
            </p>
            <p className='accordion-paragraph'>
              Nors ir baigiau Apskaitos ir Finansų studijas Esekso universitete,
              šiuo metu esu duomenų analitikas. Ilgą laiką blaškiausi po
              Jungtinę Karalystę, Liuksemburgą, tačiau kurį laiką apsisprendžiau
              pabūti Lietuvoje. Vis tik troškimas įstumti save į nepažįstamą
              vietą ir suktis kaip išeina dar nėra dingęs. Laisvalaikį karantino
              metu praleidžiu bėgiodamas, mokydamasis prancūzų kalbos,
              gilindamas finansų, duomenų analizės, bei programavimo žinias. Na
              ir žinoma – šachmatai. Pasibaigus karantinui, prie laisvalaikio
              galėčiau pridėti BBQ su draugais, ko begalo pasiilgau. Temos,
              kurios niekada neatsibosta: technologijos, finansų rinka, lengvoji
              atletika, bet manau, su tinkamais žmonėmis – nėra nuobodžių temų.
            </p>

            <p>
              <div>Vilius Gudžiūnas</div>
              <div>
                <i>Steigėjas | IT specialistas</i>
              </div>
              <div>
                <i>Bakalauras: Matematika, Esekso universitetas.</i>
              </div>
            </p>
            <p className='accordion-paragraph'>
              <div>
                Savamokslis programuotojas, šiuo metu mėgaujuosiu visais
                karantino privalumais. Ilgą laiką gyvenau Jungtinėje
                Karalystejė, kur studijavau matematiką ir pradėjau mokytis
                programuoti. Grįžęs į Lietuvą pradėjau dirbti front-end
                developeriu. Laisvalaikiu sportuoju, stengiuosi neleisti
                karantinui išbalansuoti sveikatos ir gyvensenos. Retkarčiais
                mėgstu intensyvias, dažniausiai trunkančias visą naktį
                ‘geiminimo’ sesijas. Temos kurios niekada neatsibosta:
                technologijos, kas nutiko Game of Thrones 8 sezonui, 70-ųjų
                rokas.
              </div>
            </p>

            <p>
              <div>Izabelė Kačinskaitė</div>
              <div>
                <i>Savanorė | Redaktorė</i>
              </div>
              <div>
                <i>Bakalauras: nope</i>
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='history'
            id='historyAccordionSummary'
            className='accordion-summary'
          >
            Mūsų istorija
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p className='accordion-paragraph'>
              Mūsų, įkūrėjų, trijulė būtent šio projekto tikslu susibūrė
              visiškai atsitiktinai, nors susipažinome dar 2015 metais,
              besimokydami tame pačiame universitete Anglijoje. Marius visuomet
              svajojo apie projektą su draugais, ir prisiminęs, kad tiek Vilius,
              tiek aš (Dominyka) esame užsiminę apie norą dirbti ne pelno
              siekiančioje organizacijoje, karantino metu pasiūlė pabandyti ką
              nors sukurti. Man tai buvo tarsi dovana – buvau ką tik baigusi
              magistro studijas, sėdėjau su dideliu bagažu žinių ir noru jas
              kažkur panaudoti ir pritaikyti. Tačiau nesugalvojau, kaip tai
              daryti, ir žinojau, kad viena to nesugebėsiu. Taip gimė mūsų
              komanda ir projektas: vaikinai sukūrė platformą, kurioje galiu
              dalintis įvairiomis įžvalgomis, informacija ir atradimais su
              tikslu prisidėti prie šviesesnės Lietuvos ateities.
            </p>
            <p className='accordion-paragraph'>
              Viliamės, kad pavyks ne tiesiog sausai dalintis informacija, bet
              ir suteikti žmonėms sąmoningumo, kad jie susimąstytų, imtųsi
              veiksmų ar net klausti savęs klausimų, kurių niekada nėra klausę,
              galvoti apie dalykus, apie kuriuos dar nėra susimąstę. Jeigu
              prisidėsime prie bent vieno žmogaus sąmoningumo, projektas bus
              vertas kiekvienos prie jo praleistos minutės.
            </p>
            <p className='authors-name'>-Dominyka</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
