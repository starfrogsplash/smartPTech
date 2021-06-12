import {getPageViews, getUniquePageViews} from './getViews'

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

it('returns correct page data with number of views from getPageViews fnc', () => {

  const result = [
    {page: '/help_page/1', views: 4},
    {page: '/home', views: 2},
    {page: '/about', views: 1},
    {page: '/index', views: 1},
    {page: '/about/2', views: 1},
    {page: '/contact', views: 1},
  ]

  const getUniquePageViewsResult = getPageViews(mockData)
  expect(getUniquePageViewsResult).toEqual(result)
})


it('returns correct page data with unique views from getUniquePageViews fnc', () => {

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

  const result = [
    {page: '/help_page/1', uniqueViews: 4},
    {page: '/home', uniqueViews: 2},
    {page: '/index', uniqueViews: 1},
    {page: '/contact', uniqueViews: 1},
    {page: '/about/2', uniqueViews: 1},
    {page: '/about', uniqueViews: 1},
  ]

  const getUniquePageViewsResult = getUniquePageViews(mockData)

  expect(getUniquePageViewsResult).toEqual(result)
})