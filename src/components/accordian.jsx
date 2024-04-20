import React, { useState } from 'react';
import "./Accordian.css";
import data from '../data/accAsset';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { GiStarShuriken } from "react-icons/gi";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (getCurrentId) => {
    setSelected(selected === getCurrentId ? null : getCurrentId);
    
  };

  return (
    <div className='wrapper'>
      <div className="accordion">
        <h1><GiStarShuriken class="blue" />FAQs</h1>
        {data && data.length !== 0 ?
          data.map(dataItem => (
            <div className='Item' key={dataItem.id}>
              <button className='title' onClick={() => handleSelection(dataItem.id)}>
                {dataItem.question} <span>{ selected === dataItem.id ? <FaCircleMinus/>:<FaPlusCircle className='blue'/> }</span>
              </button>
              {selected === dataItem.id ? <p className="answer">{dataItem.answer}</p> : null}
            </div>
          )) : <div>No data found</div>
        }
      </div>
    </div>
  );
};

export default Accordion;
