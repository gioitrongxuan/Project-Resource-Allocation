import { useState } from 'react';
import * as XLSX from 'xlsx';
import axiosInstance from '../apis/index';

const UploadXlsx = () => {
  const [file, setFile] = useState(null);

  const handleParse = async () => {
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const sheetsData = {};

      wb.SheetNames.forEach(sheetName => {
        const ws = wb.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(ws);
        sheetsData[sheetName] = json.map(row => ({
          Summary: row['Summary'],
          'Issue key': row['Issue key'],
          Description: row['Description'],
          'Issue id': row['Issue id'],
          'Parent id': row['Parent id'],
          'Issue Type': row['Issue Type'],
          Status: row['Status'],
          'Project key': row['Project key'],
          'Project name': row['Project name'],
          'Project type': row['Project type'],
          'Project lead': row['Project lead'],
          Priority: row['Priority'],
          Resolution: row['Resolution'],
          Assignee: row['Assignee'],
          Reporter: row['Reporter'],
          Creator: row['Creator'],
          Created: row['Created'],
          Updated: row['Updated'],
          Resolved: row['Resolved'],
          
        }));
      });

      const res = await axiosInstance.post('/files/json', sheetsData);
      const result = await res.data;
      localStorage.setItem('result', JSON.stringify(result));
      window.dispatchEvent(new Event('dataReady'));
    };

    reader.readAsBinaryString(file);
  };

  const handleUseServerFile = async () => {
    const res = await axiosInstance.get('/files/read-server-file/ENTMQMAAS_PROJECTS.xlsx');
    const result = res.data;
    console.log(result);
    localStorage.setItem('result', JSON.stringify(result));
    window.dispatchEvent(new Event('dataReady'));
  };
  const handleViewGanttChart = async () => {
    const data = JSON.parse(localStorage.getItem('result'));
    console.log(data.tasks);
    window.location.href = '/gannt-chart';
  };


  return (
    <div style={{ marginBottom: '30px' }}>
      <input type="file" accept=".xlsx" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleParse} disabled={!file} style={{ marginLeft: '10px' }}>
        Parse & Send JSON
      </button>
      <button onClick={handleUseServerFile} style={{ marginLeft: '10px' }}>
        Dùng file mẫu từ server
      </button>
      <button onClick={handleViewGanttChart} style={{ marginLeft: '10px' }}>
        Xem biểu đồ:
      </button>
    </div>
  );
};

export default UploadXlsx;
