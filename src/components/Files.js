import {useState, useEffect} from 'react';
import FileItem from './FileItem';

function Files({filesData}) {  
  
  const [files, setFiles] = useState(filesData);
  
  return (
    <table>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Device</th>  
        <th>Path</th>
        <th>Status</th>
      </tr>
      <tbody>
        {files.map((file, idx) => {
          return (<FileItem key={idx} file={file} />);    
        })}
      </tbody>
    </table>    
  );
}

export default Files;