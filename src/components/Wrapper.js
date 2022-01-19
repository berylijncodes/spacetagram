import React from 'react';
import useApi from '../custom-hook/useApi';
import Card from './Card';

import './Wrapper.css';

function Wrapper() {
  const [error, apiData] = useApi(
    'https://api.nasa.gov/planetary/apod?api_key=ZhZWP6d4gtOrpEOxtMcFAJDegMEDVw0fdRLAOgmx'
  );
  return (
    <div className="container">
      {apiData?.map((data, index) => (
        <Card apiData={data} index={index} />
      ))}
    </div>
  );
}

export default Wrapper;
