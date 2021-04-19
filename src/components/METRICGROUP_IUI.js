import { MetricGroup, Metric } from '@instructure/ui'

const METRICGROUP_IUI = () => {
  return (
      <MetricGroup>
        <Metric renderLabel="Grade" renderValue="80%" />
        <Metric renderLabel="Late" renderValue="4" />
        <Metric renderLabel="Missing" renderValue="2" />
      </MetricGroup>
  )
}

export default METRICGROUP_IUI