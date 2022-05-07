
function FileItem ({file, onClick}) {
  
  return (
    <tr onClick={onClick} style={{backgroundColor: file.selected ? 'gainsboro' : 'inherit'}}>
      <th>
        <input type="checkbox" checked={file.selected} readOnly ></input>
      </th>   
      <th>{file.name}</th> 
      <th>{file.device}</th> 
      <th >{file.path}</th> 
      <th>{file.status}</th>
    </tr>
  );
}

export default FileItem;