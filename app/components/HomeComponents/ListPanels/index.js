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


class ListPanels extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const projectsPanels = this.props.projects.map((project, i) => {
      const id = `panelProject${i}`;
      return (
        <Panel key={id} header={header(project.name, project.deadline, false)} eventKey={id}>
          <Body
            tags={['sdfs', 'dfsdf', 'dfsdf']}
            description={project.description}
            employerName={project.owner.name}
            starts={project.owner.owner_score}
          />
        </Panel>
      );
    }
    );
    return (
      <Accordion >
        {projectsPanels}
      </Accordion>
    );
  }
}

ListPanels.propTypes = {
  projects: PropTypes.array,
};

export default ListPanels;
