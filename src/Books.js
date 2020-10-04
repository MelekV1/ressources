import Button from '@material-ui/core/Button';
import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export default  function Books(){
    return(
        <div className="bloc" >

        <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<LibraryBooksIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/1/folders/1oqOct-bm8slJ51XF0Hmu3kkPLR67irag"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Books ! </a>
                </Button>
        </div>
    )
}