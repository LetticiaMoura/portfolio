import  { Component } from 'react';

import curriculum from '../../assets/Leticia Moura - CurriculoDS.pdf';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

class Curriculum extends Component {

  render() {

    return (

        <div>

          <a href = {curriculum} target = "_blank" className='text text-sm font-bold'><FileDownloadIcon/> Download CV </a>

        </div>

    );

  }
}

export default Curriculum;