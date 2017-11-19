import React from 'react';
import { Row, Col, Tab, Accordion, Panel, Label, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

function ProjectsTab({ eventKey, title, projects, handleClickEditProject, handleClickAssignProject }) {
  const stateClasses = {
    open: 'success',
    offered: 'warning',
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

      let projectButton;
      switch (project.state) {
        case 'open':
          projectButton = <Button bsStyle="warning" onClick={() => handleClickEditProject(project.id)} block>Modificar</Button>;
          break;
        case 'offered':
          projectButton = <Button bsStyle="primary" onClick={() => handleClickAssignProject(project.id)} block>Asignar</Button>;
          break;
        case 'in_progress':
          projectButton = <Button bsStyle="danger" onClick={() => handleClickEditProject(project.id)} block>Finalizar</Button>;
          break;
        default:
          projectButton = '';
      }

      return (
        <Panel header={projectHeader} eventKey={project.id} key={project.id}>
          <Row className="project-body">
            <Col sm={9} md={9} lg={9}>
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
            </Col>
            <Col sm={3} md={3} lg={3} className="project-body-buttons">
              {projectButton}
            </Col>
          </Row>
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
  handleClickEditProject: PropTypes.func,
  handleClickAssignProject: PropTypes.func,
};

export default ProjectsTab;
