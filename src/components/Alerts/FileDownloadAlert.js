import './Alert.css';

function FileDownloadAlert ({files, close}) {
    return (
    <div className='alert'>  
      <div className='alert-open'>  
        <section>
          {
            files.map((file, idx) => {
              if (file.selected) {
                return (
                  <div className="file-info" key={idx}>
                     <p> Path: {file.path}</p>
                     <p> Device: {file.device}</p>
                  </div>
                );
              }
            })
          }
          <button onClick={close}>Close</button> 
        </section> 
      </div>  
    </div> 
  );
}

export default FileDownloadAlert;