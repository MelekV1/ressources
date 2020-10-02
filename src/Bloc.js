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
function Bloc (){
    return (
        <React.Fragment>
            <div className="bloc" >
            <h3>Always Great Because we built it together</h3>

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
                    target="_blank"  rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/1-60bgBxHent4pGVKeMD8v-j6gQo-5MF1?fbclid=IwAR2RKDn4bb1IDy3qTV76Nsyta-WQHhi7RJDNmfEJmZrU9gnfRbkp2HiSHpY"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Industrial</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<DonutLargeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/11jFNrv41fWdMhtWcpaimLpF-dpO8lNQz?sort=13&direction=a&fbclid=IwAR1Ctuegh5_EUNdV80dQ7CToeDahTTbEvbzMlBAMKHbfZiunZEHzveTxEPg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Mechanical</a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<ViewAgendaIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/11jFNrv41fWdMhtWcpaimLpF-dpO8lNQz?sort=13&direction=a&fbclid=IwAR1Ctuegh5_EUNdV80dQ7CToeDahTTbEvbzMlBAMKHbfZiunZEHzveTxEPg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Civil & hydraulic </a>
                </Button>

                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<InsertChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/0B_nMqhoN4D1rR0hOWEgwOG9zaWs?fbclid=IwAR1IwD58xCIZn7ebPYBKLu6dkU-OJSVMUTvzpyrf3HCmAJhJ6Eqp9gDPj_0"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Advanced Technique</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BlurCircularIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/1zxWX55wS_jfLMLnZy9OXbchxCz8ni8NW?fbclid=IwAR0b8ovjRvf7g1B6Q9UYCsiaAKZ6fO3t9S-QKQqoRbxbG2zqh_LIDSEl-Vg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Electrical</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<AccountTreeIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/0B8bUiFWXjAAyVjFscGV2Rmg0Zkk?fbclid=IwAR1oxgQ2YerV03EXKYDUzCXwl10ygVorfOBXWA43JOy6gvbO-QsIpgBqqD0"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Telecommunication</a>
                </Button>
                <Button
                    variant="contained" color="primary" size="small"
                    startIcon={<BarChartIcon />}
                    ><a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://drive.google.com/drive/u/0/folders/16gY31zE-bqv9XL5lhSSejNquO45WnkQA?fbclid=IwAR2Jlm-_zIKxLi-PzbcrJvDamOil9UgO3h93_qHaL97_cOKARbby4fDbFXg"
                    style={{textDecoration:"none" ,color:"white"}}>
                    Modelisation for industry</a>
                </Button>    
                 

            </div>
            
        </React.Fragment>
    )
}

export default Bloc;