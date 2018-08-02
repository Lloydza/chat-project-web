import React, { Component } from 'react';

import styles from 'app/content/styles/components/fullPageLoader/index.css';

export default class FullPageLoader extends Component {
  render() {
    return (
      <div className={styles.skCircle}>
        <div className={styles.big}>
          <div className={[styles.skCircle1, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle2, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle3, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle4, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle5, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle6, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle7, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle8, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle9, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle10, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle11, styles.skChild].join(' ')}></div>
          <div className={[styles.skCircle12, styles.skChild].join(' ')}></div>
        </div>
      </div>
    );
  }
};