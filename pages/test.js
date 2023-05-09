import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>test</strong>
            <Viewer canvasId={'renderCanvas'} scenesRoot={'https://cdn.glitch.global/'} filePrefix={'dd6a816c-1b78-4786-8152-9598b3dba63b/surface_'} numFiles={1} />
        </Layout>
    )
}

export { LocalViewer }