import React from 'react';

import styles from './passwordBlock.module.scss';

 const PasswordBlockComponent = ({isPasswordEditable, password, handleChangeValue, handleToggleVisibility}) => (
   <div className={styles.passwordBlock}>
     { isPasswordEditable ?
       <div className={styles.inputBlock}>
         <input type='password' placeholder='type your password' value={password}
                onChange={handleChangeValue} />
         <button onClick={handleToggleVisibility}>&#10003;</button>
       </div> :
       <span>{password}</span> }
   </div>
 );

export default PasswordBlockComponent
