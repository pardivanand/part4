import React, { useState } from 'react';

function Mapdemo(props) {
  const [subjects, setSubjects] = useState(props.subjects);
  const [newSub, setNewSub] = useState('');

  const addSubject = (event) => {
    event.preventDefault();
    console.log('Form submitted', event.target);

    const subObject = {
      name: newSub,
      id: subjects.length + 1,
    };

    setSubjects([...subjects, subObject]);
    setNewSub('');
  };

  const handleSubadd = (event) => {
    console.log('Button clicked', event.target);
    setNewSub(event.target.value);
  };

  return (
    <div>
      <center>
        <table className="center" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Sub.id</th>
              <th style={styles.tableHeader}>Sub.Name</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((val, key) => (
              <tr key={key} style={styles.tableRow}>
                <td style={styles.tableCell}>{val.id}</td>
                <td style={styles.tableCell}>{val.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
      <form onSubmit={addSubject}>
        <input onChange={handleSubadd} value={newSub} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const styles = {
  tableHeader: {
    border: '1px solid black',
    padding: '8px',
  },
  tableRow: {
    border: '1px solid black',
  },
  tableCell: {
    border: '1px solid black',
    padding: '8px',
  },
};

export default Mapdemo;