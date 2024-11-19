import LazyImage from '../../components/LazyImage';
import img1 from '../images/Team/Rituparna.jpg'
import img2 from '../images/Team/Dalia.jpg'
import img3 from '../images/Team/Bidhan.jpg'
import img4 from '../images/Team/Santanu.jpg'
import img5 from '../images/Team/Gourav.jpg'
import img6 from '../images/Team/teacher1.jpg'
import img7 from '../images/Team/teacher2.jpg'
import img8 from '../images/Team/teacher5.png'
import img9 from '../images/Team/teacher4.jpg'

const dataTeam = [

    {
        id: 1,
        imgComponent: <LazyImage src={img1} alt="Ms. Rituparna Ganguly" />,
        name: 'Ms. Rituparna Ganguly',
        position: 'Assistant Professor, Dept. of Humanities'
    },
    {
        id: 2,
        imgComponent: <LazyImage src={img2} alt="Ms. Dalia Ghosh" />,
        name: 'Ms. Dalia Ghosh',
        position: 'Librarian'
    },

    {
        id: 3,
        imgComponent: <LazyImage src={img3} alt="Mr. Bidhan Barai" />,
        name: 'Mr. Bidhan Barai',
        position: 'Assistant Professor, Dept. of AIML'
    },

    {
        id: 4,
        imgComponent: <LazyImage src={img4} alt="Mr. Santanu Mondal" />,
        name: 'Mr. Santanu Mondal',
        position: 'Assistant Professor, Dept. of EIE'
    },

    {
        id: 5,
        imgComponent: <LazyImage src={img5} alt="Mr. Gourav Ghosh" />,
        name: 'Mr. Gourav Ghosh',
        position: 'Assistant Professor, Dept. of CE'
    },

    {
        id: 6,
        imgComponent: <LazyImage src={img6} alt="Ms.Ayesha Sultana" />,
        name: 'Ms.Ayesha Sultana',
        position: 'Assistant professor, Dept. of ECE'
    },

    {
        id: 7,
        imgComponent: <LazyImage src={img7} alt="Mr.Kushal Burman" />,
        name: 'Mr.Kushal Burman',
        position: 'Assistant Professor, Dept. of ME'
    },

    {
        id: 8,
        imgComponent: <LazyImage src={img8} alt="Mr.Dipen Ganguly" />,
        name: 'Mr.Dipen Ganguly',
        position: 'Assistant Professor, Dept. of Mathematics'
    },

    {
        id: 9,
        imgComponent: <LazyImage src={img9} alt="Mr.Hemant Agarwal" />,
        name: 'Mr.Hemant Agarwal',
        position: 'Assistant Professor, Dept. of EE'
    },
    

]

export default dataTeam;
