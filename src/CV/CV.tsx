import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import { Personal } from '../Personal/Personal';
import { CVData } from '../types';
import './CV.scss';


const CV = () => {


  const cvData: CVData = {

    personal: {
      photo: 'https://placehold.co/200x200?text=MS',
      name: 'Marek',
      lastName: 'Szczepanik',
      position: 'Developer',
    },
    details: {
      experience: [
        { year: 2003, description: 'Lorem ipsum' },
        { year: 2025, description: 'Dolor sit amet' }
      ],
      education: [
        'Lorem ipsum',
        'Dolor sit amet',
        'Ala ma kota'
      ]
    }
  }

  return (
    <main className='cv-main'>

      <Header data={cvData.personal} />
      <Personal data={cvData.personal} />
      <Details data={cvData.details}/>

    </main>
  )
}

export { CV }
