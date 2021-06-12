import { render, screen, within } from '@testing-library/react';
import {App} from './App';
import { Table } from 'semantic-ui-react'

it('renders input', () => {
  const {queryAllByTitle} = render(<App />)
  const linkElement = screen.getByText("Open File");
  const title = queryAllByTitle('inputLabel')
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeTruthy;
});

it('renders Table', () => {
  const {queryAllByTitle} = render(<App />)
  const title = queryAllByTitle('totalViewsTable')
  const title2 = queryAllByTitle('uniqueViewsTable')
  expect(title).toBeTruthy;
  expect(title2).toBeTruthy;
});


it("the values are in the table for page Views", () => {
  const values = [
    {page: '/help_page/1', views: 4},
    {page: '/home', views: 2},
    {page: '/about', views: 1},
    {page: '/index', views: 1},
    {page: '/about/2', views: 1},
    {page: '/contact', views: 1},
  ]

  const AppTest = ({ values }) => {
    return (
      <Table celled color='olive' title="totalViewsTable">
      <Table.Header>
      <Table.Row>
          <Table.HeaderCell width={8}>Page</Table.HeaderCell>
          <Table.HeaderCell>Views</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {values.map((item, idx) => (
        <Table.Row key={`${item.page}-${idx}`}>
          <Table.Cell>{item.page}</Table.Cell>
          <Table.Cell>{item.views}</Table.Cell>
      </Table.Row>
      ))
      }
      </Table.Body>
  </Table>
  )};

  render(<AppTest values={values} />);

  values.forEach((item) => {
    const row = screen.getByText(item.page).closest("td");
    const utils = within(row);
    expect(utils.getByText(item.page)).toBeInTheDocument();
  });
});

it("the values are in the table for unique views", () => {
  const values = [
    {page: '/help_page/1', uniqueViews: 4},
    {page: '/home', uniqueViews: 2},
    {page: '/index', uniqueViews: 1},
    {page: '/contact', uniqueViews: 1},
    {page: '/about/2', uniqueViews: 1},
    {page: '/about', uniqueViews: 1},
  ]

  const AppTest = ({ values }) => {
    return (
      <Table celled color='olive' title="totalViewsTable">
      <Table.Header>
      <Table.Row>
          <Table.HeaderCell width={8}>Page</Table.HeaderCell>
          <Table.HeaderCell>Views</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {values.map((item, idx) => (
        <Table.Row key={`${item.page}-${idx}`}>
          <Table.Cell>{item.page}</Table.Cell>
          <Table.Cell>{item.uniqueViews}</Table.Cell>
      </Table.Row>
      ))
      }
      </Table.Body>
  </Table>
  )};

  render(<AppTest values={values} />);

  values.forEach((item) => {
    const row = screen.getByText(item.page).closest("td");
    const utils = within(row);
    expect(utils.getByText(item.page)).toBeInTheDocument();
  });
});
