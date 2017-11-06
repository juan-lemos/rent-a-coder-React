import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import Body from 'components/HomeComponents/BodyPanel';
import HeaderPanel from 'components/HomeComponents/HeaderPanel';

const header = (
  <span>
    <HeaderPanel
      name={'Project name'}
      deadline={'2017-12-1'}
      isOpen={false}
    />
  </span >
);

function ListPanels() {
  return (
    <Accordion >
      <Panel header={header} eventKey={1}>
        <Body
          tags={['sdfs', 'dfsdf', 'dfsdf']}
          description={'Description \n ldsf'}
          employerName={'business 1'}
          starts={1.5}
        />
      </Panel>
      <Panel header="dfsdfs" eventKey={2}>
        <div style={{ height: '30px' }} />
      </Panel>
      <Panel header="Collapsible Group Item #2" eventKey={3}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
          </Panel>
      <Panel header="Collapsible Group Item #3" eventKey={4}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
          </Panel>
    </Accordion>
  );
}

ListPanels.propTypes = {

};

export default ListPanels;
