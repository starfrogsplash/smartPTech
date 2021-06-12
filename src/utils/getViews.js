
const getPageViews = (data) => {
    const dataSplit = data.map(record => record.split(' '))

    let dataRecord = dataSplit.reduce((acc, page) => {
        if(acc[page[0]]){
            acc[page[0]] ++
        } else {
            acc[page[0]] = 1
        }
        return acc
      }, {})

      let pageRecords = []

      for (let page in dataRecord){
            const pageInfo = {
                page,
                views: dataRecord[page]
            }
            pageRecords.push(pageInfo)
      }

      return pageRecords.sort((a, b) => (b.views > a.views) ? 1 : -1)
}

const getUniquePageViews = (data) => {
    const sorted = data.sort().map(record => record.split(' '))

    let set = new Set(sorted.map(JSON.stringify))
    let arr2 = Array.from(set).map(JSON.parse)

    let yUnique = arr2.reduce((acc, page) => {
        if(acc[page[0]]){
            acc[page[0]] ++
        } else {
            acc[page[0]] = 1
        }
        return acc
      }, {})

      let pageRecords = []

      for (let page in yUnique){
            const pageInfo = {
                page,
                uniqueViews: yUnique[page]
            }

            pageRecords.push(pageInfo)
      }

    return pageRecords.sort((a, b) => (b.uniqueViews > a.uniqueViews) ? 1 : -1)
}

export{
    getPageViews,
    getUniquePageViews
}