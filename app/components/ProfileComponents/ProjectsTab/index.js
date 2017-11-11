import React from 'react';
import { Tab, Accordion, Panel, Label } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

function ProjectsTab({ eventKey, title, projects }) {
  const stateClasses = {
    open: 'success',
    in_progress: 'primary',
    danger: 'finished',
  };

  let projectElements;
  if (projects) {
    projectElements = projects.map((project) => {
      const projectHeader = (
        <div className="project-header">
          <h5>{project.name}</h5>
          <Label bsStyle={stateClasses[project.state]}>{project.state}</Label>
        </div>
      );

      let projectTags;
      if (project.technologies.length !== 0) {
        projectTags = project.technologies.map((element, i) => {
          const keyTag = `tag${i}`;
          return (
            <span key={keyTag} style={{ marginRight: '5px' }}>
              <Label>{element.name}</Label>
            </span>
          );
        });
      } else {
        projectTags = '';
      }

      return (
        <Panel header={projectHeader} eventKey={project.id} key={project.id}>
          <p className="project-body-section">
            <strong className="project-body-title">Descripción</strong>
            {project.description}
          </p>
          <p className="project-body-section">
            <strong className="project-body-title">Tecnologías</strong>
            {projectTags}
          </p>
          <p className="project-body-section">
            <strong className="project-body-title">Deadline</strong>
            {project.deadline}
          </p>
        </Panel>
      );
    });
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
