import { useState, useLayoutEffect, useRef } from "react";
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
    const [content, setContent] = useState<string>('');
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

        const height = contentRef.current.clientHeight;
        setInitialHeight(height + 50); // margin for bottom of section
    }, [content])
    

    useLayoutEffect(() => {    
        if (isOpen) {   
            setContentHeight(initialHeight);
        } else {
            setContentHeight(0);
        }
        
    }, [isOpen, initialHeight])

    runSwitch(sectionTitle, setContent);

    return (
        <section className={styles.section}>
            <ShowMore isOpen={isOpen} setIsOpen={setIsOpen}>
                <Heading title={sectionTitle} />
                <Content ref={contentRef} contentHeight={contentHeight} dangInnerHTML={content} />
                    {/* {content}
                </Content> */}
            </ShowMore>
        </section>
    )
}

export default Section