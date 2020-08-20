function getDate(date: string): string {
  return new Date(date).toISOString()
}

// Can be any value (not necessarily false)
// But date HAVE TO start from month
// Can be any format acceptable by Date constructor
export default {
  [getDate('08/21/2020 8:00')]: false,
  [getDate('08/20/2020 12:00')]: false,
  [getDate('08.20.2020 08:00')]: false,
  [getDate('08.21.2020 15:00')]: false,
  [getDate('08.21.2020 14:00')]: false,
  [getDate('08.21.2020 14:00')]: false,
  [getDate('08.21.2020 14:00')]: false,
  
}
