import { Button } from "@/components/ui/button"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/Login"
import AuthRegister from "./pages/auth/Register"
import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/admin-view/Dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/Orders"
import AdminFeatures from "./pages/admin-view/Features"
import AdminLayout from "./components/admin-view/Layout"
import ShoppingLayout from "./components/shopping-view/Layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingListing from "./pages/shopping-view/Listing"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./store/auth-slice"
import CheckAuth from "./components/common/Check-auth"
import { Skeleton } from "./components/ui/skeleton"

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* auth routes */}

        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />

        <Route path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>

          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />

        </Route>

        {/* admin routes */}
        <Route path="/admin" 
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* shopping routes */}
        <Route path="/shop"
         element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
           <ShoppingLayout />
         </CheckAuth>
         }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>

        {/* not found routes */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>

  )
}

export default App

