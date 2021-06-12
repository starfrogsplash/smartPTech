import React, { useState } from 'react';
import './App.css';
import { Table, Container, Input, Segment} from 'semantic-ui-react'
import {getPageViews, getUniquePageViews } from './utils/getViews'

const App = () => {
  const [dataPageViews, setDataPageViews] = useState([]);
  const [dataUniqueViews, setDataUniqueViews] = useState([]);

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      const textSplit = text.trim().split("\n");
      setDataPageViews(getPageViews(textSplit))
      setDataUniqueViews(getUniquePageViews(textSplit))
    };

    if(e.target.files[0]){
      reader.readAsText(e.target.files[0]);
    }
  };

  return (
    <div className="App">
        <Segment basic size='mini'/>
        <Container>
        <label htmlFor="file" className="ui icon button" title="inputLabel">
            <i className="file icon"/>
            Open File
        </label>
        <Input type="file" id="file" style={{"display":"none"}} onChange={(e) => showFile(e)} />
    </Container>
    <Segment basic/>
        <Container>
            <Table celled color='olive' title="totalViewsTable">
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={8}>Page</Table.HeaderCell>
                    <Table.HeaderCell>Views</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {dataPageViews.map((item, idx) => (
                  <Table.Row key={`${item.page}-${idx}`}>
                    <Table.Cell>{item.page}</Table.Cell>
                    <Table.Cell>{item.views}</Table.Cell>
                </Table.Row>
                ))
                }
                </Table.Body>
            </Table>
            </Container>
            <Segment basic size='mini'/>
            <Container>
            <Table celled color='yellow' title="uniqueViewsTable">
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={8}>Page</Table.HeaderCell>
                    <Table.HeaderCell >Unique Views</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {dataUniqueViews.map((item, idx) => (
                  <Table.Row key={`${item.page}-${idx}`}>
                    <Table.Cell>{item.page}</Table.Cell>
                    <Table.Cell>{item.uniqueViews}</Table.Cell>
                </Table.Row>
                ))
                }
                </Table.Body>
            </Table>
            </Container>
    </div>   
  );
}

export {App};
