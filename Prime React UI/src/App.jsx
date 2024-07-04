
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';


export default function App() {
  const [value, setValue] = useState(0);
  const toast = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
      let _val = value;

      interval.current = setInterval(() => {
          _val += Math.floor(Math.random() * 10) + 1;

          if (_val >= 100) {
              _val = 100;
              toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
              clearInterval(interval.current);
          }

          setValue(_val);
      }, 2000);

      return () => {
          if (interval.current) {
              clearInterval(interval.current);
              interval.current = null;
          }
      };
  }, []);
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>

            <div className="card">
            <Toast ref={toast}></Toast>
            <ProgressBar value={value}></ProgressBar>
        </div>
        </div>
    )
}
        