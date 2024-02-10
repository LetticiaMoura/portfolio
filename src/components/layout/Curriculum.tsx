import  { Component } from 'react';

import curriculum from '../../assets/curriculoLM.pdf';

class Curriculum extends Component {

  render() {

    return (

        <div>

          <a href = {curriculum} target = "_blank">Curriculum</a>

        </div>

    );

  }
}

export default Curriculum;