// Import Icons:
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Blank from './pages/Blank/Blank';
import Customers from './pages/Documents/Customers';
import Suppliers from './pages/Documents/Suppliers';
import Logistic from './pages/Documents/Logistic';
import ApplicationForm from './pages/Forms/ApplicationForm';
import ReleaseForm from './pages/Forms/ReleaseForm';
import CancellationForm from './pages/Forms/CancellationForm';
import GeneralTables from './pages/Tables/GeneralTables';
import DataTables from './pages/Tables/DataTables';
import BarChart from './pages/Charts/BarChart';
import PieChart from './pages/Charts/PieChart';
import LineChart from './pages/Charts/LineChart';

const App = () => {
  return(
    <Router>
      <div>
        <Header />
        <Sidebar />
        <main id="main" className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/logistic" element={<Logistic />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/release-form" element={<ReleaseForm />} />
            <Route path="/cancellation-form" element={<CancellationForm />} />
            <Route path="/general-tables" element={<GeneralTables />} />
            <Route path="/data-tables" element={<DataTables />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/pie-chart" element={<PieChart />} />
            <Route path="/line-chart" element={<LineChart />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App; 