import { forwardRef } from 'react';
import styles from './content.module.scss';

interface ContentProps {
    contentHeight: number | undefined;
    dangInnerHTML: string | TrustedHTML;
    isOpen: boolean;
}

export type Ref = HTMLDivElement;

const Content = forwardRef<Ref, ContentProps>(({contentHeight, dangInnerHTML, isOpen}, ref) => (
    <div 
      style={{height: isOpen ? contentHeight : 0}} 
      className={styles.content} 
      ref={ref} 
      dangerouslySetInnerHTML={{__html: dangInnerHTML}} 
    />
  ))

export default Content
