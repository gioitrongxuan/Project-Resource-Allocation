import UploadXlsx from './components/UploadXlsx';
import DataViewer from './components/DataViewer';
import InputData from './components/InputData';
import TaskGantt from './components/TaskGantt';
import TaskInPast from './components/TaskInPast';
import ProcessedData from './components/ProcessedData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<InputData />} />
      <Route path="/gannt-chart" element={<TaskGantt/>} />
      <Route path="/task-in-past" element={<TaskInPast />} />
      <Route path="/processed-data" element={<ProcessedData />} />
    </Routes>
  </Router>
  );
}

export default App;
