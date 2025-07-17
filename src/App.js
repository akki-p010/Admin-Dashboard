import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import Topbar from "./Scenes/global/Topbar";
import Dashboard from "./Scenes/dashboard";
import Sidebar from "./Scenes/global/Sidebar";
import Team from "./Scenes/team";
import Contacts from "./Scenes/contacts";
import Invoices from "./Scenes/invoices/invoices";
import Form from "./Scenes/forms/index";
import Calendar from "./Scenes/calendar";
import FAQ from"./Scenes/faq";
import Bar from "./Scenes/bar";
import Pie from "./Scenes/pie";
import Line from "./Scenes/line";
import Geography from "./Scenes/geography";



function App() {
  const [theme, colorMode] = useMode();
  return (<colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path ="/" element = {<Dashboard />} />
            <Route path ="/team" element = {<Team />} />
            <Route path ="/contacts" element = {<Contacts />} />
            <Route path ="/invoices" element = {<Invoices />} />
            <Route path ="/form" element = {<Form />} />
            <Route path ="/calendar" element = {<Calendar />} />
            <Route path ="/faq" element = {<FAQ />} />
            <Route path ="/bar" element = {<Bar />} />
            <Route path ="/pie" element = {<Pie />} />
            <Route path ="/line" element = {<Line />} />
            <Route path ="/geography" element = {<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  );
}

export default App;




// // new one
// import { useState } from "react";
// import { colorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider, Box } from '@mui/material'; // Fixed typo: CssBaseLine → CssBaseline
// import { Routes, Route } from 'react-router-dom';
// import Topbar from "./Scenes/global/Topbar";
// import Dashboard from "./Scenes/dashboard";
// import Sidebar from "./Scenes/global/Sidebar";
// import Team from "./Scenes/team";
// import Contacts from "./Scenes/contacts";
// import Invoices from "./Scenes/invoices/invoices";
// import Form from "./Scenes/forms/index";
// import Calendar from "./Scenes/calendar";
// import FAQ from "./Scenes/faq";
// import Bar from "./Scenes/bar";
// import Pie from "./Scenes/pie";
// import Line from "./Scenes/line";
// import Geography from "./Scenes/geography";

// function App() {
//   const [theme, colorMode] = useMode();
//   // addedd extra
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
//   return (
//     <colorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {/* <Box sx={{ display: "flex" }}>
//           <Sidebar
//             isCollapsed={isSidebarCollapsed}
//             setIsCollapsed={setIsSidebarCollapsed}
//           /> */}

//           {/* Main Content Area */}
//           {/* <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               p: 3,
//               marginLeft: {
//                 xs: "0px",
//                 sm: isSidebarCollapsed ? "80px" : "270px", // Dynamic based on collapse state
//               },
//               width: {
//                 xs: "100%",
//                 sm: isSidebarCollapsed
//                   ? "calc(100% - 80px)"
//                   : "calc(100% - 270px)", // Dynamic width calculation
//               },
//               transition: "margin-left 0.3s ease, width 0.3s ease",
//             }}
//           > */}
//             <Topbar />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/geography" element={<Geography />} />
//             </Routes>
//           </Box>
//         </Box>
//       </ThemeProvider>
//     </colorModeContext.Provider>
//   );
// }

// export default App;