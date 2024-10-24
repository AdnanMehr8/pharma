// // src/CategoryProductList.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setRecord } from '../store/recordSlice';
// import { useNavigate } from 'react-router-dom';


// const categories = [
//   { id: 1, name: 'Injection' },
//   { id: 2, name: 'Tablets' },
//   { id: 3, name: 'Caps' },
//   { id: 4, name: 'Creams' },

// ];

// const products = {
//   1: [
//     { id: 1, name: 'Alfadin injection Amp. 2Mcg' },
//     { id: 2, name: 'Danim Injection 500mg (5ml)' },
//     { id: 3, name: 'Maladan Injection 80mg (1 ml)' },
//     { id: 4, name: 'Novel-D Injection 5mg (1 ml)' },
//     { id: 5, name: 'Xevolac 10mg/ml Inj.' },
//     { id: 6, name: 'Xevolac 30mg/ml Inj (5s)' },
//     { id: 6, name: 'Devenda Injection 500mg/5ml (1 s)' },


//   ],
//   2: [
//     { id: 4, name: 'Afenac-100 Tab', pack: '1x10s' },
//     { id: 5, name: 'Alfadin 0.5 mcg tab (10s)' },
//     { id: 6, name: 'Alfadin 0.5mcg tab (20s)' },
//     { id: 7, name: 'Autist 1mg Tab.' },
//     { id: 8, name: 'Autist 2mg Tab.' },
//     { id: 9, name: 'Autist 3mg Tab.' },
//     { id: 10, name: 'Autist 4mg Tab.' },
//     { id: 11, name: 'Co-Nozac 3mg/25mg.' },
//     { id: 12, name: 'Co-Nozac 6mg/25mg.' },
//     { id: 13, name: 'Coxibit Tablet 15mg' },
//     { id: 14, name: 'Danabid 250mg Tab.' },
//     { id: 15, name: 'Daniprid 50mg Tab.' },
//     { id: 16, name: 'Danopram Tablet 10mg' },
//     { id: 17, name: 'Danopram Tablet 20mg' },
//     { id: 18, name: 'Danrexin Tablet 20mg' },
//     { id: 19, name: 'Dansart 25mg Tabs.' },
//     { id: 20, name: 'Dansart Tab 50mg' },
//     { id: 21, name: 'Dansetron Tab. 4mg' },
//     { id: 22, name: 'Danstin Tablet 10mg' },
//     { id: 23, name: 'Dantone Tablet 20mg' },
//     { id: 24, name: 'Denzodan 600mg Tab.' },
//     { id: 25, name: 'Esolong Tablet 20mg' },
//     { id: 26, name: 'Esolong Tablet 40mg' },
//     { id: 27, name: 'Fenacidan Tab. 5mg' },
//     { id: 28, name: 'Flexilor 4mg Tab.' },
//     { id: 29, name: 'Flexilor 8mg Tab.' },
//     { id: 30, name: 'Gemiloc 320mg Tab' },
//     { id: 31, name: 'Ketorex 200mg Tab.' },
//     { id: 32, name: 'Lopaze Tablet 40mg' },
//     { id: 33, name: 'Lornas Tablet 10mg' },
//     { id: 34, name: 'Maladan DS Tablet' },
//     { id: 35, name: 'Maladan Extra Tablet' },
//     { id: 36, name: 'Monkast Chewable Tablet 4mg' },
//     { id: 37, name: 'Monkast Tablet 10mg' },
//     { id: 38, name: 'Monkast Tablet 5mg' },
//     { id: 39, name: 'Moxitex Tablet 400mg' },
//     { id: 40, name: 'Muslex Tablet 2mg' },
//     { id: 41, name: 'Pepdan Tablet 10mg' },
//     { id: 42, name: 'Pepdan Tablet 20mg' },
//     { id: 43, name: 'Rosnas 10mg Tab.' },
//     { id: 44, name: 'Rosnas 20mg Tab.' },
//     { id: 45, name: 'Sertral 100mg Tab.' },
//     { id: 46, name: 'Sertral 50mg Tab.' },
//     { id: 47, name: 'Sulpeol Tablet 100mg' },
//     { id: 48, name: 'Sulpeol Tablet 25mg' },
//     { id: 49, name: 'Sulpeol Tablet 50mg' },
//     { id: 50, name: 'Tramadan Plus Tablet.' },
//     { id: 51, name: 'Tramadan Tablet 50mg' },
//     { id: 52, name: 'Devenda Tablet 250mg' },
//     { id: 53, name: 'Devenda Tablet 500mg' },
//     { id: 54, name: 'Limigzol Tablet 2.5 mg' },
//     { id: 55, name: 'Nassa Tablet 15mg' },
//     { id: 56, name: 'Nassa Tablet 30mg' },
//     { id: 57, name: 'Olepra Tablet 10mg' },
//     { id: 58, name: 'Olepra Tablet 5mg' },
//     { id: 59, name: 'Paromax CR 12.5mg Tab.' },
//     { id: 60, name: 'Paromax CR Tablet 25mg' },
//     { id: 61, name: 'Paromax CR Tablet 37.5 mg' },
//     { id: 62, name: 'Paromax Tablet 20 mg' },
//     { id: 63, name: 'Saveril Tablet 100mg' },
//     { id: 64, name: 'Saveril Tablet 25mg' },
//     { id: 65, name: 'Vegadon Tab. SR 3mg 14’S' },
//     { id: 66, name: 'Vegadon Tab. SR 3mg 28’s' },
//     { id: 67, name: 'Vegadon Tab. SR 6mg 14’s' },
//     { id: 68, name: 'Vegadon Tab. SR 6mg 28’s' },
//     { id: 69, name: 'Vendep XR-75 Tab' },
//     { id: 70, name: 'Vendep-37.5 Tab' },
//     { id: 71, name: 'Vendep-50 Tab' },
//     { id: 72, name: 'Arex Tablet 10mg 10s' },
//     { id: 73, name: 'Cyclofen SR Tablet 100mg' },
//     { id: 74, name: 'Cyclofen-50 Tab' },
//     { id: 75, name: 'Danidol  CF Tablet' },
//     { id: 76, name: 'Danidol 500mg Tablet' },
//     { id: 77, name: 'Danidol Extra Tablet.' },
//     { id: 78, name: 'Danpro Tablet 250mg 100s' },
//     { id: 79, name: 'Danpro Tablet 250mg 10s' },
//     { id: 80, name: 'Danpro Tablet 500mg 100s' },
//     { id: 81, name: 'Danpro Tablet 500mg 10s' },
//     { id: 82, name: 'Dansaid-100 Tab' },
//     { id: 83, name: 'Danvid Tablet 200mg' },
//     { id: 84, name: 'Eziflam Tablet 550 mg' },
//     { id: 85, name: 'Gastapil Tablet 40mg' },
//     { id: 86, name: 'Gripan Fort 500mg Tab. 100s' },
//     { id: 87, name: 'Gripan Fort 500mg Tab. 200s' },
//     { id: 88, name: 'Irontose-F Tablet' },
//     { id: 89, name: 'Kafenac Tablet 50mg' },
//     { id: 90, name: 'Levoden Tablet 250mg' },
//     { id: 91, name: 'Levoden Tablet 500mg' },
//     { id: 92, name: 'Lide Tablet 100mg' },
//     { id: 93, name: 'Macroclar Tablet 250mg' },
//     { id: 94, name: 'Macroclar Tablet 500mg' },
//     { id: 95, name: 'Methyvit Tablet 500mcg 100s.' },
//     { id: 96, name: 'Methyvit Tablet 500mcg 30s' },
//     { id: 97, name: 'Nitid 150mg Tab.' },
//     { id: 98, name: 'Vomistop Tablet 10mg' },
//     { id: 99, name: 'Zee Tablet 250mg' },
//     { id: 100, name: 'Zee Tablet 500mg' },
    
