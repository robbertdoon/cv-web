import Section from '../../components/Section/Section'
import TimeTopic from '../../components/TimeTopic/TimeTopic'
import styles from './main.module.scss'

const Main = () => {

  function getAge(dateString: string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
  return (
    <main className={styles.main}>
      <Section sectionTitle='Profiel'>
        <p>Het zal je vast niet zijn ontgaan: mijn naam is Robbert Doon. Ik ben {getAge("1985/04/05")} jaar en vader van een zoon: Robin. Na 13 jaar in de detailhandel te hebben gewerkt vond ik dat het tijd werd om een carrièreswitch te maken naar de IT-sector.</p>
        <p>Wat ik gaaf vind? Natuurlijk vind ik het te gek om bezig te zijn als developer. Ook vind ik het ook heel relaxed om wat achter de piano te spelen 🎶. Daarnaast hou ik van hardlopen, blokkentorens bouwen met Robin en ben ik niet vies van een avondje gamen.</p>
        <br />
        <p>Wat kun je van mij verwachten? Ik heb uitgebreide front-end kennis. Mijn specialisme bestaat onder andere uit:</p>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML / CSS (Sass)</li>
        </ul>
        <br />
        <p>Daarnaast ben ik bekend met Git, GitHub en Bitbucket.</p>
        <br />
        <p>Ook heb ik enige back-end ervaring. Zo heb ik gewerkt met:</p>
        <ul>
          <li>Node.JS</li>
          <li>Java</li>
          <li>C#</li>
          <li>Python</li>
        </ul>
        <br />
        <p>Ik ben op zoek naar een job waarin ik mijn creativiteit de vrijheid kan geven.</p>
        <br />
        <p>Naast mijn werkzaamheden in mijn huidige functie vind ik het ook gaaf om in mijn vrije tijd bezig te zijn met development om nieuwe dingen te blijven ontdekken.</p>
      </Section>
      <Section sectionTitle='Cursussen'>
        <TimeTopic start='2023' topic='Node.js | Full Course for Beginners' subtitle='Complete All-in-One Tutorial' />
        <TimeTopic start='2023' topic='React | Full Course for Beginners' subtitle='Complete All-in-One Tutorial' />
        <TimeTopic start='2023' topic='Learn JAVA Programming' subtitle='Beginner to Master' />
        <TimeTopic start='2022' topic='React and Typescript' subtitle='Build a Portfolio Project' />
        <TimeTopic start='2022' topic='Advanced CSS and Sass' subtitle='Flexbox, Grid, Animations and More' />
        <TimeTopic start='2021' topic='React, the Complete Guide' subtitle='incl Hooks, React Router, Redux' />
        <TimeTopic start='2020' topic='HTML, CSS & JavaScript' />
        <TimeTopic start='2020' topic='The Complete Web Development Bootcamp' />
      </Section>
      <Section sectionTitle='Opleidingen'>
        <TimeTopic start='2023' end='heden' topic='HBO ICT' subtitle='Fontys, Eindhoven' />
        <TimeTopic start='2011' end='2013' topic='MBO4 Filiaalmanager' subtitle='ROC, Hengelo' />
      </Section>
      <Section sectionTitle='Ervaring'>
        <TimeTopic start='2022' end='heden' topic='Kabisa' subtitle='Software Engineer, Weert' />
        <TimeTopic start='2021' end='2022' topic='Getnoticed' subtitle='Front-end webdeveloper, Nederweert' />
        <TimeTopic start='2011' end='2021' topic='Vodafone' subtitle='Retail Assistent Manager' />
        <TimeTopic start='2008' end='2011' topic='Vodafone' subtitle='Retail Adviseur' />
      </Section>
      <Section sectionTitle='Ambities'>
        <p>Als kind was ik al creatief. Wat begon met tekenen en knutselen kreeg
        later een digitaal vervolg door middel van Photoshop, wat voor mij de
        brug is geweest naar web-development.</p>
        <br />
        <p>Ik wil mezelf blijven ontwikkelen en groeien door nieuwe mogelijkheden
        te ontdekken.
        Door het volgen van cursussen blijf ik op de hoogte van de laatste
        nieuwe ontwikkelingen en hou ik mijn kennis op peil. Naast web-development heb ik ook interesse
        om software en mobiele applicaties te ontwikkelen, echter haal ik het
        meeste plezier uit m'n werk in de functie van front-end developer.</p>
      </Section>
    </main>
  )
}

export default Main