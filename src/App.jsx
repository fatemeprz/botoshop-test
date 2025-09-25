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
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
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
        </PersistGate>
    </Provider>
  );
}

export default App;
