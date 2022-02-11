import React from 'react';

export default function AmicaItem({classLocal, title, description}) {
  return (
      <>
        <div className={classLocal + " amica-info-item-container"}>
            <div className="amica-info-item animate-enter">
                <p className='c-title'>{title}:</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
      </>
  );
}
