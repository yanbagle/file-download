import {useState, useEffect} from 'react';
import FileItem from './FileItem';

function Files({filesData}) {  
  
  const [files, setFiles] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [allFilesSelected, setFilesSelected] = useState(false);
  
  const selectFile = (idx) => { // onClick select file
    files[idx].selected = !files[idx].selected;
    updateFilesCount(files[idx]);
    setFiles([...files]);
  }
  
  const selectAllFiles = () => {
    files.forEach((file, idx) => {
      file.selected = !allFilesSelected;
    });
    files[0].selected ? setSelectedCount(files.length) : setSelectedCount(0);
    setFilesSelected(!allFilesSelected);
  }
  
  const updateFilesCount = (file) => {
    file.selected ? setSelectedCount(selectedCount+1) : setSelectedCount(selectedCount-1)
  }
  
  useEffect(() => { 
    // updating files if file data from parent component changes
    setFiles(filesData);       
  }, [filesData]);
  
  return (
      <section>
        <header className="file-header">
          <input type="checkbox" onChange={selectAllFiles}/> 
          <h3>Selected { selectedCount > 0 && <span>{selectedCount}</span> } </h3>
          <h3>Download Selected</h3>
        </header>
        
        <table>
          <thead>
            <tr className="row-header">
              <th></th>
              {
                files.length && Object.keys(files[0]).map((field, idx) => {
                   if (field !== 'selected') {
                     return (<th className="row-header" key={idx}>{field}</th>);
                   }
                 })
              }
            </tr>
          </thead>
          <tbody>
            {files.map((file, idx) => {
              return (<FileItem 
                        key={idx} 
                        file={file} 
                        onClick={selectFile.bind(this, idx)}
                      />);    
            })}
          </tbody>
      </table>    
    </section>
  );
}

export default Files;