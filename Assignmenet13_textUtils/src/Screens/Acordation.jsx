
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    return (
        <Accordion >
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading >
                    <AccordionItemButton style={{backgroundColor:"black", color:"white", fontSize:"20px"}}>
                      Analyase Your Text
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"black", color:"white"}}>
                    <p >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio sapiente blanditiis odio. Maiores, quam tempore non aliquid voluptates harum eaque dolor exercitationem voluptatem natus assumenda corrupti placeat dolore, ipsum obcaecati ex tempora? Possimus, unde error obcaecati adipisci sunt quas odio culpa, recusandae, est facilis impedit molestiae libero quod quasi.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"black", color:"white", fontSize:"20px"}}>
                   Free To Use
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"black", color:"white"}}>
                    <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor distinctio nihil nulla tempora temporibus. Ullam placeat eaque reprehenderit cupiditate, beatae expedita. Perspiciatis expedita numquam vel magnam esse quibusdam beatae!
                    </p>
                </AccordionItemPanel>
            </AccordionItem  >
            <AccordionItem style={{border:"2px solid white"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"black", color:"white", fontSize:"20px"}}>
                   Browser Compatible
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"black", color:"white"}}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam repellendus, itaque dolores totam nostrum quo delectus officia saepe expedita autem fugit neque rem explicabo eaque temporibus? Nobis, nisi deleniti.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
           
            
        </Accordion>
    );
}