import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import Meal from './Meal';
import RecipeForm from './RecipeForm.jsx'; 
import RecipeDetail from "./RecipeDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-recipe" element={<RecipeForm />} />
                <Route path="/meal" element={<Meal />} />
                <Route path="/recipe-detail" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
