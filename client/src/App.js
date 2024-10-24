import React, { useEffect } from 'react'
import Header from './pages/header/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Chat from './pages/Chat/Chat'
import { useDispatch, useSelector } from "react-redux";
import useAutoLogin from "./hooks/useAutoLogin";
import useTokenRefresh from './hooks/useTokenRefresh'
import Protected from './protected/protected'
import Unauthorized from './pages/unauth/unauthorized'
import { loadUserFromStorage } from './store/authSlice'


import DraggableList from './components/practiceDrag'
import CategoryProductList from './components/CategoryProductList'
import FormHeader from './pages/header/formHeader'
import PrivateRoute from './protected/routes'
import BatchManufacturingFormPage1 from './pages/forms/tablet arex 10mg/dispensing/page1'
import BatchManufacturingFormPage4 from './pages/forms/tablet arex 10mg/mixing/page4'
import Dispensing from './pages/forms/tablet arex 10mg/dispensing/dispensing'
import BatchManufacturingFormPage5 from './pages/forms/tablet arex 10mg/mixing/page5'
import ManufacturingProcessTable from './pages/forms/tablet arex 10mg/mixing/page6'
import WeightGranulesYield from './pages/forms/tablet arex 10mg/mixing/page7'
import RequestForAnalysis from './pages/forms/tablet arex 10mg/mixing/page8'
import BatchManufacturingFormPage7 from './pages/forms/tablet arex 10mg/mixing/page7'
import BatchManufacturingFormPage8 from './pages/forms/tablet arex 10mg/mixing/page8'
import BatchManufacturingFormPage6 from './pages/forms/tablet arex 10mg/mixing/page6'
import Mixing from './pages/forms/tablet arex 10mg/mixing/mixing'
import Component from './pages/forms/tablet arex 10mg/compression/page9'
import Component1 from './pages/forms/tablet arex 10mg/compression/page10'
import BatchManufacturingFormPage10 from './pages/forms/tablet arex 10mg/compression/page10'
import BatchManufacturingFormPage11 from './pages/forms/tablet arex 10mg/compression/page11'
import BatchManufacturingFormPage12 from './pages/forms/tablet arex 10mg/compression/page12'
import Component13 from './pages/forms/tablet arex 10mg/compression/page13'
import BatchManufacturingFormPage14 from './pages/forms/tablet arex 10mg/compression/page14'
import BatchManufacturingFormPage15 from './pages/forms/tablet arex 10mg/compression/page15'
import BatchManufacturingFormPage17 from './pages/forms/tablet arex 10mg/compression/page17'
import BatchManufacturingFormPage18 from './pages/forms/tablet arex 10mg/compression/page18'
import Compression from './pages/forms/tablet arex 10mg/compression/compression'
import BatchManufacturingFormPage19 from './pages/forms/tablet arex 10mg/coating/page19'
import BatchManufacturingFormPage20 from './pages/forms/tablet arex 10mg/coating/page20'
import BatchManufacturingFormPage21 from './pages/forms/tablet arex 10mg/coating/page21'
import BatchManufacturingFormPage22 from './pages/forms/tablet arex 10mg/coating/page22'
import BatchManufacturingFormPage23 from './pages/forms/tablet arex 10mg/coating/page23'
import Coating from './pages/forms/tablet arex 10mg/coating/coating'
import TabsWrappedLabel, { CustomTabPanel } from './pages/forms/tablet arex 10mg/FullProcess'
import EquipmentTable from './components/Machines'
import ProductList from './components/Products'
import { Box, CircularProgress } from '@mui/material'
import Report from './reports/Report'
import BatchManufacturingRecord from './pages/forms/tablet arex 10mg/p'
import LineClearanceForm from './pages/forms/tablet arex 10mg/p'
import WeightOfGranules from './pages/forms/tablet arex 10mg/p'
import PharmaceuticalForms from './pages/forms/tablet arex 10mg/p'



