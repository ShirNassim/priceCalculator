import React from "react";
import "./DiamondsList.css";
import Diamond from './Diamond'
function DiamondsList(props) {


  const { header, list, selected ,onChange} = props;

  return (
    <div >
      <div className={'list-header'}>
        {header}
      </div>
      <div className={'diamonds-list'}>
        {list.map((item, index) => {
          return (
            < div key={index} >
              <Diamond
                title={item}

                src={require(`../images/${item}.png`)}
                onSelect={() => {onChange(item) }}
                selected={selected === item}
              />
            </div>
          )

        })}
      </div>



    </div >
  );
}

export default DiamondsList;