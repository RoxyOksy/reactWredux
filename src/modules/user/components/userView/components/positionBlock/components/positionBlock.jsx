import React from 'react';

import styles from './positionBlock.module.scss';

 const PositionBlockComponent = ({isPositionEditable, position, handleChangeValue, handleToggleVisibility}) => (
   <div className={styles.positionBlock}>
     { isPositionEditable ?
       <div className={styles.inputBlock}>
         <input type='text' placeholder='type your position' value={position}
                onChange={handleChangeValue} />
         <button onClick={handleToggleVisibility}>&#10003;</button>
       </div> :
       <span>{position}</span> }
   </div>
 );

export default PositionBlockComponent
