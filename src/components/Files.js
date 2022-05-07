import {useState, useEffect} from 'react';
import FileItem from './FileItem';
import './Files.css';

function Files({filesData}) {  
  
  const [files, setFiles] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [allFilesSelected, setFilesSelected] = useState(false);
  const [ableToDownload, setAbleToDownload] = useState(true);
  
  // onClick select file
  const selectFile = (idx) => { 
    files[idx].selected = !files[idx].selected;
    setFilesSelected(false);
    updateFilesCount(files[idx]);
    setFiles([...files]);
  }
  
  // onClick select all files
  const selectAllFiles = () => { 
    files.forEach((file, idx) => {
      file.selected = !allFilesSelected;
    });
    updateFilesCount(files[0], true);
    setFilesSelected(!allFilesSelected);
  }
  
  const downloadFiles = () => {
    // validate if selected files can be downloaded
    let canDownload = true;
    for (let file of files) {
      if (file.selected && file.status !== 'available') {
        canDownload = false;
        break;
      }
    }
    setAbleToDownload(canDownload);
    
    if (canDownload) {
      // alert box
      
    } else {
      // display error message
    }
    
  }
  
  // keeps track of file count
  const updateFilesCount = (file, selectAll = false) => { 
    if (selectAll) {
      file.selected ? setSelectedCount(files.length) : setSelectedCount(0);
    } else {
      file.selected ? setSelectedCount(selectedCount+1) : setSelectedCount(selectedCount-1)
    }
  }
  
  useEffect(() => { 
    // updating files if file data from parent component changes
    setFiles(filesData);       
  }, [filesData]);
  
  return (
      <section>
        <header className="file-header">
          <input type="checkbox" checked={allFilesSelected} onChange={selectAllFiles}/> 
          {
            selectedCount ? 
              <h3> Selected {selectedCount} </h3> : <h3> None Selected </h3>
          }
          <h3 onClick={downloadFiles}> Download Selected </h3>
          {!ableToDownload && <p className="error"> cannot download files that are unavailble </p>}
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