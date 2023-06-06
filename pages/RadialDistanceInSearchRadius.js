import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Radial Distance in Search Radius</strong>
            <Viewer canvasId={'renderCanvas'} scenesRoot={'https://cdn.glitch.global/'} filePrefix={'dd6a816c-1b78-4786-8152-9598b3dba63b/MetricRadialDistanceInSearch'} numFiles={1} />

        </Layout>
    )
}

export { LocalViewer }