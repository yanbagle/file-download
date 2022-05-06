import './Files.css';

function FileItem ({file}) {
  
  console.log(file);
  return (
    <tr className="file-item-row">
      <th>
        <input type="checkbox"></input>
      </th>   
      <th className="file-item-col">{file.name}</th> 
      <th className="file-item-col">{file.device}</th> 
      <th className="file-item-col">{file.path}</th> 
      <th className="file-item-col">{file.status}</th>
    </tr>
  );
}

export default FileItem;