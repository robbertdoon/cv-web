import { useState, useEffect, useRef } from "react"
import Heading from "../Heading/Heading"
import Content from "../Content/Content"
import ShowMore from "../ShowMore/ShowMore"

const bottomMargin = 50;

interface SectionProps {
    sectionTitle: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({sectionTitle, children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [contentHeight, setContentHeight] = useState<number>();
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!contentRef.current) return;      

        const currentContentHeight = () => {            
            let childrenHeight = bottomMargin;
            const childrenArray = [...contentRef.current!.children]
            childrenArray.map(element => {
                childrenHeight += element.scrollHeight
            })
            
            // WARNING for future-me: this does not take in account margins!
            setContentHeight(childrenHeight);
        }

        currentContentHeight();
      
        window.addEventListener('resize', currentContentHeight);
        return () => window.removeEventListener('resize', currentContentHeight);
    }, [isOpen])

    return (
        <section>
            <ShowMore isOpen={isOpen} setIsOpen={setIsOpen}>
                <Heading title={sectionTitle} />
                <Content ref={contentRef} contentHeight={contentHeight} isOpen={isOpen}>{children}</Content>
            </ShowMore>
        </section>
    )
}

export default Section