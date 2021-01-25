import Button from '@material-ui/core/Button';
import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AllInboxIcon from '@material-ui/icons/AllInbox';
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
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AllInboxIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/1/folders/1RDGY0Q3WBO_OE1gyImUn1W2ybFuFo6AQ"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Tech Assets </a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountBalanceIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/0B4LUx9Ddr5dkeldVNGZIR3I3TVU"
                    style={{textDecoration:"none" ,color:"white"}}>
                    SupCom </a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountBalanceIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/0B-ljNGR4TfyBU1piVmNfc1VyT2c"
                    style={{textDecoration:"none" ,color:"white"}}>
                    ENSI </a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountBalanceIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1y4g6o-ueNbyW-IIuj7NS-uAavQYwJbGz?usp=sharing"
                    style={{textDecoration:"none" ,color:"white"}}>
                    ESEN </a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountBalanceIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/1/folders/1G8rOQKw2d5SU-R_iCJp99V-DA699naty?fbclid=IwAR0TjA-hcGtwB6P6loBKVXbnfP0vYGZUvcP3Y_NFhGJcryalx_NJ3Zgr3bs"
                    style={{textDecoration:"none" ,color:"white"}}>
                    FST</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountBalanceIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1yC-2ds-TtzLdwahynocXhG1Drn9WZUQ_?fbclid=IwAR0u2gWmAqij8B_kEtXeSbKYAUq5lpOmkUVjFfGBv4tTm46jgd9T5sD3skY"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Devops & Cloud </a>
                </Button>
        </div>
    )
}