const App = () => {
  const isAuth = useSelector(state => state.user.auth);
  const userRole = useSelector(state => state.user.role);
  console.log('Role: ', userRole);
  const user = useSelector(state => state.user);
  console.log('User: ', user);
  console.log('Authenticated: ', isAuth);
  const loading = useAutoLogin();
  useTokenRefresh();
  const dispatch = useDispatch();

  useEffect(() => {
      // Load user from local storage when the app mounts
      dispatch(loadUserFromStorage());
  }, [dispatch]);

  return loading ?
    <Box sx={{ display: 'flex' }}>
  <CircularProgress />
    </Box>
    : (
  // return (
    <div>
    {/* <Header></Header> */}
    <Routes>
      <Route path='/login' element= {<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<CategoryProductList />} />
        <Route path='/form-header' element={<FormHeader />} />
        <Route path='/dispensing' element={<Dispensing />} />
        <Route path='/mixing' element={<Mixing />} />
        <Route path='/compression' element={<Compression />} />
        <Route path='/coating' element={<Coating />} />
        <Route path='/machines' element={<EquipmentTable />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/report' element={<Report />} />
        <Route path='/p' element={<PharmaceuticalForms />} />
        
        




        <Route path='/component' element={<Component />} />
        <Route path='/component1' element={<BatchManufacturingFormPage10 />} />
        <Route path='/component11' element={<BatchManufacturingFormPage11 />} />
        <Route path='/component12' element={<BatchManufacturingFormPage12 />} />
        <Route path='/component13' element={<Component13 />} />
        <Route path='/component14' element={<BatchManufacturingFormPage14 />} />
        <Route path='/component15' element={<BatchManufacturingFormPage15 />} />
        <Route path='/component17' element={<BatchManufacturingFormPage17 />} />
        <Route path='/component19' element={<BatchManufacturingFormPage19 />} />
        <Route path='/component20' element={<BatchManufacturingFormPage20 />} />
        <Route path='/component21' element={<BatchManufacturingFormPage21 />} />
        <Route path='/component22' element={<BatchManufacturingFormPage22 />} />
        <Route path='/component23' element={<BatchManufacturingFormPage23 />} />
        <Route path='/tabs' element={<TabsWrappedLabel />} />
















        {/* <PrivateRoute 
                            element={<NextPage />} 
                            requiredFields={['fieldName1', 'fieldName2']} // Specify required fields here
                        /> */}
        {/* <Route path='/page2' element={<BatchManufacturingFormPage2 />} /> */}
        {/* <Route path='/page2' element={
          <PrivateRoute
            element={<BatchManufacturingFormPage2 />}
            requiredFields={['date', 'lineClearance','department','section','currentProduct', 'currentProductBatchNo','previousProduct', 'previousProductBatchNo', 'signature', 'cartons', 'documents', 'rawMaterial', 'remnantOfPreviousProduct', 'area', 'weighingBalance', 'dispensingBoard', 'scoops', 'pallets', 'temperature', 'humidity', 'remarks', 'authorizedForUse', 'dateAndTime'  ]}
          />
        } /> */}

        {/* <Route path='/page3' element={<BatchManufacturingFormPage3 />} /> */}
        {/* <Route path='/page4' element={<BatchManufacturingFormPage4 />} />
        <Route path='/page5' element={<BatchManufacturingFormPage5 />} />
        <Route path='/page6' element={<BatchManufacturingFormPage6 />} />
        <Route path='/page8' element={<BatchManufacturingFormPage8 />} /> */}
        {/* <Route path='/pag7' element={<BatchManufacturingFormPage8 />} /> */}





        <Route path='/dragProcesses' element={<DraggableList />} />




        <Route path="/dashboard" element={
           <Protected isAuth={isAuth} userRole={userRole} requiredRole="pharmacist">
           <Dashboard />
         </Protected>
        } />
      {/* <Route path='/dashboard' element= {<Dashboard />} /> */}
        <Route path='/chat' element={<Chat />} />
      <Route path='/unauthorized' element= {<Unauthorized />} />
        

    </Routes>
    </div>
  )
}

export default App