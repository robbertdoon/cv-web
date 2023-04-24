import { useState, useLayoutEffect, useRef, useEffect } from "react";
import Heading from "../Heading/Heading"
import Content from "../Content/Content"
import ShowMore from "../ShowMore/ShowMore"
import styles from './section.module.scss';

import { runSwitch } from "./sectionController";

interface SectionProps {
    sectionTitle: string;
}

const Section: React.FC<SectionProps> = ({sectionTitle}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [initialHeight, setInitialHeight] = useState<number>();
    const [content, setContent] = useState('');
    const [contentHeight, setContentHeight] = useState<number>();
    const contentRef = useRef<HTMLDivElement | null>(null);
    const initialRenderRef = useRef(true);


    //only render after content has fetched
    useLayoutEffect(() => {
        // skip pageload render
        if (initialRenderRef.current) {
            initialRenderRef.current = false;
            return
        }

        if (!contentRef.current) return;

        const height = contentRef.current.scrollHeight + 50; // hier stond margin
        setInitialHeight(height); // margin for bottom of section
    }, [content])

    
    useLayoutEffect(() => {    
        if (isOpen) {   
            setContentHeight(initialHeight);
        } else {
            setContentHeight(0);
        }
        
    }, [isOpen, initialHeight])


    // recalculate needed height on window resize
    useEffect(() => {
        const currentContentHeight = () => {
            if (!contentRef.current) return;

            // scrollheight wel de juiste? uitzoeken
            const height = contentRef.current.scrollHeight;           
            // bij scherm minder breed wordt de height hoger
            // maar bij scherm breder wordt de height niet minder 
            setContentHeight(height);
        }
      
        window.addEventListener('resize', currentContentHeight);
        return () => window.removeEventListener('resize', currentContentHeight);
    }, [])


    runSwitch(sectionTitle, setContent);

    return (
        <section className={styles.section}>
            <ShowMore isOpen={isOpen} setIsOpen={setIsOpen}>
                <Heading title={sectionTitle} />
                <Content ref={contentRef} contentHeight={contentHeight} dangInnerHTML={content} />
            </ShowMore>
        </section>
    )
}

export default Section