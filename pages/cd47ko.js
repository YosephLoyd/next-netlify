import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Mouse CD47KO Red Blood Cells</strong>
            <Viewer canvasId={'renderCanvas'} scenesRoot={'https://cdn.glitch.global/'} filePrefix={'dd6a816c-1b78-4786-8152-9598b3dba63b/mrbccd47ko_'} numFiles={100} />

        </Layout>
    )
}

export { LocalViewer }