//   ],
//   3: [
//     { id: 101, name: 'Hydrophyl' },
//     { id: 102, name: 'Sunscream' },
//     { id: 103, name: 'Fair & Lovely' },
//   ],
// };

// const CategoryProductList = () => {
//   const dispatch = useDispatch();
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const navigate = useNavigate();

//   const handleCategoryClick = (id) => {
//     setSelectedCategoryId(id);
//   };

//   const handleProductClick = (productName, packsSize) => {
//     dispatch(setRecord({
//       batchInfo: {
//         productName,
//         packsSize
//       },
//     }));
//     navigate('/form-header');
    
//   };

//   return (
//     <div style={{ display: 'flex', padding: '20px' }}>
//       <div style={{ flex: '1', marginRight: '20px', borderRight: '1px solid #ccc' }}>
//         <h2>Categories</h2>
//         <ul>
//           {categories.map((category) => (
//             <li key={category.id} onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer', padding: '5px', backgroundColor: selectedCategoryId === category.id ? '#f0f0f0' : '' }}>
//               {category.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={{ flex: '2' }}>
//         <h2>Products</h2>
//         {selectedCategoryId ? (
//           <ul>
//             {products[selectedCategoryId].map((product) => (
//               <li key={product.id} onClick={() => handleProductClick(product.name, product.pack)} style={{ cursor: 'pointer', padding: '5px' }}>
//                 {product.name}
//                 {product.pack}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Please select a category to see the products.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryProductList;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRecord } from '../store/recordSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

