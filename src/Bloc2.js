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

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<LocationCityIcon />}
                    ><a 
                    target="_blank"  rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/10gYpmH3p3vsuJ_6HzNwpGRImDr0KeI4_/view"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Industrial</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ViewAgendaIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/0B2aNIJdl6_SHM1J5dFR2cXpsQVk"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Hydraulic & environment   </a>
                </Button>

                
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ViewAgendaIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.4shared.com/rar/Q6ZJWeb4fi/Jallouli_Civil_20.html"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Civil  </a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<DonutLargeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.dropbox.com/sh/756dqo22631ftm5/AAB6G9-tXh-g9MXsFEsL38Eja?dl=0"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Mechanical</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BlurCircularIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/1ueK6QedqoU9NMQmA5DnybI-kB6vNxmFv"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Electrical</a>
                </Button>
                                
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountTreeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1bPcbU-NXEaQjozg_q2NnZSsC-F-gXSh0"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Telecommunication</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BarChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1Im2SsnifY_WTuPFOgQOoDrQmM1aV9Yd7"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Modelisation for industry</a>
                </Button>    
                 

            </div>
            
        </React.Fragment>
    )
}
export default Bloc2;

