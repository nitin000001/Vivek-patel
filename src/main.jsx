// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./Components/Layout";

// Dahisar Pages
import DahisarPage from "./Pages/Dahisar/DahisarPage";
import DahisarDetails from "./Pages/Dahisar/DahisarDetails";

// Borivali Pages
import BorivaliPage from "./Pages/Borivali/BorivaliPage";
import BorivaliDetails from "./Pages/Borivali/BorivaliDetails";

// Kandivali Pages
import KandivaliPage from "./Pages/Kandivali/KandivaliPage";
import KandivaliDetails from "./Pages/Kandivali/KandivaliDetails";

// New Pages: Andheri, Malad, Goregaon
import AndheriPage from "./Pages/Andheri/AndheriPage";
import AndheriDetails from "./Pages/Andheri/AndheriDetails";

import MaladPage from "./Pages/Malad/MaladPage";
import MaladDetails from "./Pages/Malad/MaladDetails";

import GoregaonPage from "./Pages/Goregoan/GoregaonPage";
import GoregaonDetails from "./Pages/Goregoan/GoregaonDetails";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* Main Layout with Nested Routes */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<App />} />
          
//           {/* Dahisar */}
//           <Route path="dahisar" element={<DahisarPage />} />
//           <Route path="dahisar/details" element={<DahisarDetails />} />

//           {/* Borivali */}
//           <Route path="borivali" element={<BorivaliPage />} />
//           <Route path="borivali/details" element={<BorivaliDetails />} />
          
//           {/* Kandivali */}
//           <Route path="kandivali" element={<KandivaliPage />} />
//           <Route path="kandivali/details" element={<KandivaliDetails />} />

//           {/* Andheri */}
//           <Route path="andheri" element={<AndheriPage />} />
//           <Route path="andheri/details" element={<AndheriDetails />} />

//           {/* Malad */}
//           <Route path="malad" element={<MaladPage />} />
//           <Route path="malad/details" element={<MaladDetails />} />

//           {/* Goregaon */}
//           <Route path="goregaon" element={<GoregaonPage />} />
//           <Route path="goregaon/details" element={<GoregaonDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
