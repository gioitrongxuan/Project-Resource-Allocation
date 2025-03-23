import UploadXlsx from './UploadXlsx';
import DataViewer from './DataViewer';

const InputData = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h1>Resource Allocation Tool</h1>
      <UploadXlsx />
      <DataViewer />
    </div>
  );
}
export default InputData;
