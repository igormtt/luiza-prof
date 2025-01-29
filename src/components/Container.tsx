import styles from './Container.module.css'

import { ReactNode } from "react";

interface Children {
  children: ReactNode
}

export default function Container ({ children }: Children) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  );
}