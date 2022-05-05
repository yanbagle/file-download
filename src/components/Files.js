import {useState} from 'react';
import FileItem from './FileItem';

function Files({filesData}) {  
  const [files, setFiles] = useState(filesData);
  
  return (
    <div>
      {
        files.map((file, idx) => {
          return (<FileItem key={idx} />);    
        })
      }
    </div>    
  );
}

export default Files;