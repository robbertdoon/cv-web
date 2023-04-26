import { useState, useEffect, useRef } from "react";
import Heading from "../Heading/Heading"
import Content from "../Content/Content"
import ShowMore from "../ShowMore/ShowMore"
import styles from './section.module.scss';

// import { runSwitch } from "./sectionController";

const bottomMargin = 50; // 50

interface SectionProps {
    sectionTitle: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({sectionTitle, children}) => {
    const [isOpen, setIsOpen] = useState(true);
    // const [content, setContent] = useState('');
    const [contentHeight, setContentHeight] = useState<number>();
    const contentRef = useRef<HTMLDivElement | null>(null);
    // const initialRenderRef = useRef(true);

    //only render after content has fetched
    useEffect(() => {
        // skip pageload render
        // if (initialRenderRef.current) {
        //     initialRenderRef.current = false;
        //     return;
        // }
        
        if (!contentRef.current) return;      

        const currentContentHeight = () => {            
            let childrenHeight = bottomMargin;
            const childrenArray = [...contentRef.current!.children]
            childrenArray.map(element => {
                childrenHeight += element.scrollHeight
            })
            
            // WARNING: Does not take in account margins
            setContentHeight(childrenHeight);
        }

        currentContentHeight();
      
        window.addEventListener('resize', currentContentHeight);
        return () => window.removeEventListener('resize', currentContentHeight);
    }, [isOpen])

    // runSwitch(sectionTitle, setContent);

    return (
        <section className={styles.section}>
            <ShowMore isOpen={isOpen} setIsOpen={setIsOpen}>
                <Heading title={sectionTitle} />
                {/* <Content ref={contentRef} contentHeight={contentHeight} dangInnerHTML={content} isOpen={isOpen} /> */}
                <Content ref={contentRef} contentHeight={contentHeight} isOpen={isOpen}>{children}</Content>
            </ShowMore>
        </section>
    )
}

export default Section