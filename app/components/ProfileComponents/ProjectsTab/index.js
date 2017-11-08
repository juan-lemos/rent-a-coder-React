import React from 'react';
import { Tab, Accordion, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

function ProjectsTab({ eventKey, title, projects }) {
  let projectElements;
  if (projects) {
    projectElements = projects.map((project) => (
      <Panel header={project.name} eventKey={project.id} key={project.id}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
      </Panel>
    ));
  } else {
    projectElements = '';
  }

  return (
    <Tab eventKey={eventKey} tabClassName="tab-projects" title={title}>
      <Accordion>
        {projectElements}
      </Accordion>
    </Tab>

  );
}

ProjectsTab.propTypes = {
  eventKey: PropTypes.number,
  title: PropTypes.string,
  projects: PropTypes.array,
};

export default ProjectsTab;
