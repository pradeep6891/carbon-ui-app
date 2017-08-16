import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, gu } from 'carbon-ui';


class Body extends Component {
  render() {
    return (
	 <div>
		<p>
			I am in Home Page now.
		</p>
          <View>
    <DataTable>
      <DataTable.HeaderRow>
        <DataTable.HeaderCell>Name</DataTable.HeaderCell>
        <DataTable.HeaderCell>Calories</DataTable.HeaderCell>
        <DataTable.HeaderCell>Goodness</DataTable.HeaderCell>
      </DataTable.HeaderRow>
      <DataTable.Row>
        <DataTable.Cell>Cappuccino</DataTable.Cell>
        <DataTable.Cell>150</DataTable.Cell>
        <DataTable.Cell>Solid</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Latte</DataTable.Cell>
        <DataTable.Cell>300</DataTable.Cell>
        <DataTable.Cell>It's aight</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Mocha</DataTable.Cell>
        <DataTable.Cell>400</DataTable.Cell>
        <DataTable.Cell>😍</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </View>
	 </div>
      
    );
  }
}

export default Body;
