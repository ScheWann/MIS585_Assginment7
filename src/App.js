import './App.css';
import * as React from 'react'
import Menu from './Menu/Menu.jsx'
import Product from './Product/Product.jsx'
import ProductValues from './ProductValues/ProductValues.jsx'
import ProductCategories from './ProductCategories/ProductCategories.jsx'
import ProductHelp from './ProductHelp/ProductHelp.jsx'
import AppFooter from './AppFooter/AppFooter.jsx'
import WithRoot from './components/WithRoot.jsx';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Product />
      <ProductValues />
      <ProductCategories />
      <ProductHelp />
      <AppFooter />
    </React.Fragment>
  );
}

export default WithRoot(App);
