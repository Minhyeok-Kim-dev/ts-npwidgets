import React from 'react';
import NpButtons from '../components/np/NpButtons';

type CondProps = {
  retrive: () => void;
  clear: () => void;
  data?: string;  // 조회 결과 데이터
}

function CondContainer({ retrive, clear }: CondProps) {
  return (
    <>
      <div style={{float:"left"}}>
        <NpButtons value='retrive' onClick={retrive} />
      </div>
      <div>
        <NpButtons value='clear' onClick={clear}/>
      </div>
    </> 
  )
}

export default CondContainer;