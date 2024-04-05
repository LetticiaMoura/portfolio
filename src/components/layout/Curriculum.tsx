import  { Component } from 'react';

import curriculum from '../../assets/curriculoLM.pdf';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

class Curriculum extends Component {

  render() {

    return (

        <div>

          <a href = {curriculum} target = "_blank"><FileDownloadIcon /> Download CV </a>

        </div>

    );

  }
}

export default Curriculum;