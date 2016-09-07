/**
 *  @author guocailee
 *  @Date   2016-08-16
 */
export default () => {
  var data = []
  var setData = (originData) => {
    data = originData
  }

  var getSearchResults = (searchText) => {
    return data.filter((lower) => {
      angular.lowercase(searchText)
      return true
    })
  }
  return {
    setData: setData,
    getSearchResults: getSearchResults
  }
}
