import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IdField from '../IdField';

class Tasks extends Component {
  render() {
    if(!this.props.tasks || !this.props.tasks.length || !this.props.selectedServices.length) {
      return (<div></div>);
    } else {
      const filteredTasks =
        this.props.tasks.filter((task) => 
          this.props.selectedServices.indexOf(task.ServiceID) !== -1
        );

      return (
        <div>
          <hr />
          <Subheader>Tasks</Subheader>
          <Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Image</TableHeaderColumn>
                <TableHeaderColumn>Desired state</TableHeaderColumn>
                <TableHeaderColumn>Current state</TableHeaderColumn>
                <TableHeaderColumn>Node ID</TableHeaderColumn>
                <TableHeaderColumn>Internal IP</TableHeaderColumn>
                <TableHeaderColumn>Error</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {filteredTasks.map((task, index) => (
                <TableRow key={index}>
                  <TableRowColumn><IdField value={task.ID}></IdField></TableRowColumn>
                  <TableRowColumn>{task.Spec.ContainerSpec.Image}</TableRowColumn>
                  <TableRowColumn>{task.DesiredState}</TableRowColumn>
                  <TableRowColumn>{task.Status.State}</TableRowColumn>
                  <TableRowColumn>{task.NodeID}</TableRowColumn>
                  <TableRowColumn>{task.NetworksAttachments[0].Addresses}</TableRowColumn>
                  <TableRowColumn>{task.Status.Err}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }
  }
}

export default Tasks;

