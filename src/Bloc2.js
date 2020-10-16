import ComputerIcon from '@material-ui/icons/Computer';
import Button from '@material-ui/core/Button';
import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BarChartIcon from '@material-ui/icons/BarChart';

function Bloc2 (){
    return (
        <React.Fragment>
            <div className="bloc" >

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ComputerIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1cIZGA6iZKSHZ2Ipxdlmwz5kfhq_Dktwm"

                    style={{textDecoration:"none" ,color:"white"}}>
                   Software engineering  </a>
                </Button>
{/*
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<LocationCityIcon />}
                    ><a 
                    target="_blank"  rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Industrial</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<DonutLargeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Mechanical</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ViewAgendaIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Civil & hydraulic </a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<InsertChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Advanced Technique</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BlurCircularIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Electrical</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountTreeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Telecommunication</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BarChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href=""
                    style={{textDecoration:"none" ,color:"white"}}>
                    Modelisation for industry</a>
                </Button>    
                 
*/}
            </div>
            
        </React.Fragment>
    )
}
export default Bloc2;

