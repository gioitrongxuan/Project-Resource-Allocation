import { useState, useEffect } from 'react';

const DataViewer = () => {
  const [data, setData] = useState({ projects: [], tasks: [], employees: [] });

  useEffect(() => {
    const handler = () => {
      const res = JSON.parse(localStorage.getItem('result'));
      if (res) setData(res);
    };
    window.addEventListener('dataReady', handler);
    return () => window.removeEventListener('dataReady', handler);
  }, []);

  return (
    <div>
      {['projects', 'tasks', 'employees'].map((table) => (
        <div key={table} style={{ marginTop: '20px' }}>
          <h2>{table.toUpperCase()}</h2>
          {data[table] && data[table].length > 0 ? (
            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {Object.keys(data[table][0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data[table].map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Không có dữ liệu cho {table}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataViewer;
