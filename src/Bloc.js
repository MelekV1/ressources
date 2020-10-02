import ComputerIcon from '@material-ui/icons/Computer';
import Button from '@material-ui/core/Button';
import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import InsertChartIcon from '@material-ui/icons/InsertChart';
function Bloc (){
    return (
        <React.Fragment>
            <div className="bloc">
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ComputerIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/0B5DxMtPdr4o3S2N1WW5hU2F2UVU"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Computer Science </a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<LocationCityIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/1-60bgBxHent4pGVKeMD8v-j6gQo-5MF1?fbclid=IwAR2RKDn4bb1IDy3qTV76Nsyta-WQHhi7RJDNmfEJmZrU9gnfRbkp2HiSHpY"
                    style={{textDecoration:"none" ,color:"white"}}>
                    </a>Industrial
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<DonutLargeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/11jFNrv41fWdMhtWcpaimLpF-dpO8lNQz?sort=13&direction=a&fbclid=IwAR1Ctuegh5_EUNdV80dQ7CToeDahTTbEvbzMlBAMKHbfZiunZEHzveTxEPg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    </a>Mechanical
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ViewAgendaIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/11jFNrv41fWdMhtWcpaimLpF-dpO8lNQz?sort=13&direction=a&fbclid=IwAR1Ctuegh5_EUNdV80dQ7CToeDahTTbEvbzMlBAMKHbfZiunZEHzveTxEPg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    </a>Civil & hydraulic 
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<InsertChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/0B_nMqhoN4D1rR0hOWEgwOG9zaWs?fbclid=IwAR1IwD58xCIZn7ebPYBKLu6dkU-OJSVMUTvzpyrf3HCmAJhJ6Eqp9gDPj_0"
                    style={{textDecoration:"none" ,color:"white"}}>
                    </a>Advanced Technique
                </Button>
            </div>
            
        </React.Fragment>
    )
}

export default Bloc;