import React, { Component } from 'react';
import {observer} from 'mobx-react';
import Services from '../components/Services';
import Tasks from '../components/Tasks';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
  button: {
    margin: 0.6 + 'rem'
  }
};

const Dashboard = observer(
  class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedServices: []
      };
    }

    onServiceSelection(selectedServices) {
      this.setState({
        selectedServices: selectedServices
      });
    }

    render() {
      const {nodeStore} = this.props.route;

      return (
        <div>
          <FlatButton
            label="DONT Create Service"
            containerElement={<Link to="/services/create" />}
            primary={true}
            style={styles.button}
            icon={<i className="material-icons">add</i>}
          />
          <Services
           services={nodeStore.services}
           onSelection={this.onServiceSelection.bind(this)}
           selectedServices={this.state.selectedServices}/>
          <Tasks
           tasks={nodeStore.tasks}
           selectedServices={this.state.selectedServices}/>
        </div>
      );
    }
  }
);

export default Dashboard;
