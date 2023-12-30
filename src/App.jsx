import "./App.css";
import log from "../public/log.png";
import { GoDotFill } from "react-icons/go";
// import { Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, TextField ,Button, Typography, Modal } from "@mui/material";
import { useState } from "react";
import ModForm from "./ModForm";
import { Button,Typography } from "@mui/material";
// import Modal from "./Modal";

/*
selectedItem=[
  {
    data:"Freshkart",
    isSelected:false,
  },
  {
    data:"Endless",
    isSelected:false,
  },
]
*/
 
function App() {
  const a = ["Endless", "Startless","Freskart"];
  const prtext = "Add new Task";
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);

  const handleOpenDialog = (type) => {
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogType(null);
  };
  

  return (
    <>
    <div className="flex w-full h-[100vh]">
    <div className="flex-col w-80 h-[100vh] border-r-2">
      <div className="flex w-full h-30 p-3.5 bg-white-600 ">
        <img src={log} height="15px" width="30px"></img>
        <p className="ml-3 text-2xl font-bold">Trade cards</p>
      </div>
    
      <hr/>
      <div className="flex-col bg-white w-full p-4"> 
        {/* <div className="w-full bg-fuchsia-200 rounded mt-2">
        
        </div> */}
        {a.map((e)=>{
          // eslint-disable-next-line react/jsx-key
          return <div className="text-xl p-2 w-full bg-[#EBEEFC] rounded mt-2">{e}</div>
        })}
        {/* {a.map((e)=>{
          <div className="text-xl p-2 w-full bg-fuchsia-200 rounded mt-2">{e}</div>



          // if(selected)
          // return <p className="text-xl p-2 w-full bg-fuchsia-200 rounded mt-2" onClick={()=>{setSelected(true)}}>{e}</p>
          // else
          // return <p className="text-xl p-2" onClick={()=>{setSelected(true)}}>{e}</p>
        })} */}
        
      </div>
      <hr/>
      <div className="p-4">
        <button className="text-[#3659E2]" onClick={() => handleOpenDialog('info')}><p className="">+ Add new Project</p></button>
        {openDialog && <ModForm dialogType={dialogType} onClose={handleCloseDialog} />}

        {/* <Button>Hello</Button> */}
        {/* <Modal/> */}
      </div>
    </div>
    <div className="flex-col w-full">
        <div className="flex-col p-4 w-full">
          <p className="text-xl font-bold">My Projects</p>
        </div>
        <hr/>
        {/* <div className="flex">
          <div className="flex-col  h-[91.2vh] w-80 p-4">
            <div className="flex rounded-3xl w-20 bg-[#EBEEFC] mt-1">
              <GoDotFill className="text-[#3659E2] m-1"/>
              <p className="text-[#3659E2]">To Do</p>
            </div>
            <div className="border-r-4 h-[80vh] m-5 ">
              
            </div>
          </div>
          <div className="border-r-4 w-80">
            Todo
          </div>
          <div className="border-r-4 w-80">Todo</div>
          <div className="w-80">Todo</div>
        </div> */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex-col w-full h-[91.2vh]">
            
            <div className="flex rounded-3xl w-20 bg-[#EBEEFC] m-6 ">
              <GoDotFill className="text-[#3659E2] m-1"/>
              <p className="text-[#3659E2] text-sm">To Do</p>
            </div>
            <div className="flex-col p-2 w-90 ml-1">
              <div className= "rounded-lg bg-[#ffffff] p-2 drop-shadow-lg">
              <div className="h-1"></div>
                  <p className="text-lg font-medium ml-2">Create a To Do App</p>
                  <div className="h-3"></div>
                  <div className="flex justify-between ml-1 text-sm font-thin">
                    <p>Start date</p>
                    <p className="mr-6">End date</p>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex justify-between ml-0 text-sm font-thin">
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                  </div>
                  <div className="h-3"></div>
              </div>
            </div>
            <div className="flex text-center h-7 p-1  ml-4 bg-[#EBEEFC] m-2 rounded-md justify-center text-[#3659E2]">
              <p className="text-sm">+</p>
              <Button onClick={() => handleOpenDialog('confirmation')}><Typography className="ml-2 text-sm" textTransform={"none"}>{prtext}</Typography></Button>
              {openDialog && <ModForm dialogType={dialogType} onClose={handleCloseDialog} />}

            </div>
          </div>
          {/* Ending */}
          <div className="flex-col w-full h-[91.2vh] border-l-2">
            <div className="flex rounded-3xl w-28 bg-[#faeaf6] m-6">
              <GoDotFill className="text-[#EE46BC] m-1"/>
              <p className="text-[#EE46BC] text-sm">In Progress </p>
            </div>
            <div className="flex-col p-2 w-90 ml-1">
              <div className= "rounded-lg bg-[#ffffff] p-2 drop-shadow-lg">
              <div className="h-1"></div>
                  <p className="text-lg font-medium ml-2">Create a To Do App</p>
                  <div className="h-3"></div>
                  <div className="flex justify-between ml-1 text-sm font-thin">
                    <p>Start date</p>
                    <p className="mr-6">End date</p>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex justify-between ml-0 text-sm font-thin">
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                  </div>
                  <div className="h-3"></div>
              </div>
            </div>
            <div className="flex text-center h-7 p-1  ml-4 bg-[#faeaf6] m-2 rounded-md justify-center text-[#3659E2]">
              <p className="text-sm text-[#EE46BC]">+</p>
              <Button onClick={() => handleOpenDialog('confirmation')}><Typography className="ml-2 text-sm" textTransform={"none"}><p className="text-sm font-[0.5px] text-[#EE46BC]">{prtext}</p></Typography></Button>
              {openDialog && <ModForm dialogType={dialogType} onClose={handleCloseDialog} />}
            </div>
          </div>
          {/* Ending */}
          <div className="flex-col w-full h-[91.2vh] border-l-2">
            <div className="flex rounded-3xl w-28 bg-[#e4f5ff] m-6">
              <GoDotFill className="text-[#3FA1E3] m-1"/>
              <p className="text-[#3FA1E3] text-sm">In Review </p>
            </div>
            <div className="flex-col p-2 w-90 ml-1">
              <div className= "rounded-lg bg-[#ffffff] p-2 drop-shadow-lg">
              <div className="h-1"></div>
                  <p className="text-lg font-medium ml-2">Create a To Do App</p>
                  <div className="h-3"></div>
                  <div className="flex justify-between ml-1 text-sm font-thin">
                    <p>Start date</p>
                    <p className="mr-6">End date</p>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex justify-between ml-0 text-sm font-thin">
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                  </div>
                  <div className="h-3"></div>
              </div>
            </div>
            <div className="flex text-center h-7 p-1  ml-4 bg-[#e4f5ff] m-2 rounded-md justify-center text-[#3659E2]">
              <p className="text-sm text-[#3FA1E3]">+</p>
              <Button onClick={() => handleOpenDialog('confirmation')}><Typography className="ml-2 text-sm" textTransform={"none"}><p className="text-sm font-[0.5px] text-[#3FA1E3]">{prtext}</p></Typography></Button>
              {openDialog && <ModForm dialogType={dialogType} onClose={handleCloseDialog} />}
            </div>
          </div>
          {/* Ending */}
          <div className="flex-col w-full h-[91.2vh] border-l-2">
            <div className="flex rounded-3xl w-28 bg-[#e0f8e3] m-6">
              <GoDotFill className="text-[#12BB23] m-1"/>
              <p className="text-[#12BB23] text-sm">Completed</p>
            </div>
            <div className="flex-col p-2 w-90 ml-1 mr-1">
              <div className= "rounded-lg bg-[#ffffff] p-2 drop-shadow-lg">
              <div className="h-1"></div>
                  <p className="text-lg font-medium ml-2">Create a To Do App</p>
                  <div className="h-3"></div>
                  <div className="flex justify-between ml-1 text-sm font-thin">
                    <p>Start date</p>
                    <p className="mr-6">End date</p>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex justify-between ml-0 text-sm font-thin">
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full text-xs">12/02/2024</p>
                    </div>
                  </div>
                  <div className="h-3"></div>
              </div>
            </div>
            <div className="flex-col p-2 w-90 ml-1 mr-1">
              <div className= "rounded-lg bg-[#ffffff] p-2 drop-shadow-lg">
              <div className="h-1"></div>
                  <p className="text-lg font-medium ml-2">Create a To Do App</p>
                  <div className="h-3"></div>
                  <div className="flex justify-between ml-1 text-sm font-thin">
                    <p>Start date</p>
                    <p className="mr-6">End date</p>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex justify-between ml-0 text-sm font-thin">
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                    <div className="flex text-center rounded-md w-20 h-[3vh] bg-[#EBEEFC] ">
                      <p className="text-[#3659E2] w-full">12/02/2024</p>
                    </div>
                  </div>
                  <div className="h-3"></div>
              </div>
            </div>
            <div className="flex text-center h-7 p-1 ml-4 bg-[#E7F8E9] m-2 rounded-md justify-center text-[#3659E2]">
              <p className="text-sm text-[#12BB23]">+</p>
              <Button onClick={() => handleOpenDialog('confirmation')}><Typography className="ml-2 text-sm" textTransform={"none"}><p className="text-sm font-[0.5px] text-[#12BB23]">{prtext}</p></Typography></Button>
              {openDialog && <ModForm dialogType={dialogType} onClose={handleCloseDialog} />}
            </div>
          </div>

        </div>
    </div>
    </div>
    
    </>
    );
  }
  
  export default App;
  