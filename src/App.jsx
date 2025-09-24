import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/404";
import Layout from "./layout/Layout";
import PhotoModule from "./pages/PhotoModule";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
        <HashRouter>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="products/:id" element={<DetailsPage />}>
                <Route path="image" element={<PhotoModule />} />/
              </Route>
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
    </Provider>
  );
}

export default App;
