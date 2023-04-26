import { forwardRef } from 'react';
import styles from './content.module.scss';

interface ContentProps {
    contentHeight: number | undefined;
    // dangInnerHTML: string | TrustedHTML;
    isOpen: boolean;
    children: React.ReactNode;
}

export type Ref = HTMLDivElement;

const Content = forwardRef<Ref, ContentProps>(({contentHeight, isOpen, children}, ref) => (
    <div 
      style={{height: isOpen ? contentHeight : 0}} 
      className={styles.content} 
      ref={ref} 
      // dangerouslySetInnerHTML={{__html: dangInnerHTML}} 
    >{children}</div>
  ))

export default Content
