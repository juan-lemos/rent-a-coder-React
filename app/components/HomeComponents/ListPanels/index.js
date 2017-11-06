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

const createPanels = (projects, currentOpenProject) =>
  (projects.map((project) => {
    const id = project.id;
    return (
      <Panel key={id} header={header(project.name, project.deadline, id === currentOpenProject)} eventKey={id}>
        <Body
          tags={['sdfs', 'dfsdf', 'dfsdf']}
          description={project.description}
          employerName={project.owner.name}
          starts={project.owner.owner_score}
        />
      </Panel>
    );
  }));


class ListPanels extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentOpenProject: '',
    };
  }

  onProjectOpen(event) {
    if (this.state.currentOpenProject === event) {
      this.setState({ currentOpenProject: '' });
    } else {
      this.setState({ currentOpenProject: event });
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
          {createPanels(this.props.projects, this.state.currentOpenProject)}
        </Accordion>
      </div>
    );
  }
}

ListPanels.propTypes = {
  projects: PropTypes.array,
};

export default ListPanels;