const categories = [
  { id: 1, name: 'Injections' },
  { id: 2, name: 'Tablets' },
  { id: 3, name: 'Capsules' },
  { id: 4, name: 'Creams' },
];

const CategoryProductList = () => {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); 
        const categorizedProducts = categorizeProducts(response.data);
        setProducts(categorizedProducts);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categorizeProducts = (data) => {
    const categorized = {
      1: [], // Injections
      2: [], // Tablets
      3: [], // Capsules
      4: [], // Creams
    };

    data.forEach(product => {
      product.productList.forEach(item => {
        const description = item.description.toLowerCase();
        if (description.includes('inj') || description.includes('injection') || description.includes('injections')) {
          categorized[1].push(item);
        } else if (description.includes('tab') || description.includes('tablet') || description.includes('tablets')) {
          categorized[2].push(item);
        } else if (description.includes('cap') || description.includes('capsule') || description.includes('capsules')) {
          categorized[3].push(item);
        } else if (description.includes('lotion') || description.includes('gel') || description.includes('cream')) {
          categorized[4].push(item);
        }
      });
    });

      // Sort products in each category alphabetically by description
  Object.keys(categorized).forEach(categoryId => {
    categorized[categoryId].sort((a, b) => a.description.localeCompare(b.description));
  });


    return categorized;
  };

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
  };

  const handleProductClick = (productName, packsSize) => {
    dispatch(setRecord({
      batchInfo: {
        productName,
        packsSize,
      },
    }));
    navigate('/form-header');
  };

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh'  // Full viewport height to center vertically
        }}
      >
        <CircularProgress size="3rem"/>
      </Box>
    );
  }
  
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ flex: '1', marginRight: '20px', borderRight: '1px solid #ccc' }}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category.id)} style={{ cursor: 'pointer', padding: '5px', backgroundColor: selectedCategoryId === category.id ? '#f0f0f0' : '' }}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: '2' }}>
        <h2>Products</h2>
        {selectedCategoryId ? (
          <ul>
            {products[selectedCategoryId].map((product) => (
              <li key={product._id} onClick={() => handleProductClick(product.description, product.packSize)} style={{ cursor: 'pointer', padding: '5px' }}>
                {product.description}
                {/* {product.packSize} */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Please select a category to see the products.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProductList;
