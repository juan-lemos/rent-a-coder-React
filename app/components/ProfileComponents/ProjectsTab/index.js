import React from 'react';
import { Row, Col, Tab, Accordion, Panel, Label, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.css';

function ProjectsTab({ eventKey, title, projects, handleClickEditProject, handleClickAssignProject, handleClickRateProject, access }) {
  const stateClasses = {
    open: 'success',
    offered: 'warning',
    in_progress: 'primary',
    finished: 'danger',
  };

  const stateDescriptions = {
    open: 'abierto',
    offered: 'ofertado',
    in_progress: 'en progreso',
    finished: 'finalizado',
  };

  let projectElements;
  if (projects) {
    projectElements = projects.map((project) => {
      const projectHeader = (
        <div className="project-header">
          <h5>{project.name}</h5>
          <Label bsStyle={stateClasses[project.state]}>{stateDescriptions[project.state]}</Label>
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
          projectButton = access === 'owner' ?
            <Button bsStyle="warning" onClick={() => handleClickEditProject(project.id)} block>Modificar</Button> : '';
          break;
        case 'offered':
          projectButton = access === 'owner' ?
            <Button bsStyle="primary" onClick={() => handleClickAssignProject(project.id)} block>Asignar</Button> : '';
          break;
        case 'in_progress':
          projectButton = access === 'owner' ?
            <Button bsStyle="danger" onClick={() => handleClickRateProject(project.id)} block>Finalizar</Button> : '';
          break;
        case 'finished':
          projectButton = (access === 'developer' && project.owner_score === null) ?
            <Button bsStyle="warning" onClick={() => handleClickRateProject(project.id)} block>Calificar</Button> : '';
          break;
        default:
          projectButton = '';
      }

      const editable = access === 'owner' || access === 'developer';

      return (
        <Panel header={projectHeader} eventKey={project.id} key={project.id}>
          <Row className="project-body">
            <Col sm={(editable) ? 9 : 12} md={(editable) ? 9 : 12} lg={(editable) ? 9 : 12}>
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
            {editable ? (
              <Col sm={3} md={3} lg={3} className="project-body-buttons">
                {projectButton}
              </Col>
            ) : (
              ''
            )}
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
  handleClickRateProject: PropTypes.func,
  access: PropTypes.string,
};

export default ProjectsTab;
