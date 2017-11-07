import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Body from 'components/HomeComponents/BodyPanel';
import HeaderPanel from 'components/HomeComponents/HeaderPanel';

const header = (name, deadline, isOpen) => (
  <span>
    <HeaderPanel
      name={name}
      deadline={deadline}
      isOpen={isOpen}
    />
  </span >
);

const createPanels = (projects, currentOpenProject, handleOfferProject) =>
  (projects.map((project) => {
    const id = project.id;
    return (
      <Panel key={id} header={header(project.name, project.deadline, id === currentOpenProject)} eventKey={id}>
        <Body
          tags={project.technologies}
          description={project.description}
          employerName={project.owner.name}
          starts={project.owner.owner_score}
          handleOfferProject={() => handleOfferProject(project)}
        />
      </Panel>
    );
  }));


class ListPanels extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentOpenProjectId: '',
    };
  }

  onProjectOpen(event) {
    if (this.state.currentOpenProjectId === event) {
      this.setState({ currentOpenProjectId: '' });
    } else {
      this.setState({ currentOpenProjectId: event });
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Accordion onSelect={(e) => this.onProjectOpen(e)} >
          {createPanels(this.props.projects, this.state.currentOpenProjectId, this.props.handleOfferProject)}
        </Accordion>
      </div>
    );
  }
}

ListPanels.propTypes = {
  projects: PropTypes.array,
  handleOfferProject: PropTypes.func,
};

export default ListPanels;
