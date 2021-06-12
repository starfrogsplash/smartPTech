import { render, screen, within } from '@testing-library/react';
import {App} from './App';
import {getPageViews, getUniquePageViews} from './utils/getViews'
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


it("the values are in the table A", () => {
  const values = [
    {page: '/help_page/1', views: 4},
    {page: '/home', views: 2},
    {page: '/about', views: 1},
    {page: '/index', views: 1},
    {page: '/about/2', views: 1},
    {page: '/contact', views: 1},
  ]

  const MyTable2 = ({ values }) => {
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

  render(<MyTable2 values={values} />);

  values.forEach((item) => {
    const row = screen.getByText(item.page).closest("td");
    const utils = within(row);
    expect(utils.getByText(item.page)).toBeInTheDocument();
  });
});

it("the values are in the table B", () => {
  const values = [
    {page: '/help_page/1', uniqueViews: 4},
    {page: '/home', uniqueViews: 2},
    {page: '/index', uniqueViews: 1},
    {page: '/contact', uniqueViews: 1},
    {page: '/about/2', uniqueViews: 1},
    {page: '/about', uniqueViews: 1},
  ]

  const MyTable2 = ({ values }) => {
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

  render(<MyTable2 values={values} />);

  values.forEach((item) => {
    const row = screen.getByText(item.page).closest("td");
    const utils = within(row);
    expect(utils.getByText(item.page)).toBeInTheDocument();
  });
});


const mockData = [
  "/help_page/1 126.318.035.038", 
  "/contact 184.123.665.067", 
  "/home 184.123.665.067", 
  "/about/2 444.701.448.104", 
  "/help_page/1 929.398.951.889", 
  "/index 444.701.448.104", 
  "/help_page/1 722.247.931.582", 
  "/about 061.945.150.735", 
  "/help_page/1 646.865.545.408", 
  "/home 235.313.352.950"
]

it('test function', () => {

  const resultArry = [
    {page: '/help_page/1', views: 4},
    {page: '/home', views: 2},
    {page: '/about', views: 1},
    {page: '/index', views: 1},
    {page: '/about/2', views: 1},
    {page: '/contact', views: 1},
  ]

  const result = getPageViews(mockData)
  expect(result).toEqual(resultArry)
})


it('test function', () => {

  const mockData = [
    "/help_page/1 126.318.035.038", 
    "/contact 184.123.665.067", 
    "/home 184.123.665.067", 
    "/about/2 444.701.448.104", 
    "/home 184.123.665.067", 
    "/help_page/1 929.398.951.889", 
    "/index 444.701.448.104", 
    "/help_page/1 722.247.931.582", 
    "/about 061.945.150.735", 
    "/help_page/1 126.318.035.038", 
    "/help_page/1 646.865.545.408", 
    "/home 235.313.352.950"
  ]

  const resultArry = [
    {page: '/help_page/1', uniqueViews: 4},
    {page: '/home', uniqueViews: 2},
    {page: '/index', uniqueViews: 1},
    {page: '/contact', uniqueViews: 1},
    {page: '/about/2', uniqueViews: 1},
    {page: '/about', uniqueViews: 1},
  ]

  const result = getUniquePageViews(mockData)

  expect(result).toEqual(resultArry)
})