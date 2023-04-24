import { forwardRef } from 'react';
import styles from './content.module.scss';

interface ContentProps {
    contentHeight: number | undefined;
    dangInnerHTML: string | TrustedHTML;
}

export type Ref = HTMLDivElement;

const Content = forwardRef<Ref, ContentProps>(({contentHeight, dangInnerHTML}, ref) => (
    <div 
      style={{height: contentHeight}} 
      className={styles.content} 
      ref={ref} 
      dangerouslySetInnerHTML={{__html: dangInnerHTML}} 
    />
  ))

export default Content
