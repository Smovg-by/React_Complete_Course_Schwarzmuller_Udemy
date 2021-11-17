import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {

  const datapointsValues = dataPoints.map(dataPoint => dataPoint.value)

  const totalMaximum = Math.max(...datapointsValues)

  return (
    <div className={'chart'}>
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
